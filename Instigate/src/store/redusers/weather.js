export  default function weatherReducer (state = {}, action) {
    switch (action.type) {
        case "setCityName":
            console.log(action)
            return {
                cityName: action.payload,
            };
        default :
            return state;
    }
}
