import styles from './ProfilePage.module.css';
import { Button } from '@material-ui/core';


interface IProps {
    user: {
      name: string,
      email: string,
      id: number
    } | null,
    logOutHandler: () => void,
}

const ProfilePageLayout: React.FunctionComponent <IProps> = props => {
    return (
        <div className={styles.profilePage}>
            <p id="profile-name">Name: {props.user?.name}</p>
            <p id="profile-email">e-mail: {props.user?.email}</p>
            <Button 
            onClick={props.logOutHandler}
            color="primary" 
            variant="outlined"
            >
              LOG OUT
            </Button>
        </div>
    )
}

export default ProfilePageLayout;