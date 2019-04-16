import { tokenUrl, apiUrl } from '../constants/ChatKitConfig';

export const getAccessToken = async function(){
    const result = await fetch(tokenUrl, {
        method: 'POST',
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "user_id": 'gambit-admin' //super-user id for getting token. limitation of test server
        })
    });

    return await result.json();
}

export const getAvailableUsers = async function(accessObj){
    const result = await fetch(apiUrl + '/users?limit=100' , {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessObj.access_token
        }
    });
    
    return await result.json();
}

export const getUserByUserName = async function(availableUsers, userName){
    var searchedUser = availableUsers.find(el => el.id === userName);
    return searchedUser;
}

export const authorizeUser = async function(userName){
    var result = await getAccessToken()
    .then(getAvailableUsers)
    .then(users => getUserByUserName(users, userName))
    .catch(error => console.log(error));

    return result;
}