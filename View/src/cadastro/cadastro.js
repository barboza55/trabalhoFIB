import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import { CadastroFinal } from '../actions/Cadastro';
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

class Cadastro extends React.Component {
    
    handleSubmit(values) {
        this.props.CadastroFinal(values.nome, values.email, values.senha, values.dataNascimento, values.telefone)
            .then(data => (data.json()))
            .then((data) => {
                if (data.code === 200) {
                    //eslint-disable-next-line
                   toastr.success('Cadastro efetuado com sucesso.', 'Cadastro', toastrDefaultOptions)
                    this.props.history.push('/');
                }
                else {
                    //eslint-disable-next-line
                    toastr.error('Erro ao realizar o cadastro', toastrDefaultOptions)
                }
            })
            .catch(() => {
                //eslint-disable-next-line
                toastr.error('Erro ao realizar o cadastro', toastrDefaultOptions);
            });
    }
 
    render() {
        const { handleSubmit } = this.props;
        return(
            <Card style={{ width:'400px', height:'200x', margin:'auto', marginTop:'100px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Cadastro
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2"> Faça seu cadastro </Typography>
                    <div>
                        <div>
                            <Form onSubmit={handleSubmit(v => this.handleSubmit(v))}>
                                <div>
                                    <Field
                                        className='w3-input w3-border'
                                        style={{ width:'300px'}}
                                        name='nome'
                                        component='input' placeholder="Digite seu nome"
                                    />
                                </div>
                                <div style={{ marginTop: '5px' }}>
                                    <Field
                                        className='w3-input w3-border'
                                        style={{ width:'300px'}}
                                        name='email'
                                        component='input' placeholder="Digite seu email"
                                    />
                                </div>
                                <div style={{ marginTop:'5px' }}>
                                    <Field
                                        className='w3-input w3-border'
                                        style={{ width:'300px' }}
                                        name='senha'
                                        component='input'
                                        type='password'
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <div style={{ marginTop:'5px' }}>
                                    <Field
                                        className='w3-input w3-border'
                                        style={{ width:'300px' }}
                                        name='dataNascimento'
                                        component='input'
                                        placeholder="Data de nascimento ex: 23/06/1997"
                                    />
                                </div>
                                <div style={{ marginTop:'5px' }}>
                                    <Field
                                        className='w3-input w3-border'
                                        style={{ width:'300px' }}
                                        name='telefone'
                                        component='input'
                                        placeholder="Digite seu telefone"
                                    />
                                </div>
                                <CardActions style={{ width:'100%', marginTop:'10px' }}> 
                                    <Button style={{ margin:'auto' }} size="medium" color="primary" variant="contained" type="submit"> Cadastrar </Button>
                                </CardActions>
                            </Form>
                        </div>
                    </div>
                </CardContent>
            </Card>               
        );
    }
}

Cadastro.propTypes = {
    CadastroFinal: PropTypes.func,
    handleSubmit: PropTypes.func,
    history: PropTypes.object.isRequired,
};

//eslint-disable-next-line
const mapStateToProps = state => ({});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
    CadastroFinal: (nome, email, senha, dataNascimento, telefone) => dispatch(CadastroFinal(nome, email, senha, dataNascimento, telefone))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'cadastro',
})(Cadastro)));



