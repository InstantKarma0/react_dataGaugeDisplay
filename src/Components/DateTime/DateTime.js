import React, { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/themeContext";
import "./DateTime.css";

function DateTime(props) {

    const [dateTime, setDate] = useState(new Date());

    // Theme Context
    const { theme } = useTheme();

    // Update Date and Time
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date());
        }, 100);
    });

    var dynamicStyle = {
        container: {
            backgroundColor: theme.componentBG
        },
        time: {
            color: theme.titleColor
        },
        date: {
            color: theme.fontColor
        }
    } 

    return (
        <div id="dateTime" style={dynamicStyle.container}>
            <h1 id="time" style={dynamicStyle.time}>{dateTime.toLocaleTimeString()}</h1>
            <h2 id="date" style={dynamicStyle.date}>{dateTime.toLocaleDateString()}</h2>
            <h4 style={dynamicStyle.date}>Data Updated at: {props.updateTime}</h4>
        </div>
    )
    
}   export default DateTime;