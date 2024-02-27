import styled from "styled-components";
import arrowDown from "../../assets/arrowDown-select.svg";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.main`
    padding: 0 3.2rem 5.3rem;
    
    h1 {
      margin: 2.4rem 0;
      font-size: 3.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        input, 
        select,
        textarea {
          font-size: 1.4rem;
        }

        select {
          width: 100%;
          height: 4.8rem;
          
          outline: none;
          border: none;
          border-radius: 0.5rem;

          font-size: 1.6rem;
          font-family: ${({ theme }) => theme.FONT.ROBOTO};
          text-indent: 1rem;

          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          background-color: ${({ theme }) => theme.COLORS.DARK_800};

          appearance: none;
          background-image: url(${arrowDown});
          background-repeat: no-repeat;
          background-position: center right 1rem;
          padding-right: 1rem;
        }

        textarea {
          width: 100%;
          height: 17rem;

          padding: 1.4rem;
          outline: none;
          border: none;
          border-radius: 0.5rem;

          font-family: ${({ theme }) => theme.FONT.ROBOTO};
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          background-color: ${({ theme }) => theme.COLORS.DARK_900};

          &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
          }
        }

        .row-group1,
        .row-group2 {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
        }

        .labelImage {
          font-size: 1.4rem;

          svg {
              font-size: 2.5rem;
          }
        }

        .ingredient{
            display: flex;
            column-gap: 1.2rem;
            flex-wrap: wrap;
            padding: 0 0.8rem;
            border-radius: 0.5rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
        }

        .btnSaveDelete {
          display: flex;
          gap: 3.2rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      padding: 0 15rem 5.3rem;

      form {
        .btnSaveDelete {
          justify-content: space-between;
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
      padding: 0 15rem 10rem;

      > button:first-child {
        margin: 4rem 0 0 0;
      }

      form {

        .row-group1,
        .row-group2 {
          flex-direction: row;
        }

        .row-group1 {
  
          > div:first-child {
            width: 23rem;
          }
  
          > div:nth-child(2) {
            width: 46rem;
          }
  
          > div:last-child {
            width: 30rem;
          }
        }
  
        .row-group2 {
  
          > div:first-child {
            width: 80rem;
          }
  
          > div:last-child {
            width: 25rem;
          }
        }

        .btnSaveDelete {
          justify-content: flex-end;
          button {
            max-width: max-content;
          }
        }
      }

    }
`;

export const Image = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 2rem;

  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    width: 100%;
    font-size: 1.2rem;

    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }

    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
  }

   input {
    display: none;
  }

`;
