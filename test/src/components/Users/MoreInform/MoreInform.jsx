import React from "react"
import s from "./MoreInform.module.css"
import ErrorIndicator from "../../error-indicator/error-indicator"
import Preloader from "../../common/Preloader/Preloader"
const MoreInform = ({bio, pic, id, isFetching, users})=>{

    const ourUser = users.filter(u=>u.id == id)
    return(
        <div className={s.inform}>
            {ourUser.map(i=>{
                return (<div key={i.id}>
                    <h2>{i.name}</h2>
                <h3>{i.shortInfo}</h3>
                </div>)
            } )}
        {isFetching ? <Preloader/>:null} 
              <img  src={`https://mrsoft.by/tz20/${pic}`}/>  
               <h4>{bio}</h4>
          
        </div>
    )
}
export default MoreInform