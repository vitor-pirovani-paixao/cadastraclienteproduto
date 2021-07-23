import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function FinalCadastro(){
    const historico=useHistory();
    const homeReturn = ()=>{historico.push('/')};
    return(
        <S.FinalContainer>
            <S.Container>
                <h1>Cadastro efetuado com sucesso!</h1>
                <S.Button onClick={homeReturn}>Início</S.Button>
            </S.Container>
        </S.FinalContainer>
    )
}