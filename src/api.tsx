import {userData} from './interface/auth.interface';

export const AuthenticateUser = async ({ email, password }: userData) => {
    let response = await fetch('https://tager.dev.ozitag.com/api/auth/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;',
          'Accept': 'application/json'
        },
        body: JSON.stringify({clientId: 1, email, password})
    });
      
    let result = await response.json();
    return result.data;
}

export const GetUserData = async (accessToken: string) => {
    let response = await fetch('https://tager.dev.ozitag.com/api/tager/user/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
    });

    let result = await response.json();
    return result.data;
}

