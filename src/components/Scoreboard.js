import React from "react";
import '../styles/Scoreboard.css'

export default function Scoreboard(props) {
    return(
        <div className="scoreboard">
            <div className="scoreDiv" id="currentScore">Current score: {props.currentScore}</div>
            <div className="scoreDiv">Best score: {props.bestScore}</div>
        </div>
    );
};