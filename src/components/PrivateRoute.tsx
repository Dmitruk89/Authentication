import {Route, Redirect, RouteProps} from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }