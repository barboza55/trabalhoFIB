import * as type from '../constants/Cadastro';
import { urlBase } from './URL';

export const atualizaCadastro = (data) => ({
    type: type.ACTION_ATUALIZA_CADASTRO,
    data,
});

export const login = (email, senha) => 
    (dispatch) => { //eslint-disable-line
        return fetch(urlBase + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha,
            })
        });
    };


export const alteraCadastro = (nome, email, senha, dataNascimento, telefone) => (
        (dispatch) => { //eslint-disable-line
        return fetch(urlBase + '/alterar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                email,
                senha,
                dataNascimento,
                telefone
            }),
        });
    }
);


export const deletaCadastro = (email) => 
(dispatch) => { //eslint-disable-line
        return fetch(urlBase + '/deleta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
            })
        });
    }; 

export const CadastroFinal = (nome, email, senha, dataNascimento, telefone) => (
    (dispatch) => { //eslint-disable-line
        return fetch(urlBase + '/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                email,
                senha,
                dataNascimento,
                telefone
            }),
        });
    }
);
