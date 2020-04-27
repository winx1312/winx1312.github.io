import React from 'react';
import {connect} from 'react-redux';
import {
   setAllUsers, setInformUser,  disabledProcess
} from '../../redux/users-reducer';

import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import s from "./users.module.css";
import MoreInform from './MoreInform/MoreInform';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUsersSelector, getUserSelector, getFetchingSelector, getErrorSelector, getDisabledSelector, getUserIdSelector, getDisabledInProgressSelector } from '../../redux/users.selectors';
class UsersContainer extends React.Component {
    
    componentDidMount() {
    this.props.setAllUsers( )
    this.props.setInformUser(this.props.match.params.userId)
    }
    
    componentDidUpdate(prevProps){
        if((prevProps.userId !== this.props.userId) || (prevProps.search!==this.props.search) ){
            this.props.setInformUser( this.props.match.params.userId)
        
        }
    }

    state={
        search:""
    }
    onChange= (e)=>{
        this.setState({search:e.target.value})
    }
    render() {
        const filterUsers = this.props.users.filter(u=>u.name.toLowerCase().includes(this.state.search.toLowerCase()))
        return (
            <div className={s.main}>
            { this.props.isFetching ? <Preloader />:null}
           <div className={s.left}>
            <Users {...this.props} filterUsers={filterUsers} search={this.state.search} onChange={this.onChange} />
             </div>
             <div><MoreInform {...this.props.user} users={this.props.users}/></div>
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        user:getUserSelector(state),
        error:getErrorSelector(state),
        isDisabled:getDisabledSelector(state),
        isFetching: getFetchingSelector(state),
        userId: getUserIdSelector(state),
        disabledInProgress:getDisabledInProgressSelector(state),

    }
}

export default compose(connect(mapStateToProps,{ setAllUsers,  setInformUser, setInformUser, disabledProcess }),withRouter)(UsersContainer)