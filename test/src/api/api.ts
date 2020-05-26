import  axios from "axios";
import { UserType, oneType } from "../redux/users-reducer";


const instance = axios.create({
    baseURL: `https://mrsoft.by/tz20/`,
});


export const getUsers=()=>{
    return instance.get("list.json")
}
export const getUser=(userId:number)=>{ 
    return instance.get(`cats/${userId}.json`)
}
type UsersResponseType = {
    basepath:string
    data: Array<UserType>
}
type UserResponseType = {
    data: {
        id:number,
        bio:string,
        pic:string
    }
}
