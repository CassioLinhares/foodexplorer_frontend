import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.button`
    font-size: ${( {small} ) => small ? "1.6rem" : "2.4rem" };
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    display: flex;
    align-items: center;
    gap: .8rem;

    margin: 3.6rem 0 0 5.6rem;
    margin: ${({ small }) => small ? "1rem 0 0 0" : "3.6rem 0 0 5.6rem" };;

    svg {
        font-size:  ${( {small} ) => small ? "1.6rem" : "2.4rem" };;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        font-size: 2rem;
        gap: 0;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin: 2.4rem 0 0 15rem;
    }
`;