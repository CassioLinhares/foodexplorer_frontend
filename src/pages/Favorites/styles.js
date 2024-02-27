import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        padding: 2.4rem 3.2rem;
        overflow-y: auto;

        > button:first-child {
            margin-bottom: 2rem;
        }

        h2 {
            text-align: center;
            font-size: 2.2rem;
        }

        span {
            text-align: center;
        }

        section {
            margin-bottom: 16.7rem;
        }

        .cardFavorite {
            text-decoration: none;
        }

    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        > main{
            
            > button:first-child {
                margin-bottom: 4rem;
                margin-left: 11.5rem;
                font-size: 2.2rem;
            }

            h2 {
                margin-bottom: 2rem;
            }
        }
    }
`;