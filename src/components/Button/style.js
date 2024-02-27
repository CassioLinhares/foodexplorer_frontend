import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem;

    font-size: 2rem;
    font-family: ${ ({theme}) => theme.FONT.POPPINS };
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;
    outline: none;
    border-radius: 1rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: 
        ${ ({ theme, isDelete, isSave }) => 
            isDelete ? theme.COLORS.DARK_900 : 
            isSave ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100
        };

   small {
    margin-left: .5rem;
   }

    > svg{
        margin-right: .8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.25rem;
      /* max-width: 20rem; */
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
       font-size: .95rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        /* max-width: 19rem; */
        border-radius: .5rem;

        svg {
            font-size: 5rem;
        }
    }

    /* @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        max-width: 20rem;
    } */
`;