import { getUser, getUsers } from "../api/api";
import Users from "../components/Users/Users";
import { InferActionsTypes, AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


const SET_USERS = 'scale_solution/user_reducer/SET_USERS';
const SET_USER=`scale_solution/user_reducer/SET_USER`
const TOGGLE_IS_FETCHING = 'scale_solution/user_reducer/TOGGLE_IS_FETCHING';
const TOGLE_IS_ERROR  =`scale_solution/user_reducer/TOGGLE_IS_ERROR`

const SET_USER_ID = 'scale_solution/user_reducer/SET_USER_ID';
const IS_DISABLED_PROCESS = `scale_solution/user_reducer/IS_DISABLED_PROCESS`
let initialState = {
    isDisabled:false as boolean,
    search: '' as string,
    users: [ ] as  Array<UserType>,
    isFetching: true as boolean,
    error:false as boolean,
    user: null as null| oneType,
    currentPage: 13 as number,
    userId: 11 as number
}
export type oneType={
    id:number,
        bio:string,
        pic: string  }

export type UserType = {
    id: number
    name: string
    shortInfo: string
    more: any
}
type actions = ReturnType<typeof setUser>|ReturnType<typeof setUsers>|ReturnType<typeof toggleIsFetching>|ReturnType<typeof toggleIsError>|ReturnType<typeof setUserId>|ReturnType<typeof disabledProcess>
type InitialState = typeof initialState;
const usersReducer = (state = initialState, action: actions): InitialState => {
    switch(action.type) {
  
        case SET_USER_ID:{
            return{...state, userId:action.userId}
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
      case SET_USER:{
          return{...state,user:action.user}
      }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGLE_IS_ERROR:{
            return{...state, error:action.error}
        }
       case IS_DISABLED_PROCESS:{
           return{...state,isDisabled:action.isDisabled, users:state.users.filter(u=>u.id==action.userId)  }
           
       }
        
        default:{
            return state
        }
      
    }
}
// type ActionsTypes = InferActionsTypes<typeof actions>
export const  setUsers =(users:Array<UserType>) => ({type: SET_USERS, users }as const)
export const  setUser=(user:oneType)=>({type:SET_USER,user}as const)
export const  toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching }as const)
export const  toggleIsError =(error:boolean) => ({type: TOGLE_IS_ERROR, error }as const)
export const  setUserId =(userId:number) => ({type: SET_USER_ID, userId}as const)
export const  disabledProcess = ( isDisabled:boolean,userId:number,)=>({type: IS_DISABLED_PROCESS, isDisabled, userId }as const)

// type DispatchType = Dispatch<ActionsTypes>
export const setInformUser = (userId=11):any  => {
    return (dispatch:any)=> {
        dispatch(toggleIsFetching(true));
        dispatch(setUserId(userId))
        getUser(userId).then(res=> {
            dispatch(toggleIsFetching(false));
            dispatch(setUser(res.data));
           
        })
        .catch((err)=>dispatch(toggleIsError(true)))
    }
}

export const setAllUsers = (search:string):any => {
  
    return (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        getUsers().then(response => {
            dispatch(setUsers(response.data.data));
            dispatch(toggleIsFetching(false));
            
        })
        .catch((err)=>dispatch(toggleIsError(true)))
    }
}

export default usersReducer;