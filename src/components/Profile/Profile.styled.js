import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 340px;
`;

export const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const UserImg = styled.img`
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid black;
  border-radius: 50%;
`;

export const UserName = styled.p`
  display: block;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin: 0;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  background-color: #e1e1e1;
  margin: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;

  border-right: 1px solid grey;

  &:last-child: {
    border-right: none;
  }
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

export const Label = styled.span`
  color: gray;
`;
