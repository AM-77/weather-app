const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYW1pbmU3NyIsImEiOiJjazh4MGFwZW4wZmdlM29xb2hjZnY0cjhvIn0.cHg9IKoSPpShxe3xryDcMg"
const WEATHERBIT_API_KEY = "9f60af84f1fd40e59ba9aeabf19ce051"

export const fetchCity = async (cityName) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
    return await fetch(url)
        .then((res) => res.json())
        .then((res) => { 
            let data = {}
            data.coordinates = res.features[0].center
            if(res.features[0].context.length > 0){
                res.features[0].context.forEach(context => {
                    if(context.id.indexOf("country") > -1){
                        data.country = context.text
                    }
                })
            }

            return { type: "success", ...data } 
        })
        .catch((error) => { return { type: "error", message: "A catched error from fetchCity.", ...error } }) 
}

export const fetchWeather = async (coordinates) => {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${coordinates[1]}&lon=${coordinates[0]}&key=${WEATHERBIT_API_KEY}`
    return await fetch(url)
        .then((res) => res.json())
        .then((res) => { 

            if(res.data.length > 0){
                // sunrise: Sunrise time (HH:MM).
                // sunset: Sunset time (HH:MM).
                // pres: Pressure (mb).
                // wind_spd: Wind speed (Default m/s).
                // temp: Temperature (default Celcius).
                // rh: Relative humidity (%).
                // clouds: Cloud coverage (%).
                const { sunrise, sunset, pres, wind_spd, temp, rh, clouds } = res.data[0]

                const result = { sunrise, sunset, pres: pres.toFixed(2), wind_spd: wind_spd.toFixed(2), temp, rh, clouds }
                return result
            }else{
                return { type: "error", message: "No Wheather Was Found." }
            }
        })
        .catch((error) => { return { type: "error", message: "A catched error from fetchWeather.", ...error } })
} 


