import Repository from './repository'

const resource = '/Auth/Login';
const ausObj ={password: "2", username: "79006455159"};


export default {
    aus(){
        return Repository.post(`${resource}?username=${ausObj.username}&password=${ausObj.password}`, ausObj);
    }
}