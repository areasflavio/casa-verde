import styled, { keyframes } from 'styled-components';


const seta = keyframes`
    from {
        margin-left: 24px;
    }
    to {
        margin-left: 30px;
    }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 44px;

    span {
        font-size: 1.375rem;
        line-height: 1.227;

        color: #8f8f8f;
    }

    h2 {
        font-size: 5.125rem;
        line-height: 1.146;
        text-align: center;

        color: #202020;
    }
`;

export const OfertasGrid = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;

    li {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;

        background: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        
        img {
            width: 100%;
        }

        div {
            display: flex;
            flex-direction: column;

            padding: 27px 54px 27px 0;
        }

        h4 {
            font-size: 2rem;
            line-height: 1.156;
            color: #202020;
        }

        small, a {
            font-size: 1rem;
            line-height: 1.25;
        }

        small {
            color: #b8b8b8;
            margin-top: 8px;
        }

        a {
            color: #FFCB47;
            margin-top: 24px;
            
            &:hover::after {
                animation: ${seta} 0.5s ease-in 0s infinite alternate;
            }

            &::after {
                content: '→';
                margin-left: 24px;
            }
        }
    }
`;