import { reducerCases } from "./Constants";

export const initialState = {
    token: null,

}

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state, 
                token: action.token
            }
        }

            return state
    }
};

export default reducer;