import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Field, reduxForm, Form } from 'redux-form';
import { login, atualizaCadastro } from '../actions/Cadastro';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const toastrDefaultOptions = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': 'toast-top-right',
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
};

class Login extends React.Component {
   
    handleSubmit(values){
        if (values.email != undefined && values.senha != undefined) {
            this.props.login(values.email,  values.senha)
                .then(data => (data.json()))
                .then(data => {
                    if (data.code === 200) {
                        this.props.atualizaCadastro(data.data);
                        //eslint-disable-next-line
                        toastr.success('Login efetuado com sucesso.', 'Login', toastrDefaultOptions)
                        this.props.history.push('/dashboard');
                    }
                    else {
                        //eslint-disable-next-line
                        toastr.warning('Erro ao realizar o login', 'Email ou senha invalidos', toastrDefaultOptions)
                    }
                })
                .catch(() => {
                    //eslint-disable-next-line
                    toastr.warning('Senha ou email invalido', 'Erro ao realizar o login', toastrDefaultOptions);
                });
        }
        else {
            //eslint-disable-next-line
            toastr.warning('Você não preencheu os campos a baixo:', 'Aviso', toastrDefaultOptions);
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div style={{ width:'100%', marginTop:'100px' }}>
                <Card style={{ width:'400px', height:'200x', margin:'auto' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Login
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2"> Fazer Login </Typography>
                        <div>
                            <Form onSubmit={handleSubmit(v => this.handleSubmit(v))}>
                                <div>
                                    <Field
                                        clasName='w3-input w3-border'
                                        style={{ width:'300px'}}
                                        name='email'
                                        component='input' 
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div style={{ marginTop:'5px' }}>
                                    <Field
                                        clasName='w3-input w3-border'
                                        style={{ width:'300px' }}
                                        name='senha'
                                        component='input'
                                        type='password'
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <CardActions>
                                    <Button size="medium" color="primary" variant="contained" type="submit"> Login </Button>
                                    <Link to='/cadastro'>
                                        <Button size="medium" variant="contained" color="primary">
                                        Cadastrar
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Form>
                        </div>
                    </CardContent>
                </Card>               
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object,
    handleSubmit: PropTypes.func,
    login: PropTypes.func.isRequired,
    atualizaCadastro: PropTypes.func.isRequired
};

//eslint-disable-next-line
const mapStateToProps = state => ({});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
    login: (email, senha) => dispatch(login(email, senha)),
    atualizaCadastro: (data) => dispatch(atualizaCadastro(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
})(Login)));



