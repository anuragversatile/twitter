import React from "react";
import { View } from "react-native";
import styles from "../styles";
const CardSection = props => {
  return <View style={styles.cardSectionContainerStyle}>{props.children}</View>;
};

export { CardSection };
