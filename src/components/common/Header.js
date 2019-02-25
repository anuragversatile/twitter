import React from "react";

import { Text, View } from "react-native";
import styles from "../styles";
//only the root component uses appregistry
const Header = props => {
  //why this

  const { headerTextStyle, headerViewStyle } = styles;
  return (
    <View style={headerViewStyle}>
      <Text style={headerTextStyle}>{props.headerText} </Text>
    </View>
  );
};

export { Header };
