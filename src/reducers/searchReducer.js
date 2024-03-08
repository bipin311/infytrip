export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            state = {
                ...state,
                location: action.payload
            }
            break;

        case 'SET_FILTER_DATA':
            state = {
                ...state,
                filterData: action.payload
            }
            break;

        case 'SET_RESULTS':
            state = {
                ...state,
                results: action.payload
            }
            break;

        case 'SET_ID':
            state = {
                ...state,
                id: action.payload
            }
            break;

        default:
            break;

    }

    return state;
}

//Actions
export const setLocationAction = (location) => ({
    type: 'SET_LOCATION',
    payload: location
})

export const setResultsAction = (results) => ({
    type: 'SET_RESULTS',
    payload: results
})

export const setIdAction = (id) => ({
    type: 'SET_ID',
    payload: id
})

export const setFilterDataAction = (filterData) => ({
    type: 'SET_FILTER_DATA',
    payload: filterData
})