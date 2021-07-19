import styles from './LoginPage.module.css';
import LoginPageLayout from './LoginPageLayout';
import {connect, ConnectedProps} from 'react-redux';
import React from 'react';
import {Redirect} from 'react-router-dom';
import {getUser} from '../../redux/loginPageReducer';
import {RootState} from '../../interface/store.interface';
import {LinearProgress, Box } from '@material-ui/core';

const LoginPageContainer: React.FunctionComponent<ContainerProps> = props => {
     if(props.user){
         return <Redirect to="/profile" />
     } else if(props.isFetching){
        return <Box className={styles.progress}>
                    <LinearProgress/>
                </Box>
     } else {
    return <LoginPageLayout
        isFetching={props.isFetching}
        getUser={props.getUser}
        user={props.user}
       />
    }
}

const mapStateToProps = (state: RootState) => {
    return { 
        isFetching: state.loginPage.isFetching,
        user: state.loginPage.user
    }
}

const connector = connect(mapStateToProps, {getUser})
export type ContainerProps = ConnectedProps<typeof connector>
export const LoginPage = connector(LoginPageContainer)