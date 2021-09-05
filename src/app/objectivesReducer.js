const initialState = {
    objectives: [],
    statuses: [],
}

export const ActionTypes = {
    SET_OBJECTIVES: 'SET_OBJECTIVES',
    SET_STATUSES: 'SET_STATUSES',
    NEW_OBJECTIVE: 'NEW_OBJECTIVE',
    EDIT_OBJECTIVE: 'EDIT_OBJECTIVE',
    DELETE_OBJECTIVE: 'DELETE_OBJECTIVE',
}

export const ActionCreators = {
    setObjectives: payload => ({ type: ActionTypes.SET_OBJECTIVES, payload }),
    setStatuses: payload => ({ type: ActionTypes.SET_STATUSES, payload }),
    newObjective: payload => ({ type: ActionTypes.NEW_OBJECTIVE, payload }),
    editObjective: payload => ({ type: ActionTypes.EDIT_OBJECTIVE, payload }),
    deleteObjective: payload => ({ type: ActionTypes.DELETE_OBJECTIVE, payload }),
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.SET_OBJECTIVES:
            return { ...state, objectives: [...action.payload] };

        case ActionTypes.SET_STATUSES:
            return { ...state, statuses: [...action.payload] };

        case ActionTypes.NEW_OBJECTIVE:
            return { ...state, objectives: [action.payload, ...state.objectives] }

        case ActionTypes.EDIT_OBJECTIVE:
            var objectives = state.objectives.map(objective => {
                if (objective.id === action.payload.id) {
                    objective = action.payload;
                }
                return objective;
            });
            return { ...state, objectives: [...objectives] };
            
        case ActionTypes.DELETE_OBJECTIVE:
            var objectives = state.objectives.filter(objective =>
                objective.id !== action.payload.id);
            return { ...state, objectives: [...objectives] };

        default:
            return state;
    }
}