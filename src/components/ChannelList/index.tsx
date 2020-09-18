import React from 'react';
import { Text } from 'react-native';

import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Avatar,
  Column,
  Username,
  Info,
  WhiteCircle,

} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>ericksvasc</Username>
          <Info>3 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
