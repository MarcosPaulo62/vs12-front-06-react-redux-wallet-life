import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledLoginContainer } from "./style";
import logoDark from '../../assets/logoTextDark.png';


export default function Login(){
    return(
        <StyledLoginContainer>
            <div className="header">
                <img src={logoDark} alt="Logo da Wallet Life" />
                <div>
                    <StyledTitle className="title" fontSize="lg" fontWeight={700} tag="h1">LOGIN</StyledTitle>
                </div>
            </div>

            <form>
                <input type="email" />
                <input type="password" />
                <StyledSpan fontSize="lg">
                    Ainda não possui login? <strong>Faça seu cadastro!</strong>
                </StyledSpan>
            </form>
        </StyledLoginContainer>
    )
}