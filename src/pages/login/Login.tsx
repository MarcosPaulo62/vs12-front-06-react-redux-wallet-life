import { StyledSpan, StyledTitle } from "../../styles/typography";
import { StyledLoginContainer } from "./style";
import logoDark from "../../assets/logoTextDark.png";
import { StyledButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavLink, useLocation, BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/UserSlice";
import { AppDispatch, RootState } from "../../store/Store";

export interface IFormLogin {
  email: string;
  password: string;
}

export default function Login() {

  // states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //redux state
  //*const { loading, error } = useSelector((state: any)=>state.user);*/
  
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault();
      let userCredentials: IFormLogin = {
        email,
        password
      }
      dispatch(loginUser(userCredentials));
    }

    const loginStatus = useSelector((state: any) => state.user.status);
    useEffect(() => {
      if (loginStatus === 'fulfilled') {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    }, [loginStatus, navigate]);

    const userState = useSelector((state: RootState) => state.user);

    const { loading, error } = userState;

  

  return (
    <StyledLoginContainer>
      <div className="header">
        <NavLink to={"/"}>
          <img src={logoDark} alt="Logo da Wallet Life" />
        </NavLink>
        <div>
          <StyledTitle
            className="title"
            fontSize="lg"
            fontWeight={700}
            tag="h1"
          >
            LOGIN
          </StyledTitle>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          /*type="email"*/
          id="email"
          /*minLength={12}
          maxLength={255}*/
          placeholder="seu e-mail"
          
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

        />
        <input
          type="password"
          id="password"
          minLength={5}
          maxLength={30}
          placeholder="sua senha"

          onChange={(e)=>setPassword(e.target.value)}

        />
        <StyledSpan fontSize="lg">
          Ainda não possui login?{" "}
          <strong>
            <NavLink to={"/cadastro"}>Faça seu cadastro!</NavLink>
          </strong>
        </StyledSpan>
        <StyledButton
          type="submit"
          buttonsize="mdlc"
          buttonstyle="signinSignout"
        >
          {loading? 'logando...': 'logar'}
        </StyledButton>
      </form>
      {error&&(
        <div>{error}</div>
      )}

      <ToastContainer />
    </StyledLoginContainer>
  );
}
