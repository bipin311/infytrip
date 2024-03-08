export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            state = {
                ...state,
                user: action.payload
            }
            break;

        case 'NULL_USER':
            state = {
                ...state,
                user: null
            }
            break;

        default:
            break;

    }

    return state;
}

//Actions
export const setUserAction = (user) => ({
    type: 'SET_USER',
    payload: user
})