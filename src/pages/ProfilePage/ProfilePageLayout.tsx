import styles from './ProfilePage.module.css';


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
            <p id="profile-name">{props.user?.name}</p>
            <p id="profile-email">{props.user?.email}</p>
            <button id="exit-button" onClick={props.logOutHandler}>Выйти</button>
        </div>
    )
}

export default ProfilePageLayout;