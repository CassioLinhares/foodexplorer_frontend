import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    z-index: 2;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    p {
      font-weight: 400;
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.FONT.DM_SANS};
    }


    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {      
      padding: 0 14rem;
      justify-content: space-between;
      
      img {
        width: 18.6rem;
        height: 3rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MM}){
      p {
        font-size: 1rem;
      }

      img {
        width: 14rem;
        height: 1.8rem;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      p {
        font-size: .8rem;
      }
    }
`;