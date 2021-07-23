import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as S from './styled';

export default function CadastroUser(){
    const historico= useHistory();
    const [ nome, setNome ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ uf, setUf ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');

    function buscaEndereco(event){
        event.preventDefault();
        if(cep.length === 8){
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                const dados = response.data;
                setEndereco(dados.logradouro);
                setComplemento(dados.complemento);
                setBairro(dados.bairro);
                setCidade(dados.localidade);
                setUf(dados.uf);
            }).catch(()=>{
                setEndereco('CEP não encontrado!');
                setComplemento('CEP não encontrado!');
                setBairro('CEP não encontrado!');
                setCidade('CEP não encontrado!');
                setUf('CEP não encontrado!');}
            ); 
        }else{
            setEndereco('O valor do CEP deve conter 8 números');
            setComplemento('O valor do CEP deve conter 8 números');
            setBairro('O valor do CEP deve conter 8 números');
            setCidade('O valor do CEP deve conter 8 números');
            setUf('O valor do CEP deve conter 8 números');

        }

    }

    function salvarDados() {
        const dadosUsuario ={
            'Nome':nome,
            'CEP':cep,
            'Endereço':endereco, 
            'Número':numero, 
            'Complemento':complemento, 
            'Bairro':bairro, 
            'Cidade':cidade, 
            'UF':uf, 
            'CPF':cpf, 
            'Telefone':telefone, 
            'e-mail':email,
        };
        localStorage.setItem('UserData',JSON.stringify(dadosUsuario));
        historico.push('/cadastroefetuado');
    }

    const homeReturn = ()=>{historico.push('/')};
    
    return(
        <S.UserContainer>
            <h1>Cadastro de Cliente</h1>
            <S.Container>
                <form onSubmit={salvarDados}>
                    <label>Nome</label><br/>
                    <input type="text" value={nome} size="50" onChange={(event)=>{setNome(event.target.value)}} />
                    <br/>
                    <label>CEP</label><br/>
                    <input type="number" value={cep} size="50" onChange={(event)=>{setCep(event.target.value)}}/>
                    <button onClick={(event)=>buscaEndereco(event)}>Pesquisar</button>
                    <br/>
                    <label>Endereço</label><br/>
                    <input type="text" value={endereco} size="50" onChange={(event)=>{setEndereco(event.target.value)}}/>
                    <label>Número</label>
                    <input type="number" value={numero} size="10" onChange={(event)=>{setNumero(event.target.value)}}/>
                    <br/>
                    <label>Complemento</label><br/>
                    <input type="text" value={complemento} size="50" onChange={(event)=>{setComplemento(event.target.value)}}/>
                    <br/>
                    <label>Bairro</label><br/>
                    <input type="text" value={bairro} size="50" onChange={(event)=>{setBairro(event.target.value)}}/>
                    <br/>
                    <label>Cidade</label><br/>
                    <input type="text" value={cidade} size="50" onChange={(event)=>{setCidade(event.target.value)}}/>
                    <label>UF</label>
                    <input type="text" maxLength="2" value={uf} size="1" onChange={(event)=>{setUf(event.target.value)}}/>
                    <br/>
                    <label>CPF</label><br/>
                    <input type="number" value={cpf} size="50" onChange={(event)=>{setCpf(event.target.value)}}/>
                    <br/>
                    <label>Telefone</label><br/>
                    <input type="tel" value={telefone} size="50" onChange={(event)=>{setTelefone(event.target.value)}}/>
                    <br/>
                    <label>E-mail</label><br/>
                    <input type="email" value={email} size="50" onChange={(event)=>{setEmail(event.target.value)}}/>
                    <br/>
                    <input type="submit" id="botao" value="Cadastrar" ></input>
                </form>
                <br/>
                <S.Button onClick={homeReturn}>Voltar</S.Button>
            </S.Container>
        </S.UserContainer>
    )
}