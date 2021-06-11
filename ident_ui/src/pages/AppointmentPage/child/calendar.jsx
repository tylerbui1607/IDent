import { useEffect, useState } from 'react';
import React from 'react';
const date = new Date();

function Calendar(props) {

    let workingDay = props.workingDay ? props.workingDay.map(v => `${v.year}-${v.month}-${v.day}`) : [];

    //appointmentform
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];
    const monthNumber = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    }

    const [month, setMonth] = useState(months[date.getMonth()]);
    const [days, setDays] = useState([]);
    const [prevDays, setPrevDays] = useState([]);
    const [nextDays, setNextDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState("");

    function handleChangeDay(e) {
        props.handleShiftDisplay(e);
    }

    function getCalendarDays() {
        const firstDayIndex = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDay();
        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();

        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();

        let nextDay = 7 - lastDayIndex;
        const prevdays = [];
        const dayss = [];
        const nextdays = [];
        for (let x = firstDayIndex - 1; x >= 0; x--) {
            prevdays.push(prevLastDay - x);
        }
        setPrevDays(prevdays);
        for (let i = 1; i <= lastDay; i++) {
            dayss.push(i);
        }
        setDays(dayss);
        for (let j = 1; j <= nextDay; j++) {
            nextdays.push(j);
        }
        setNextDays(nextdays);
    }

    useEffect(() => {
        getCalendarDays();
        let { year, month, day } = props.selectedDay;
        setSelectedDay(`${year}-${month}-${day}`);
    }, [month, props])


    function goNextMonth() {
        date.setMonth(date.getMonth() + 1);
        setMonth(months[date.getMonth()]);
    }
    function goPrevMonth() {
        date.setMonth(date.getMonth() - 1);
        setMonth(months[date.getMonth()]);
    }

    return (
        <div className="calendar">
            <div className="month noselect">
                <button className="prev-btn" onClick={goPrevMonth}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="date">
                    <h1>{month}</h1>
                    <p>{date.toDateString()}</p>
                </div>
                <button className="next-btn" name="chevron-forward-outline" onClick={goNextMonth} >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="weekdays">
                <div className="noselect">Mo</div>
                <div className="noselect">Tu</div>
                <div className="noselect">We</div>
                <div className="noselect">Th</div>
                <div className="noselect">Fr</div>
                <div className="noselect">Sa</div>
                <div className="noselect">Su</div>
            </div>
            <div className="days">
                {
                    prevDays.map((prevday, i) =>
                    (<div className="col1-7" key={i}>
                        <div className="square">
                            <div className="day-display prev-date noselect">{prevday}</div>
                        </div>
                    </div>
                    ))
                }
                {
                    days.map(function (day, i) {
                        let dayinfor = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
                        let currentDay = new Date().getDate();
                        let currentMonth = new Date().getMonth() + 1;
                        let customClass = selectedDay === dayinfor
                            ? "day-display noselect day-have-plan day-active"
                            : "day-display noselect day-have-plan"
                        if (workingDay.indexOf(dayinfor) !== -1
                            && currentDay <= day
                            && currentMonth <= monthNumber[month]) {
                            return (
                                <div key={i} className="col1-7">
                                    <div className="square">
                                        <div id={dayinfor} className={customClass}
                                            onClick={handleChangeDay}>
                                            {day}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        if (day === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                            return (
                                <div key={i} className="col1-7">
                                    <div className="square">
                                        <div className="day-display today noselect">
                                            {day}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={i} className="col1-7">
                                    <div className="square">
                                        <div className="day-display noselect">
                                            {day}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )
                }
                {
                    nextDays.map((nextDay, i) => (
                        <div key={i} className="col1-7"><div className="square"><div className="day-display next-date noselect">{nextDay}</div></div></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calendar