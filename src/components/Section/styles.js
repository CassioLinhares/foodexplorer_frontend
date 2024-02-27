import styled from "styled-components"; 
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 2.4rem;

    h2 {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin: 0 12.4rem 4.8rem;

        h2 {
            font-size: 2.4rem;
        }
    }
`;