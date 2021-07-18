import ProfilePageLayout from './ProfilePageLayout';
import {connect, ConnectedProps} from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router';
import {RootState} from '../../interface/store.interface';
import {logOutHandler} from '../../redux/loginPageReducer';

const ProfilePageContainer: React.FunctionComponent<ContainerProps> = props => {
    if(!props.user){
        return <Redirect to="/login" />
    } else {
        return <ProfilePageLayout
        user={props.user}
        logOutHandler={props.logOutHandler}
       />
    }
        
}

const mapStateToProps = (state: RootState) => {
    return {
        user: state.loginPage.user
    }
}

const connector = connect(mapStateToProps, {logOutHandler})
export type ContainerProps = ConnectedProps<typeof connector>
export const ProfilePage = connector(ProfilePageContainer)