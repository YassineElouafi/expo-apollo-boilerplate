import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  margin-top: ${Constants.statusBarHeight};
`;

export const Board = styled.View`
  padding: 14px;
  background-color: #f9f9f9;
  border-width: 1px;
  border-color: #eeeeee;
  margin-bottom: 20px;
  margin: 0px 10px;
  display:flex;
  border-radius: 10px;
  margin-bottom: 10;
`;

export const BoardText = styled.Text`
  color: #bababa;
  font-weight: 600;
`;

export const Overlay = styled.TouchableOpacity`
  background-color: #000000;
  height: ${height};
  width: ${width};
  top: 0px;
  opacity: 0.4;
`;

export const ModalContainer = styled.View`
  position: absolute;
  background-color: #ffffff;
  border-radius: 6;
  padding: 10px;
  width: ${0.9*width};
  min-height: ${0.5 *height}
  left: ${0.05*width};
  top: ${0.15*height};
`;

export const FullContainer = styled.View`
  padding: 30px 20px;
  padding-top: 60px;
  min-height:  100%;
  flex: 1;
`;

export const PackageDetailsContainer = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

export const ProfileContainer = styled.View`
  padding: 20px;
  padding-top: 50px;
  flex: 1;
  background-color: #f9f9f9;
`;

export const Bottom = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Illustration = styled.Image`
  max-width: 100%;
  height: ${props => props.height ? props.height : '240px'};
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 15px;
  color: ${props => props.theme.DARKTEXT};
`;

export const BigTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.DARKTEXT};
`;

export const SmallText = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: ${props => props.theme.GREY};
`;

export const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.WHITE};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  padding: 13px 0px;
  border-radius: 12px;	
  background-color: ${props => props.disabled ? '#cccccc' : props.backgroundColor };
  margin-top: 10px;
`;

export const SectionContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-radius: 6px;	
  background-color: ${props => props.backgroundColor};
  margin-top: 10px;
  text-align:left;
`

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.textColor};
  text-align: center;
`;

export const ClickableCard = styled.TouchableOpacity`
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow:0 1px 1px #ccc;
`;

export const Card = styled.View`
  padding: 20px;
  border-radius: 6px;
  min-height: 120px;
  background-color: #f9f9f9;
`

export const TextInput = styled.TextInput`
  width: 100%;
  min-height: 40px;
  padding: 10px 15px;
  border: 1px solid ${props => props.error ? 'red' : '#eeeeee'};
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

export const ToRight = styled.TouchableOpacity`
  margin-left: auto;
  margin-top: 15px;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const Small = styled.Text`
  font-size: 12px;
  color: #bababa;
`;

export const Scrollable = styled.ScrollView`
  background-color: #ffffff;
  padding-bottom: 40px;
  padding-top: 10px;
  margin-bottom: 58px;
  padding: 0px 10px;
`;

export const ScrollableContainer = styled.ScrollView`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: ${ Platform.OS === 'android' ? 60 : 30 };
  margin-top: ${ Platform.OS === 'android' ? Constants.statusBarHeight : 0 };
`;

export const Centered = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;
export const Comment = styled.View`
  font-size: 12px;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #f9f9f9;
  border-radius: 50px;
`;
export const BigText = styled.Text`
  font-weight: 800;
`;
export const MediumText = styled.Text`
  font-weight: 600;
  margin-bottom: 10px;
`;
export const BigCardText = styled.Text`
  font-weight: 600;
  color: #ffffff;
`;

export const CardTitle = styled.Text`
  font-size: 26px;
  font-weight: 800;
  color: #000;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  font-weight: 200;
  color: red;
`;

export const ErrorBox = styled.Text`
  color: #c93f61;
  background-color:#feeeef;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`;

export const CardSection = styled.View`
  display: flex;
  flex-wrap:wrap;
  padding: 15px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const HeaderNavigation = styled.View`
  height: 120px;
  width: 100%;
  background-color: #ffffff;
  padding: 10px;
