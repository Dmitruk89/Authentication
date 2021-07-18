import {ProfilePage} from './ProfilePage/ProfilePageContainer';
import {LoginPage} from './LoginPage/LoginPageContainer';
import {Switch, Route, Redirect} from 'react-router-dom';
import {PrivateRoute} from '../components/PrivateRoute';

const Page = () => {

    return (
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/login" />
                    </Route>
                    {/* <Route path="/profile" >
                        <ProfilePage />
                    </Route> */}
                    <Route path="/login" >
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/profile">
                        <ProfilePage />
                    </PrivateRoute>
                </Switch>
            </div>
    )
}

export default Page;