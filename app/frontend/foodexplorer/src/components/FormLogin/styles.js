import styled from 'styled-components';

export const ContainerLogin = styled.div`
  .logincontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 306px;
    margin-top: 140px;
  }

  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 42px;
  }

  .login {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px;
    gap: 32px;
    border-radius: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  form {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    gap: 16px
  }

  input {
    width: 348px;
    height: 48px;
    padding: 12px 14px;
    gap: 14px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${ ({ theme }) => theme.COLORS.WHITE};
  }

  .botaoentrar  {
    font-size: 16px;
    padding: 12px 32px;
    width: 348px;
    height: 48px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .botaoconta {
    font-size: 16px;
    padding: 12px 32px;
    width: 348px;
    height: 48px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media screen and (max-width: 768px) {
    .title {
      display: none;
    }
  }

  @media screen and (max-width: 425px)  {
    .login {
      padding: 30px;
      gap: 15px;
      border-radius: 5px;
      width: 400px;
      
    }
    
  }

`;
