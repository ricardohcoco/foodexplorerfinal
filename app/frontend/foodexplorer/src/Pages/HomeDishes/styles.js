import styled from 'styled-components';

export const ContainerHomePage = styled.div`
   .container-home {
    display: flex;
    flex-direction: column;
    margin: 123px;
    margin-bottom: 0;
  }

  & .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    margin-bottom: 62px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    height: 260px; 
    width: 100%;
    border-radius: 5px;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 500;
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }

  .header h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 40px;
  }

  .header p {
    font-family: 'Roboto';
    font-size: 16px;

  }

  .imghome {  
    width: 50%;
    height: 540px;
    margin-right: 100px;
  }

  .texthome {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    .container-home {
      display: none;
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
