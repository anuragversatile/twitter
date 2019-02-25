import React from'react';
import {View} from 'react-native'
import styles from'../styles'
 
const Card=(props)=>
{
  return(
<View style={styles.cardContainerStyle}>
{props.children}
  </View>

  );


}


export  {Card};