import styled from 'styled-components'

export const ContainerFooter  = styled.footer`
  .container-footer {
    font-family: 'Roboto', sans-serif;
    height: 70px;
    width: 100%;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;