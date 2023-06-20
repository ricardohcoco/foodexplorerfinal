import styled from 'styled-components';

export const ContainerHome = styled.div`
  
  .refeições,
  .sobremesas,
  .bebidas {
    display: flex;
    flex-wrap: wrap;
    gap: 27px;
    margin-left: 123px;
    margin-right: 123px;
    margin-bottom: 30px;
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