import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    margin-top: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    padding: 50px;
    gap: 15px;
    border-radius: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="file"],
  input[type="text"],
  input[type="number"],
  textarea {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  input[type="file"]:hover,
  input[type="text"]:hover,
  input[type="number"]:hover,
  textarea:hover {
    border-color: #888;
  }

  button {
    padding: 10px 20px;
    background-color: #333;
    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
`;
