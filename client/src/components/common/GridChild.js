import styled from 'styled-components';

export default styled.div`
  ${props => (props.relative ? 'position: relative;' : '')}
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
  background-color: #fcfcfc;
  box-shadow: ${props =>
    props.shadow ? '0px 1px 2px 2px rgba(0, 0, 0, 0.25)' : 'none'};
`;
