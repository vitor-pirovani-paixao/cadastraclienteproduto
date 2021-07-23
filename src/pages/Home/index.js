import React from "react";
import { useHistory } from "react-router-dom";
import * as S from './styled';

export default function Home(){
    const historico = useHistory();
    const cadastraUser = ()=>{historico.push('/cadastrarusuario')};
    const cadastraProd = ()=>{historico.push('/cadastrarproduto')};

    return(
        <S.HomeContainer>
            <h1>Bem-vindo ao sistema de cadastramento</h1>
            <S.Container>
                <h2>O que deseja fazer?</h2>
                <S.ButtonContainer>
                    <S.Button onClick={cadastraUser}>Cadastrar Cliente</S.Button>
                    <S.Button onClick={cadastraProd}>Cadastrar Produto</S.Button>
                </S.ButtonContainer>
            </S.Container>
        </S.HomeContainer>
    )
}