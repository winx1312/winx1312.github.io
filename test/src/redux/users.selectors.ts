import { AppStateType } from "./redux-store";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}
export const getUserSelector = (state: AppStateType) => {
    return  state.usersPage.user;
}
export const getFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching;
}
export const getErrorSelector = (state: AppStateType) => {
    return state.usersPage.error;
}
export const getDisabledSelector = (state: AppStateType) => {
    return state.usersPage.isDisabled;
}
export const getUserIdSelector = (state: AppStateType) => {
    return state.usersPage.userId;
}

