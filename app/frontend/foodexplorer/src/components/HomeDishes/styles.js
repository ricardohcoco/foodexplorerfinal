import styled from 'styled-components';

export const ContainerHome = styled.div`
   .container-home {
    display: flex;
    flex-direction: column;
    margin: 123px;
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

  .refeições,
  .sobremesas,
  .bebidas {
    display: flex;
    gap: 27px;
    margin-bottom: 71px;
  }

  .refeições img,
  .sobremesas img,
  .bebidas img {
    width: 176px;
    height: 176px;
  }

  .info {
    display: flex;
    gap: 16px;
    align-items: center;
    
  }

  button {
    padding: 2px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
  }

  .incluir {
    padding: 12px 24px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .card1,
  .card2,
  .card3,
  .card4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 15px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
  `;
