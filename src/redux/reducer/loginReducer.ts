import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../action/loginAction"

const initialState = {
    user: null,
    loading: false,
    error: null
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case LOGIN_FAILURE:
            return { ...state, loading: true, error: action.payload }
        default:
            return state
    }
}
export default loginReducer