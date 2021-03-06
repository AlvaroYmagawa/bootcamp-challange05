import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1{
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
      margin-right: 10px;
    }
  }
`;

export const Error = styled.div`
  color: red;
  padding-top: 20px;
`;

export const Form = styled.form.attrs(props => ({
  err: props.err,
}))`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  
    input{
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
    }

    ${props => props.err && css`
    input{
      border: 1px solid red;
    }
  `};
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] { /* Css just works when disble is true */
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `};
`;

export const List = styled.ul`
list-style: none; /*Disable the litle balls */
margin-top: 30px;

li {
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & + li { /*applied stylization only to the next li of the first*/
    border-top: 1px solid #eee;
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

a{
  color: #7159c1;
  text-decoration: none;
}
`;

export const DeleteButton = styled.button`
  border: none;
  margin-left: 8px;
  background: #7159c1;
  border-radius: 4px;
  padding: 5px;
`;
