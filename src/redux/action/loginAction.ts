import { LoginValues } from "../../components/login-user/Login"

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginRequest = (credentials:LoginValues)=>({type:LOGIN_REQUEST, payload:credentials })
export const loginSuccess = (user:LoginValues[])=>({type:LOGIN_SUCCESS, payload:user })
export const loginFailure = (error:string)=>({type:LOGIN_FAILURE, payload:error })
