import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import * as S from './styled';

export default function CadastroProduct(){
    const historico= useHistory();
    const [ nome, setNome ] = useState('');
    const [ id, setId ] = useState('');
    const [ marca, setMarca ] = useState('');
    const [ tamanhoA, setTamanhoA ] = useState('');
    const [ tamanhoB, setTamanhoB ] = useState('');
    const [ tamanhoC, setTamanhoC ] = useState('');
    const [ peso, setPeso ] = useState('');
    const [ modelo, setModelo ] = useState('');
    const [ descrição, descricao ] = useState('');


    function salvarDados() {
        const dadosProduto ={
            'Nome':nome,
            'id':id,
            'Marca':marca, 
            'Tamanho (LxCxA) (cm)':[tamanhoA, tamanhoB,tamanhoC],
            'Peso (kg)':peso, 
            'Modelo':modelo, 
            'Descrição':descrição, 
        };
        localStorage.setItem('ProductData',JSON.stringify(dadosProduto));
        historico.push('/cadastroefetuado');
    }

    const homeReturn = ()=>{historico.push('/')};

    return(
        <S.ProdContainer>
            <h1>Cadastro de Produto</h1>
            <S.Container>
                <form onSubmit={salvarDados}>
                    <label>Nome</label><br/>
                    <input type="text" value={nome}  onChange={(event)=>{setNome(event.target.value)}} />
                    <br/>
                    <label>ID</label><br/>
                    <input type="number" value={id} onChange={(event)=>{setId(event.target.value)}}/>
                    <br/>
                    <label>Marca</label><br/>
                    <input type="text" value={marca} onChange={(event)=>{setMarca(event.target.value)}}/>
                    <br/>
                    <label>Modelo</label><br/>
                    <input type="text" value={modelo}  onChange={(event)=>{setModelo(event.target.value)}}/>
                    <br/>
                    <label>Largura (cm)</label><br/> <input type="number" value={tamanhoA} onChange={(event)=>{setTamanhoA(event.target.value)}}/><br/>
                    <label>Comprimento (cm)</label><br/><input type="number" value={tamanhoB} onChange={(event)=>{setTamanhoB(event.target.value)}}/><br/>
                    <label>Altura (cm)</label> <br/><input type="number" value={tamanhoC} onChange={(event)=>{setTamanhoC(event.target.value)}}/>
                    <br/>
                    <label>Peso (kg)</label><br/>
                    <input type="number" value={peso}  onChange={(event)=>{setPeso(event.target.value)}}/>
                    <br/>
                    <label>Descrição</label><br/>
                    <textarea cols="50" rows="10" value={descrição} onChange={(event)=>{descricao(event.target.value)}}/>
                    <br/>
                    <input type="submit" id="botao" value="Cadastrar" ></input>
                </form>
                <br/>
                <S.Button onClick={homeReturn}>Voltar</S.Button>
            </S.Container>
        </S.ProdContainer>
    )
}