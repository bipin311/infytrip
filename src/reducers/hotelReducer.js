export const hotelReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            state = {
                ...state,
                destinations: action.payload
            }
            break;

        case 'SET_ROOMS':
            state = {
                ...state,
                rooms: action.payload
            }
            break;

        default:
            break;

    }

    return state;
}

//Actions
export const setCountriesAction = (destinations) => ({
    type: 'SET_COUNTRIES',
    payload: destinations
})

export const setRoomsAction = (rooms) => ({
    type: 'SET_COUNTRIES',
    payload: rooms
})