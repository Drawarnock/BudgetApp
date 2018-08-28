import * as actionTypes from '../actions/actions';

const initialState = {
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHECKAUTH: 
            return {
                isAuthenticated: action.payload || false
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer;