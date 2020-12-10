import styled from 'styled-components/native'

export const ViewButton = styled.View`
  width: 100%;
  height: 95%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
`;

export const ViewButtonContainer = styled.View`
  width: ${props => props.width};
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const ViewVoteCounting = styled.View`
  width: 100%;
  margin-left: 5px
  padding: 10px;
`;

export const ViewVoteContainer = styled.View` 
  width: ${props => props.width};
  margin-left: 20px;
  background-color: #E8E8E8;
`;

export const VoteText = styled.Text`
  color: #000;
  font-size: 18px;
  margin-top: 5px;
`;

export const HeaderVote = styled.Text`
  width: ${props => props.width};
  margin-top: 20px;
  margin-left: 20px
  background-color: 'rgb(145,195,229)'
  padding: 10px;
  font-size: 18px;
  color: #fff;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
`;