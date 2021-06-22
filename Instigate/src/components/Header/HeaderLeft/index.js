import React from "react";

function HeaderLeft() {
    function home() {
        return (
            alert("Please enter the name of the city and find out the weather forecast")
        )
    }

    return (
        <div className="stHeaderLeft"
             onClick={home }>
            <span/>
            <h3 >
                Armenian <br/>Weather
            </h3>
        </div>
    )
}

export default HeaderLeft;