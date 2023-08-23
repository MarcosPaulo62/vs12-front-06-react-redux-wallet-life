import { styled } from "styled-components";


export const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  display: flex;
  padding: 2rem;
`

export const Aside = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding-left: 2rem;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  flex-wrap: wrap;
  flex: 1;
  gap: 1rem;
  @media (max-width: 1441px){
    align-items: flex-start;
    gap: 3rem;
    padding: 0;
  }
  
`

export const AsideImg = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`

export const Caption = styled.p`
  font-size: 1.5rem;
`

export const Title = styled.h1`
  font-size: 6.5rem;

  @media (max-width: 1441px){
  font-size: 5rem;
    
  }


`

export const Topic = styled.div`
  padding: 2.5rem;
  flex: 1 1 400px;
  @media (max-width: 1441px){
    padding: 0;
    padding-left: 2.5rem;
    flex: 1 1 300px;
  }
  @media (max-width: 1025px){
    padding: 0;
    padding-left: 0;
    flex: 1 1 200px;
  }
`

export const Img = styled.img`
  width: 70%;
  @media (max-width: 1025px){
    padding-left: 0;
    flex: 1 1 200px;
  }
`