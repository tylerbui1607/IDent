import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { appointmentActions } from "../actions/appointmentActions";
import { constants } from "../constants";


function AppointmentList(){

    const[ appointments, setAppointments] = useState();

    const user = useSelector(store => store.authentication.user);
    const Appointments = useSelector (state=>state.appointment.appointments);
    const appointmentStatus = useSelector(state=>state.appointment.status);

    const [currentAppointment, setCurrentAppointment] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user)
        {if(appointmentStatus === constants.LOADING)dispatch(appointmentActions.getUserAppointments(user._id))
        else{
            setAppointments(Appointments);
        }}
        else{
            setAppointments(false);
        }
    },[Appointments,appointmentStatus,user,dispatch])

    function viewDetailAppoint(ele){
        setCurrentAppointment(appointments[ele.target.id]);
    }
    function closeDetailPopup(){
        setCurrentAppointment(false);
    }
    return(
        <div class="table_container">
         { currentAppointment &&   <div class = "filter"></div>}
         <h1>Appointments</h1>   
        <table>
            <thead>
                <tr>
                    <th>Dentist</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
                    {appointments  &&
                        appointments.map((appointment,index)=>{
                           
                        return <tr>
                            <td>{appointment.dentist.name}</td>
                            <td style={{display: "flex",flexDirection: "column",justifyContent: "center",}}>
                                <span>{appointment.day}/{appointment.month}/{appointment.year}</span>
                                <span style={{color: "#56a4fb",}}>{appointment.hour}:{appointment.minute}</span>
                            </td>
                            <td>{appointment.service.name}</td>
                            <td><span style={{color: "#56b358",borderRadius: "20px",fontSize: "12px",fontWeight:"bold",display: "inline-block",padding: "5px 20px",backgroundColor: "#e2f6ed",}}>Confirm</span></td>
                            <td><button class="viewappoint_btn" id={index} onClick={viewDetailAppoint}><i class="far fa-eye"></i> View</button><button id={index} class="cancelappoint_btn"><i class="far fa-times-circle"></i> Cancel</button></td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
            {currentAppointment && <div class="detailappoint_popup">
                <h2>Appointment Details</h2>
                <div class="details_content">
                    <div>
                        <h3>Dentist:</h3>
                        <p>{currentAppointment.dentist.name}</p>
                    </div>
                    <div>
                        <h3>Service:</h3>
                        <p>{currentAppointment.service.name}</p>
                    </div>
                    <h3>Date:</h3>
                    <p>{currentAppointment.day}/{currentAppointment.month}/{currentAppointment.year} - {currentAppointment.hour}:{currentAppointment.minute}</p>
                    <div class="status">{currentAppointment.appointment}</div>
                </div>
                <button onClick={closeDetailPopup} id="closedetailappoint_btn"><i class="fas fa-times"></i></button>
            </div>}
        </div>
    )
}
export default AppointmentList