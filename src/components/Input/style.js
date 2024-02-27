import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 1.4rem; */

   input {
      width: 100%;
      height: 4.8rem;

      border: none;
      outline: none;
      border-radius: 0.8rem;

      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONT.ROBOTO};
      text-indent: 1rem;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  
  svg{
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-left: 1.4rem;
  }   

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      input {
        font-size: 1.2rem;
      }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      max-width: ${({ isAdmin }) => isAdmin ? "55rem" : "45rem"};
  }
`;