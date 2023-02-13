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

export const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding-top: 50px;
  padding-bottom: 50px;
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
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  color: #a7a6a6;
`;

export const Location = styled.p`
  margin: 0;
  color: #a7a6a6;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  background-color: #ebf5f7;
  margin: 0;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 115px;

  &:not(:last-child) {
    border-right: 1px solid #c9c9c9;
  }
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

export const Label = styled.span`
  color: gray;
  margin-bottom: 10px;
`;
