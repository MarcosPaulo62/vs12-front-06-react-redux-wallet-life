import { StyledFooterContainer } from "./style";
import logo from "../../assets/logo-WALLETLIFE.png";
import { StyledTag } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  email: string;
};



export default function Footer() {
  const { register, handleSubmit, reset, formState } = useForm<FormData>();
  const { isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Email cadastrado com sucesso:', data.email);
    reset()
  };

  return (
    <StyledFooterContainer>
      
      <div className="left-section">
        <img src={logo} alt="" />
        <a className="login" href="">
          Login
        </a>
        <a className="cadastro" href="">
          Cadastro
        </a>
      </div>
      <div className="right-section">
      {isSubmitSuccessful && (
        <p style={{ color: 'green' }}>Email cadastrado com sucesso!</p>
      )}
        <StyledTag className="paragraphy">
          Assine gratuitamente nossa newsletter e fique por dentro das nossas
          dicas sobre finanças!
        </StyledTag>
        <div >
        <form className="styled-input" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register('email', { required: true })}
              disabled={isSubmitting}
              placeholder="Seu email"
            />
            
            <StyledButton disabled={isSubmitting} buttonsize="sm" buttonstyle="landingPage">
            {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </StyledButton>
            </form>
        </div>
      </div>
    </StyledFooterContainer>
  );
}
