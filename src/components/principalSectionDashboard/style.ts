import styled from 'styled-components';


export const StyledSectionDashboard = styled.section`
    display: flex;
    flex-direction: column;

    .title{
        margin-top: 8.8rem;
        margin-left: 5.3rem;
        margin-bottom: 3.62rem;
    }

    .saldo-total {
        display: flex;
        flex-direction: column;
        margin-left: 5.3rem;
        width:49.25rem;
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
            margin-top: 6.06rem;
            width:49.25rem;
            gap: 1.88rem;

            .card-option{
                display: flex;
                flex-direction: column;                
                border-radius: 2rem;
                width:23.68rem;
                height: 19.9rem;                
                cursor: pointer;

                img{
                    width: 2rem;
                    height: 2rem;
                    margin-left: 20rem;
                    margin-top: 2rem;
                }

                .title-card-grid {
                    font-size: 1.5rem;
                    font-weight: 700;
                    line-height: 2.5rem;
                    margin-left: 2.06rem;
                    margin-top: 3.25rem;
                    margin-bottom: 2.19rem;
                }

                .value-card-grid {
                    font-size: 2rem;                    
                    font-weight: 700;
                    line-height: 2.5rem;
                    margin-left: 5.5rem;
                    margin-bottom: 2rem;
                    margin-top: 2rem;
                }
            }

            .card1 {
                background-color: #B2C199;
            }

            .card2 {
                background-color: #C1A099;
            }

            .card3 {
                background-color: #99B5C1;
            }

            .center-option {
                justify-self: center;
                display: flex;
                width: 10.05rem;
                height: 11.9rem;
                border-radius: 2rem;

                button{
                    
                    justify-self: center;
                    align-self: center;
                }
            }
        }
`