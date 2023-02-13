import styled from 'styled-components';

export const TrBody = styled.tr`
  &:nth-child(even) {
    background-color: #8080801a;
  }
`;

export const TdBody = styled.td`
  padding: 15px 0;
  font-size: 18px;
  text-align: center;
  color: gray;
  text-transform: capitalize;
  width: 80px;

  &:nth-child(1) {
    padding-left: 125px;
    text-align: start;
  }
`;
