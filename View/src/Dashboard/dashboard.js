import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import { alteraCadastro, atualizaCadastro, deletaCadastro } from '../actions/Cadastro';
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

class Dashboard extends React.Component {

    componentDidMount() {
        const { nome, email, dataNascimento, telefone } = this.props;
        if (this.props.nome != undefined) {
            this.props.initialize({
                nome: nome,
                email: email,
                dataNascimento: dataNascimento,
                telefone: telefone,
            });
        }
    }

    handleSubmit(values) {
        this.props.alteraCadastro(values.nome, values.email, values.senha, values.dataNascimento, values.telefone)
            .then(data => (data.json()))
            .then((data) => {
                if (data.code === 200) {
                    this.props.atualizaCadastro(values);
                    //eslint-disable-next-line
                    toastr.success('Cadastro alterado com sucesso', 'Dashboard', toastrDefaultOptions)
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

    handleDeletaCadastro(e) {
        e.preventDefault();
        this.props.deletaCadastro(this.props.email)
            .then(data => (data.json()))
            .then((data) => {
                if (data.code == '200') {
                    //eslint-disable-next-line
                    toastr.success('Cadastro excluido com sucesso', 'Dashboard', toastrDefaultOptions)
                    this.props.history.push('/');
                }
                else {  
                    //eslint-disable-next-line
                    toastr.error('Erro ao excluir cadastro', 'Dashboard', toastrDefaultOptions)
                }
            })
            .catch(() => {
                //eslint-disable-next-line
                toastr.error('Erro ao excluir cadastro', 'Dashboard', toastrDefaultOptions)
            });
    }
 
    render() {
        const { handleSubmit } = this.props;
        return(
            <Card style={{ width:'400px', height:'200x', margin:'auto', marginTop:'100px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Alterar dados cadastrais
                    </Typography>
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
                                <CardActions style={{ width:'80%', marginTop:'10px' }}>
                                    <Button type='button' onClick={(e) => this.handleDeletaCadastro(e)} style={{ margin:'auto' }} size="medium" color="primary" variant="contained">Deletar cadastro</Button>
                                    <Button style={{ margin:'auto' }} size="medium" color="primary" variant="contained" type="submit"> Alterar </Button>
                                </CardActions>
                            </Form>
                        </div>
                    </div>
                </CardContent>
            </Card>               
        );
    }
}

Dashboard.propTypes = {
    atualizaCadastro: PropTypes.func.isRequired,
    deletaCadastro: PropTypes.func.isRequired,
    nome: PropTypes.string,
    email: PropTypes.string,
    dataNascimento: PropTypes.string,
    telefone: PropTypes.string,
    initialize: PropTypes.func,
    alteraCadastro: PropTypes.func,
    handleSubmit: PropTypes.func,
    history: PropTypes.object.isRequired,
};

//eslint-disable-next-line
const mapStateToProps = state => ({
    nome: state.perfil.cadastro.nome,
    email: state.perfil.cadastro.email,
    dataNascimento: state.perfil.cadastro.dataNascimento,
    telefone: state.perfil.cadastro.telefone
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
    alteraCadastro: (nome, email, senha, dataNascimento, telefone) => dispatch(alteraCadastro(nome, email, senha, dataNascimento, telefone)),
    deletaCadastro: (email) => dispatch(deletaCadastro(email)),
    atualizaCadastro: (values) => dispatch(atualizaCadastro(values)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'dashboard',
})(Dashboard)));



