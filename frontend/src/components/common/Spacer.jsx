import styled, { css } from 'styled-components';

const Spacer = styled.div`
  ${({ mt }) => mt && css`
    margin-top: ${mt}px;
  `}
  ${({ mb }) => mb && css`
    margin-bottom: ${mb}px;
  `}
  ${({ ml }) => ml && css`
    margin-left: ${ml}px;
  `}
  ${({ mr }) => mr && css`
    margin-right: ${mr}px;
  `}
`

export default Spacer;