import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 140px;
  height: 230px;
  border-radius: 28px;
  margin-horizontal: 16px;
  overflow: hidden;
  margin-top: 10px;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 15px;
`;

export const Image = styled.Image`
  width: 140px;
  height: 230px;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: "Gilroy_Heavy";
  color: #ffffff;
  width: 85%;
`;

export const SmallText = styled.Text`
  font-size: 10px;
  font-family: "Gilroy_Medium";
  color: #ffffff;
`;
