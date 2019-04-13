import * as type from '../constants/Cadastro';

const initialState = {
    cadastro: {
       
    },
};

const Cadastro = (state = initialState, action) => {
    switch (action.type) {
        case type.ACTION_ATUALIZA_CADASTRO:
            return Object.assign({}, state, {
                cadastro: {
                    ...state.cadastro,
                    ...action.data,
                }
            });
        case 'ACTION_LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default Cadastro;