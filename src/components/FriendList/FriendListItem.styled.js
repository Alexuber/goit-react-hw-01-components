import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  padding-left: 10px;
  margin-bottom: 15px;
  height: 65px;

  border: 1px solid transparent;
  border-radius: 4px;
  width: 250px;
  -webkit-box-shadow: 9px 8px 18px 2px rgba(34, 60, 80, 0.27);
  -moz-box-shadow: 9px 8px 18px 2px rgba(34, 60, 80, 0.27);
  box-shadow: 9px 8px 18px 2px rgba(34, 60, 80, 0.27);
`;

export const Chip = styled.span`
  display: block;
  border-radius: 50%;
  border: 1px solid black;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;

export const UserImg = styled.img`
  width: 48px;
`;

export const UserName = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
