import Repository from './repositoryBaseFIAS'

const resourceFill = '/fillAddressAlt';

export default {
    fill(aolevel){
        return Repository.post(`${resourceFill}`, aolevel);
    }
}