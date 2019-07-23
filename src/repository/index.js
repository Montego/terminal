import SpecialistRepository from './specialistRepository'
import AuthRepository from './authRepository'
import FIASRepository from './FIASRepository'

const repositories = {
    specialist: SpecialistRepository,
    aus : AuthRepository,
    fias : FIASRepository
};

export default {
    getRepository : name => {
        return repositories[name];
    }
}