import HeaderLayout from './HeaderLayout';
import {connect, ConnectedProps} from 'react-redux';
import React from 'react';
import {RootState} from '../../interface/store.interface';


const HeaderContainer: React.FunctionComponent<ContainerProps> = props => {
     
    return <HeaderLayout
        user={props.user}
       />
}

const mapStateToProps = (state: RootState) => {
    return { 
        isFetching: state.auth.isFetching,
        user: state.auth.user
    }
}

const connector = connect(mapStateToProps, {})
export type ContainerProps = ConnectedProps<typeof connector>
export const Header = connector(HeaderContainer)