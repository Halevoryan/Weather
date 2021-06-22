import React, {useState} from "react";
import {useDispatch} from "react-redux";

function HeaderRight() {
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState(null);

    const clickHandler = () => {
        dispatch({type: "setCityName", payload: cityName})
    }

    return (
        <div className="stHeaderRight">
            <input onChange={(event) => {
                setCityName(event.target.value)
            }} type="text" name="City" placeholder="City Name"/>
            <button onClick={clickHandler}> Search City
            </button>
        </div>
    )
}

export default HeaderRight;