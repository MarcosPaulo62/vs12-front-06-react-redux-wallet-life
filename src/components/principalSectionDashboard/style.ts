import styled from 'styled-components';


export const StyledSectionDashboard = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 8.8rem;
    align-self: center;
    width: 70%;

    .title{
        margin-top: 1rem;
        margin-left: 5.3rem;
        margin-bottom: 1.5rem;
    }

    .saldo-total {
        display: flex;
        flex-direction: column;
        margin-left: 5.3rem;
        width:80%;
        height: 12.06rem;
        background-color: ${({theme}) => theme.color.jet};
        border-radius: 2rem;

        .title-card-saldo {
            font-size: 2rem;
            font-weight: 700;
            line-height: 2.5rem;
            color: ${({theme}) => theme.color.white};
            margin-left: 2.06rem;
            margin-top: 1.5rem;
            
        }

        .saldo-card {
            display: flex;
            justify-content: space-between;  
            margin-top: 2.2rem;   
            
            .simbolo-moeda {
                font-size: 2.375rem;
                font-weight: 700;
                color: ${({theme}) => theme.color.white};
                margin-left: 2rem;
            }

            .valor {
                font-size: 2.375rem;
                font-weight: 700;
                color: ${({theme}) => theme.color.white};
                margin-right: 4rem;
            }
        }

        

        
    }

    .section-dois {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            align-items: center;
            margin-left: 5rem;
            margin-top: 2.2rem;
            width:80%;
            gap: 1.88rem;

            .card-option{
                display: flex;
                flex-direction: column;                
                border-radius: 2rem;
                width:100%;
                height: 11.4rem;                
                cursor: pointer;

                .value-text {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }

                img{
                    width: 2rem;
                    height: 2rem;
                    margin-right: 1.5rem;
                }

                .title-card-grid {
                    font-size: 1.5rem;
                    font-weight: 700;
                    line-height: 2.5rem;
                    margin-left: 2.06rem;
                    margin-top: 2.44rem;
                    margin-bottom: 2.06rem;
                }

                .value-card-grid {
                    font-size: 2rem;                    
                    font-weight: 700;
                    line-height: 2.5rem;
                    margin-left: 2.06rem;
                    margin-bottom: 2rem;
                }
            }

            .card1 {
                background-color: ${({theme}) => theme.color.green};
            }

            .card2 {
                background-color: ${({theme}) => theme.color.red};
            }

            .card3 {
                background-color: ${({theme}) => theme.color.blue};
            }

            .center-option {
                justify-self: center;
                display: flex;
                width: 10.05rem;
                height: 11.9rem;
                border-radius: 2rem;
                display: none;

                button{
                    
                    justify-self: center;
                    align-self: center;
                }
            }
        }
`