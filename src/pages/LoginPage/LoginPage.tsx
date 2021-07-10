import React from 'react';
import styles from './LoginPage.module.css';

function LoginPage(){
    return (
        <form className={styles.myForm}>
            <input id="email-field" type="email" placeholder="email"/>
            <input id="password-field" type="text" placeholder="password"/>
            <button id="submit-button">Submit</button>
        </form>
    )
}

export default LoginPage;