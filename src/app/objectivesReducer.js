const initialState = {
    objectives: [],
    statuses: [],
}

export const ActionTypes = {
    SET_OBJECTIVES: 'SET_OBJECTIVES',
    SET_STATUSES: 'SET_STATUSES',
    NEW_OBJECTIVE: 'NEW_OBJECTIVE',

}

export const ActionCreators = {
    setObjectives: payload => ({ type: ActionTypes.SET_OBJECTIVES, payload }),
    setStatuses: payload => ({ type: ActionTypes.SET_STATUSES, payload }),
    newObjective: payload => ({ type: ActionTypes.NEW_OBJECTIVE, payload }),
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.SET_OBJECTIVES:
            return { ...state, objectives: [...action.payload] };

        case ActionTypes.SET_STATUSES:
            return { ...state, statuses: [...action.payload] };

        case ActionTypes.NEW_OBJECTIVE:
            return { ...state, objectives: [action.payload, ...state.objectives] }

        default:
            return state;
    }
}