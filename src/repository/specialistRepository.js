import Repository from './repository'

export default {
    getEmptyAdrDTO(){
        return Repository.get('/util/addresses');
    },
    getEmptyAdrParentDTO(){
      return Repository.get('/util/parentAddress');
    }
}
