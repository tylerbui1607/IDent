import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { dentistActions } from "../../../actions/dentistAction";
import { serviceActions } from "../../../actions/serviceActions";
import { appointmentActions } from "../../../actions/appointmentActions";
import { appActions } from "../../../actions/appActions";
import LoadingDisplay from "../../../common/loadingDisplay";
import Calendar from './calendar';
import { constants } from '../../../constants';

function Appointment() {
    const schedule = useSelector(state => state.dentist.schedule);
    const user = useSelector(state => state.authentication.user);
    const dentists = useSelector(state => state.dentist.dentists);
    const services = useSelector(state => state.service.services);
    const dentistStatus = useSelector(state => state.dentist.status);
    const serviceStatus = useSelector(state => state.service.status);

    const [errors, setErrors] = useState({});
    const [shift, setShift] = useState([]);
    const [currentDentists, setCurrentDentists] = useState([]);
    const [currentServices, setCurrentServices] = useState([]);
    const [selectedService, setSelectedService] = useState({});
    const [selectedShift, setSelectedShift] = useState("");
    const [selectedDay, setSelectedDay] = useState({ year: -1, month: -1, day: -1 });
    const [dentistID, setDentistID] = useState("");
    const [time, setTime] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "iDent - Make appointment"
        if (dentistStatus === constants.LOADING) {
            dispatch(dentistActions.getAllDentist())
        }
        else
            if (serviceStatus === constants.LOADING)
                dispatch(serviceActions.getAllService())
            else {
                setCurrentDentists(dentists);
                setCurrentServices(services);
            }
    }, [dentists, dentistStatus, serviceStatus, services, dispatch]);

    function handleShiftDisplay(e) {
        let date = e.target.id;
        let splitDate = date.split('-');
        let selectedSchedule = schedule.filter(v => date === `${v.year}-${v.month}-${v.day}`);
        setShift(selectedSchedule[0].shifts);
        setSelectedShift("");
        setSelectedDay({
            year: parseInt(splitDate[0]),
            month: parseInt(splitDate[1]),
            day: parseInt(splitDate[2])
        });
    }

    function validate() {
        let err = [];
        if (!Object.keys(selectedService).length)
            err.push("Please pick a service!")
        if (!dentistID.length)
            err.push("Please pick a dentist!");
        if (selectedDay.year === -1)
            err.push("Please select a day!");
        if (!selectedShift.length)
            err.push("Please pick a time!")
        return err;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!user) {
            dispatch(appActions.changePopup(constants.POPUP_LOGIN));
            return;
        }
        let error = validate();
        setErrors(error);
        if (Object.keys(error).length) {
            return;
        }
        let year = selectedDay.year;
        let month = selectedDay.month;
        let day = selectedDay.day;
        dispatch(appointmentActions.makeAppointment({
            service: selectedService.serviceID,
            service_name: selectedService.serviceName,
            dentist: dentistID,
            day,
            month,
            year,
            hour: time.hour,
            minute: time.minute,
            customer: user._id,
            customer_name: user.name,
            email: user.email
        }))
    }

    function handleServiceChange(e) {
        let serviceID = e.target.value;
        let serviceName = e.target.options[e.target.selectedIndex].text;
        let selectedService = {
            serviceID,
            serviceName
        };
        setSelectedService(selectedService);
        setShift([]);
        setDentistID("");
        let lstDentists = dentists.filter(v => {
            let isOk = false;
            for (let i = 0; i < v.expert.length; i++)
                if (v.expert[i]._id === serviceID)
                    isOk = true;
            return isOk;
        });
        dispatch({ type: "REMOVE_SCHEDULE" });
        setCurrentDentists(lstDentists);
        setSelectedDay({ year: -1, month: -1, day: -1 });
        document.getElementById("doctor").value = "Pick a dentist";
    }

    function handleDentistChange(e) {
        let dentistID = e.target.value;
        setDentistID(dentistID);
        setSelectedDay({ year: -1, month: -1, day: -1 });
        setShift([]);
        dispatch(dentistActions.getDentistSchedule(dentistID));
    }

    function handleSelectShift(e) {
        let shift = e.target.id;
        let hour = parseInt(shift.split('-')[0].split(':')[0]);
        let minute = parseInt(shift.split('-')[0].split(':')[1]);
        setTime({ hour, minute })
        console.log(hour, minute);
        setSelectedShift(shift);
    }

    return (
        dentistStatus === constants.LOADING || serviceStatus === constants.LOADING
            ? <LoadingDisplay />
            :
            <div className="page_container" style={{ background: "url(/img/a_banner.jpg)" }}>
                <div className="appointment">
                    <div className="service">
                        <div className="content">
                            <p>Need a doctor?</p>
                            <h2>Make An Appointment Now</h2>
                        </div>
                        <form className="book-doctor" onSubmit={handleSubmit}>
                            <label htmlFor="service">Service</label>
                            <select id="service" onChange={handleServiceChange}>
                                <option className="service-name" >Pick a service</option>
                                {
                                    currentServices.map((v, i) => <option key={i} className="service-name" value={v._id}>{v.name}</option>)
                                }
                            </select>
                            <label htmlFor="doctor">Dentists</label>
                            <select id="doctor" onChange={handleDentistChange}>
                                <option className="doctor-name" >Pick a dentist</option>
                                {
                                    currentDentists.map(function (dentist, i) {
                                        return <option className="doctor-name" key={i} value={dentist._id}>{dentist.name}</option>
                                    })
                                }
                            </select>
                        </form>
                    </div>
                    <div className="container">
                        <Calendar selectedDay={selectedDay} handleShiftDisplay={handleShiftDisplay} workingDay={schedule} />
                        <div className="schedule">
                            <div className="shift-display">
                                {
                                    shift.map((s, i) => {
                                        let id = `${s.from}-${s.to}`;
                                        let customClass = id === selectedShift ? "shift shift-active" : "shift"
                                        return (
                                            <div id={id} onClick={handleSelectShift} className={customClass} key={i}>
                                                {`${s.from} - ${s.to}`}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <div className="center-text text-error">{errors.length ? errors[0] : ""}</div>
                                <button onClick={handleSubmit} id="getDoctor-btn">Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Appointment