import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 20px;
      border: 1px solid #DDD;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;
      font: 14px 'Open Sans', sans-serif;

      ::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      height: 48px;
      font-size: 14px;
      background: #DF4723;
      font-weight: bold;
      font-family: 'Open Sans', sans-serif;
      color: #FFF;
      text-transform: uppercase;
      cursor: pointer;
      transition: ease-in-out .25s;

      :hover {
        background: #ad3215;
        transition: ease-in-out .25s;
      }
    }
  }

`;
