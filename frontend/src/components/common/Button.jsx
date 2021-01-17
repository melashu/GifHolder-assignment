import styled, { css } from 'styled-components';

const ButtonBase = styled.button`
  color: inherit;
  font: inherit;
  border: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  background: transparent;
  vertical-align: middle;
  text-decoration: none;
  -moz-appearance: 'none';
  -webkit-appearance: 'none';
  cursor: pointer;

  &::-moz-focus-inner{
    border-style: none;
  }

  ${props => props.disabled && css`
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  `}
`;

const Button = styled(ButtonBase)`
  padding: 8px 16px;
  background: #5c6ac4;
  border-radius: 4px;
  color: white;

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}
`

export default Button;