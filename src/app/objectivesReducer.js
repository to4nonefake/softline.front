const initialState = {
    objectives: [],
    statuses: [],
}

export const ActionTypes = {
    SET_OBJECTIVES: 'SET_OBJECTIVES',
    SET_STATUSES: 'SET_STATUSES',

}

export const ActionCreators = {
    setObjectives: payload => ({ type: ActionTypes.SET_OBJECTIVES, payload }),
    setStatuses: payload => ({type: ActionTypes.SET_STATUSES, payload}),
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.SET_OBJECTIVES:
            return { ...state, objectives: [...action.payload] };
       
        case ActionTypes.SET_STATUSES:
            return { ...state, statuses: [...action.payload] };

        default:
            return state;
    }
}