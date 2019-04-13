import perfil from './Cadastro';
import { reducer as formReducer } from 'redux-form';

const appReducer = {
    form: formReducer,
    perfil,
};

export default appReducer;
