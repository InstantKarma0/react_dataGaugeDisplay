import React ,{ useEffect, useState } from "react";
import { useTheme } from "../../Contexts/themeContext";
import "./Gauge.css"

function Gauge(props) {
    
    // Theme Context
    const { theme, gaugeTheme } = useTheme();
    
    const [angle, setAngle] = useState(0)
    const [current, setCurrent] = useState(props.data[1]);
    const [color, setColor] = useState(gaugeTheme === null ? [0,255,0] : gaugeTheme);

    // HOOKS
    
    // calcul filled bar percentage for the CSS animation
    useEffect(() => {
        let fraction = props.data[3] / props.data[2];
        setAngle(Math.round(fraction * 180));
    }, [props.data]);
    
    // Increased value Animation
    useEffect(() => {
        let delta = props.data[3] - props.data[1];
        setTimeout(() => {
            current >= props.data[3] ? setCurrent(props.data[3]) : setCurrent(current + ( delta / 33));
        }, 33);
    }, [props.data, current]);
    
    // Change color of the bar
    useEffect(() => {
        if (gaugeTheme === null ) {
            let fraction = props.data[3] / (props.data[2] - props.data[1]);
            let color = colorCalculRgb([255,0,0],[0,255,0], fraction);
            setColor(color);
        } else {
            setColor(gaugeTheme)
        }
    }, [props.data, gaugeTheme]);


    // STYLE
    var dynamicStyle = {
        gauge: {
            backgroundColor: theme.componentBG,
        },
        title: {
            color: theme.titleColor,
        },
        font: {
            color: theme.fontColor
        },
        activeGauge: {
            transform: "rotate(" + angle + "deg)",
            backgroundColor: "rgb("+ color.join(",") + ")"
        }
    }

    // RENDER
    return(
    <div className="gauge" style={dynamicStyle.gauge}>
        <div className="gaugeTitle">
            <h1 style={dynamicStyle.title}>{props.data[0]}</h1>
        </div>
        <div className="gaugeGraph">
            <span className="circle"></span>
            <span className="littleCircle" style={dynamicStyle.gauge}></span>
            <span className="circleC" 
                style={dynamicStyle.activeGauge}>
                            
            </span>
        </div>
        <div className="gaugeInfo">
            <h2 style={dynamicStyle.font}>{props.data[1]}</h2>
            <h1 style={dynamicStyle.title} className="infoCurrent">{Math.round(current)}</h1>
            <h2 style={dynamicStyle.font}>{props.data[2]}</h2>
        </div>
    </div>
    )
}   export default Gauge;




function colorCalculRgb(c1, c2, p) {
    let delta = []
    let w2 = 1 - p
    for(let i = 0; i < 3; i++) {
        delta.push(Math.round(Math.sqrt((Math.pow(c1[i],2)*p) + (Math.pow(c2[i],2)*w2) / 2)));
    }
    return delta;
}

