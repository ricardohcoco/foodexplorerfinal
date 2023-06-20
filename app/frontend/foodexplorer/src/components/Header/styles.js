import styled from 'styled-components'

export const ContainerHeader = styled.header`
  .header-container {
    height: 70px;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    color: white;
    font-size: 24px;
    align-items: center;
    font-family: 'roboto', sans-serif;
  }

  input {
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 581px;
    height: 48px;
    border-radius: 5px;
  }

  .newdishe {
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px; 
    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .botaodesair {
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px; 
    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }
  
  @media screen and (max-width: 768px) {
    .header-container {
      flex-direction: column;
      height: 100px; 
      margin: auto;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    h2 {
      display: none;
    }
  }

  @media screen and (max-width: 425px)  {
    .create {
      margin: 0;
      width: 350px;
      margin-right: 30px;
      font-size: 12px;
    }

    input {
      width: 250px;
    }

    .botaoentrar {
      width: 250px;
    }

    .botaoback {
      width: 250px;
    }
    
  }



`;
  
