import styled from 'styled-components';

export const Section = styled.section`
  background-color: #d3d3d3;
  padding: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;

export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: ${props => props.color};
`;
