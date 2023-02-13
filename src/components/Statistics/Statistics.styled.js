import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px 340px;
`;

export const Wrapper = styled.div`
  background-color: #e7ecf1;
  width: 600px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  background-color: white;

  width: 350px;
  padding: 25px 0;
  margin: 0 auto;

  color: gray;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  width: 70px;
  height: 70px;
`;

export const Label = styled.span`
  color: white;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  color: white;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;
