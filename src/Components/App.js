import React, { useState } from 'react';
import './App.css';
import Gauge from './Gauge/Gauge';
import Time from './DateTime/DateTime';

import { useTheme } from '../Contexts/themeContext';
import ThemeTool from './ThemeTool/ThemeTool';


function App() {

    // Theme Context
    const { theme } = useTheme();
    const [data, setData] = useState(
        [
            ["Temp °C", 0, 100, 95],
            ["Humidity %", 0, 100 , 41],
            ["Watts", 0, 1000 , 850],
            ["Jauge 4", 150, 410, 250],
            ["Jauge 5", 25, 160, 45],
            ["Jauge 6", 180, 990 , 785],
            ["Jauge 7", 1, 3, 2],
            ["Jauge 8", 14000, 80000, 75000],
        ]
    );
    const [updateTime, setUpdateTime] = useState(new Date);

    let key = 0;
    let gaugeArray = [];
    data.forEach(element => {
        gaugeArray.push(<Gauge data={element} key={key} />)
        key++;
    });

    return (
        <div style={{backgroundColor: theme.firstBG}} id="App">
            <div id="sideBar">
                <Time updateTime={ updateTime.toLocaleTimeString() }/>
                <ThemeTool/>        
            </div>
            <div id="gaugeContainer">
                {gaugeArray}
            </div>
        </div>
    );
}
    
export default App;
