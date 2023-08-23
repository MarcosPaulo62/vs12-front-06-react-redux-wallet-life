import { styled } from "styled-components"

export const ContainerContatoLp = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${({theme})=>theme.color.jet};
width: 74rem;
max-width: 90%;
border-radius: 32px;
margin: auto;
padding: 45px 85px;
box-sizing: border-box;
height: 655px;

.styled-title{ 
    width: 35%;
    color: ${({theme})=>theme.color.white};
}

.styled-title-fale-conosco{
    font-weight: bold;
    font-size: 44px;
}
`

export const FormContatoLP = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 55%;
height: 100%;
background-color: ${({theme})=>theme.color.white};
padding-block: 40px;
border-radius: 32px;
margin-right: -30px;
gap: 20px;

.divForm{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input{
    width: 80%;
    padding: 15px;
    height: 60px;
    border-radius: 12px;
    border: none;
    background-color: ${({theme})=>theme.color.alabaster};
}

.textarea{
    width: 80%;
    padding: 15px;
    height: 120px;
    border-radius: 12px;
    border: none;
    background-color: ${({theme})=>theme.color.alabaster};
}
`
