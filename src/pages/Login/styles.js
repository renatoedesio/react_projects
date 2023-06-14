import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  background-color: #222327;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 180px;
    width: 179px;
  }
`;

export const FormContainer = styled.div`
  width: 420px;
  height: 378px;

  margin-top: 25px;
  padding: 45px;
  border-radius: 8px;

  background: #fff;

  h1 {
    font-size: 22px;

    text-align: center;
    text-transform: uppercase;
    margin-bottom: 56px;
  }

  button {
    margin-top: 56px;
  }
`;
