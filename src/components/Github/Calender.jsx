import React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import '../../Calender.css'

export const Calendar = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };


    return (
        <div className="outerBox">
            <div className="calendarContainer">

                <div className="calendarBox">
                    <h3>GitHub Calender</h3>
                    <GitHubCalendar
                        username="lokesh-patidar"
                        color="yellow"
                        transformData={selectLastHalfYear}
                        hideTotalCount
                        hideColorLegend
                        style={{
                            width: "100%",
                            cursor: "pointer"
                        }}
                    >
                        <ReactTooltip delayShow={20} />
                    </GitHubCalendar>
                </div>
            </div>
            <div className="graph-1">
                <p align="center">
                    <a href="https://github.com/SachinMasai"><span>
                        <img align="center" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SachinMasai&theme=dracula&bg_color=0D1117" />
                    </span></a> 
                </p>
            </div>

            <div className="graph">
            <p align="center">
                <a href="https://github.com/SachinMasai/github-readme-activity-graph">
                    <img alt="lokesh-patidar Activity Graph"
                        src="https://activity-graph.herokuapp.com/graph?username=SachinMasai&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
                </a>
                </p>
            </div>
            <hr id="projectsPageSection" />
        </div>
    );
}