`;

export const Status = styled.Text`
  font-size: 10px;
  alignSelf: center;
  padding: 0px 10px;
  background-color: #ffffff;
  color: ${props => props.color ? props.color : '#00deac'};
  border-radius: 50px;
  ${
    Platform.OS !== 'ios' ?
    props => props.color ? props.color : 'border: 1px solid #00deac;'
    : `border: none;`
  }
`;

export const CallBtn = styled.TouchableOpacity`
  background-color: #00DEAC;
  padding: 6px 10px;
  flex-direction: row;
  border-radius: 20px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: auto;
`;

export const BottomScrollNavigation  = styled.View`
  background-color: #ffffff;
  height: ${height};
  width: 100%;
  padding: 15px;
  border-radius: 12px;
`;

export const MiniStatusCercle = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${props => props.status ? getStatusColor(props.status) : '#bababa'};;
  border-radius: 100px;
  border-color: #eeeeee;
  margin-left: 5px;
  margin-top: 5px;
`;

export const FlexClickableCard = styled.TouchableOpacity`
  background-color: #ffffff;
  border-color: #f9f9f9;
  border-bottom-width: 1px;
  padding: 15px 0px;
  flex-direction: row;
  flex: 1;
`;

export const PackageCardContainer = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 12px;
  border-color: #dddddd;
  border-width: 1px;
  flex-direction: row;
  flex: 1;
`;

export const SimpleCard = styled.View`
  max-height: 70px;
  background-color: #ffffff;
  border-color: #f9f9f9;
  border-bottom-width: 1px;
  padding: 5px 8px;
  padding-top: 10px;
  flex-direction: row;
  flex: 1;
  border: 1px solid #eeeeee;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const FlexListItem = styled.TouchableOpacity`
  max-height: 50px;
  background-color: #ffffff;
  flex-direction: row;
  flex: 1;
`;

export const Circle = styled.View`
  margin-right: 20px;
  max-width: 50px;
  height: 50px;
  background-color: #f9f9f9;
  border-radius: 100px;
  border-width: 1px;
  border-color: #eeeeee;
  flex: 1;
`;

const getStatusColor = (status,opacity = 1) => {
  switch(status){
      case 'CONFIRMED':
          return `rgba(73,189,120,${opacity})`;
      case 'CREATED':
          return `rgba(247,170,52,${opacity})`;
      case 'RETURNED':
          return `rgba(234,67,53,${opacity})`;
      case 'DELIVERED':
          return `rgba(52,168,83,${opacity})`;
      case 'PAID':
          return `rgba(52,168,83,${opacity})`;
      case 'PICKEDUP':
          return `rgba(52,168,83,${opacity})`;
      case 'NOTPAID':
          return `rgba(234,67,53,${opacity})`;
      default:
          return `rgba(204,204,204,${opacity})`;
  }
}

export const PriceTag = styled.View`
  border-radius: 8px;
  background-color: #ffffff;
  padding: 8px;
  border: 1px solid #eee;
`;

export const StatusTag = styled.View`
  border-radius: 8px;
  background-color: ${props => getStatusColor(props.status) };
  height: 22px;
  text-align: center;
  padding: 0px 10px;
  margin-left: auto;
  justify-content: center;
  align-items: center; 
`;

export const StatusCircle = styled.View`
  border-radius: 50px;
  background-color: ${props => getStatusColor(props.status) };
  height: 10px;
  width: 10px;
  margin-left: auto;
`;

export const NavigationActionButton = styled.TouchableOpacity`
  height: ${width*0.2};
  width: ${width*0.2};
  background-color: #212261;
  position: absolute;
  left: ${width*0.4};
  top: -30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-radius: 50px;
  padding-top: 25px;
  text-align: center;
  border: 2px solid #ffffff;
`;

export const Counter = styled.View`
  height: ${height*0.08};
  width: ${height*0.1}
  background-color: #ffffff;
  padding: 10px;
  border-radius: 20px;
  align-items: center; 
`
export const CounterText = styled.Text`
  font-size: ${height*0.04};
  font-weight: bold;
  color: #00deac;
`

export const UselessButCoolItem = styled.View`
  width: 25%;
  height: 5px;
  border-radius: 4px;
  background-color: #eeeeee;
  margin: 0px auto 20px auto;
`;