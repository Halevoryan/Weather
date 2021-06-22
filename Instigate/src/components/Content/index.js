import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./content.css"

const apiKey = "686123cb59b8e93b0ef7e87bb77cfa0c";

function Content({cityName }) {
    const [days, setDays] = useState(1);
    const [weatherData, setWeatherData] = useState(null);

     useEffect(() => {
         if (cityName) {
             //https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=${days}&appid=${apiKey}
             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
                 .then(response => response.json())
                 .then(data => setWeatherData({temp: data.main.temp,   country: data.sys.country}))
         }

    }, [cityName, days])

    return (
        <div className="infoWeather">
            <div  className="textInfo">
                <br/>
                    Country: { weatherData?.country}
                <br/>

                {
                 days > 1 ? (
                   // mez petq e ga objectner-i array, u menq map method-ov kfranq u knkarenq datan
                     weatherData?.map((i, index) => {
                        // elementin vorpes key chi kareli tal iteraciayi index, bayc qani vor data
                         // chunem vorpeszi id vercnem, dra hamar index em tvel
                        return (
                             <div key={index}>
                                 <span>${i.day}</span>
                                 <span>${i.id}</span>
                             </div>
                         )
                     })
                 ) : (

                     <div>
                         <span>City name: {cityName}</span>
                         <br/>
                         <span>Temp:  {weatherData?.temp}  C</span>
                     </div>


                 )
             }
             {

                 cityName && (
                     <div className="buttonInfo">
                         <div >
                             <button /*onClick={() => setDays(5)}*/>5 days</button>
                             <button /*onClick={() => setDays(10)}*/>10 days</button>
                             <button /*onClick={() => setDays(15)}*/>15 days</button>
                         </div>
                         <br/>
                         <div>
                             <button >6 hours</button>
                             <button >12 hours</button>
                             <button >24 hours</button>

                         </div>


                 </div>

                 )
             }

            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        cityName: state.weather.cityName,
    }
}

export default connect(mapStateToProps)(Content);


