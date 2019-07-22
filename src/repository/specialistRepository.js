import Repository from './repository'

// // http://10.71.0.115/operator_api/profile/personByPersonInfo/670
// // 10.71.0.111/profile/personByPersonInfo/{id}   ?currentSchema=adm
const resource = '/profile';

export default {
    getById(id){
        return Repository.get(`${resource}/personByPersonInfo/${id}`);
    },
    save(obj){
        return Repository.post(`${resource}/`, obj);
    },
    getEmptyAdrDTO(){
        return Repository.get('/util/addresses');
    }
}