import { useState } from "react";
import './Footer.css'

function Footer(){

    const [footerInput,SetfooterInput]=useState('');

    const setData = () => {
        SetfooterInput("Thank you so much!");
    };

    return(
        <div>
            <footer>Thank you for visiting my Website😁</footer>
            <p className="question">Did you like the website?</p>   

            <div className="buttons">
                <button className="button1" onClick={setData}>Yes</button>
                <button className="button2"  onClick={setData}>Yessss</button>
            </div>

            <p className="FinalOutput">{footerInput}</p>

        </div>
    );
}
export default Footer;