import React, { useState } from 'react';
import s from "./users.module.css";
import User from "./User/User"
import Preloader from "../common/Preloader/Preloader";
import ErrorIndicator from '../error-indicator/error-indicator';

let Users = ({error, users, setInformUser,isFetching,  setDisabled ,userId,isDisabled,search, onChange, filterUsers, disabledInProgress,disabledProcess }) => {
// const [search, setSearch]= useState("")
// const onChange = (e)=>{
//   setSearch(e.target.value)
// }
// const filterUsers = users.filter(u=>u.name.toLowerCase().includes(search.toLowerCase()))
    return (

    <div className={s.users}>
      <input type="text"
    className = {s.input}
    placeholder="type to search"
    value={search}
    onChange={ onChange } />
      { isFetching?  <Preloader />:null}
        {
        filterUsers.map(u =>{
          return(
          <User key={u.id} name={u.name} shortInfo={u.shortInfo} id={u.id} setInformUser={setInformUser} disabledInProgress={disabledInProgress} disabledProcess={disabledProcess} userId={userId} isDisabled={isDisabled} setDisabled={setDisabled} users={users}/>
          )
          }
          )}
           </div>)
}

export default  Users;