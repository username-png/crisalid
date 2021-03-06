import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 80px;
  background: #00418C;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  `;
export const LeftHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
`;
export const TextName = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;
export const ClientName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom:2px;
`;
export const ClientPoints = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-bottom:2px;

`;
export const ClientRate = styled.Text`
  color: ${darken(0.12, "#F7E000")};

`;
export const RightHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
`;

export const DateExpenses = styled(RectButton)`
  margin: 10px auto 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 18px;
`;

export const Expense = styled.View`
  border: 1px solid #00418C;
  border-radius: 4px;
  width: 95%;
  margin: 0 auto;
  background: #00418C;
  padding: 5px;
  margin-bottom: 15px;
`;

export const TopInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 8px;
`;

export const BottomInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 8px;

`

export const InfoText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: "serif";
`;