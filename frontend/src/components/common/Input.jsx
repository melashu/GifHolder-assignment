import styled from 'styled-components';

export const InputBase = styled.input.attrs((props) => ({ type: props.type }))`
  vertical-align: middle;
  color: inherit;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  ::-webkit-input-placeholder {
    color: #A2AEBE;
    font-weight: 500;
  }
`;

const Input = styled(InputBase)`
  padding: 12px;
  border: 2px solid #EEF2F7;
  border-radius: 8px;
  background: white;
  display: block;
  width: 100%;
`

export default Input;