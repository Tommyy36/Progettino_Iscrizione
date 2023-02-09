import React from "react";
import "./ThirdPage.css";
import { AiFillCheckCircle } from 'react-icons/ai';
import "../ResThird.css";

const ThirdPage = () => {
    return (
        <div className="ThirdPage">
            <div className="form">
                <AiFillCheckCircle size={50} />
                <h1>Congratulazioni</h1>
                <h2>Hai completato l'iscrizione</h2>
            </div>
        </div>
    )
}

export default ThirdPage;