import React from "react";
import { useTheme } from "../../Contexts/themeContext";
import { gaugeThemes } from "../../constants/theme";
import "./ThemeTool.css"


function ThemeTool() {

    // Theme Context
    const { theme, toggleTheme, toggleGaugeTheme } = useTheme();


    // Style
    var dynamicStyle = {
        container: {
            backgroundColor: theme.componentBg
        },
        font: {
            color: theme.fontColor
        }
    }


    return(
        <div id="themeTool" style={dynamicStyle.container}>
            <div id="theme">
                <h4 style={dynamicStyle.font}>Theme</h4>
                <button onClick={toggleTheme}>Dark/Light</button>
            </div>
            <div id="gaugeTheme">
                <h4 style={dynamicStyle.font}>Gauge Theme</h4>
                <span onClick={() => toggleGaugeTheme("blue")} style={{backgroundColor: "rgb("+ gaugeThemes.blue.join(",") + ")"}}></span>
                <span onClick={() => toggleGaugeTheme("purple")} style={{backgroundColor: "rgb("+ gaugeThemes.purple.join(",") + ")"}}></span>
                <span id="noneBtn" onClick={() => toggleGaugeTheme("none")}></span>
            </div>
        </div>
    )



} export default ThemeTool;