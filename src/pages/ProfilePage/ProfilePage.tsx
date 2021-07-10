import React from 'react';
import styles from './ProfilePage.module.css';

function ProfilePage(){
    return (
        <div className={styles.profilePpage}>
            <p id="profile-name">User Name</p>
            <p id="profile-email">User email</p>
            <button id="exit-button">Выйти</button>
        </div>
    )
}

export default ProfilePage;