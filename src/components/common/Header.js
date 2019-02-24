import React from'react';

import {Text,View} from'react-native';
import styles from'../styles';
//only the root component uses appregistry
const Header=(props)=>
{
  //why this

  const {headerTextStyle,headerViewStyle}=styles;
  return (
<View style={headerViewStyle}>
   <Text style={headerTextStyle} > 

   {props.headerText} </Text>
  </View>
  )
}

// const styles={
//   headerViewStyle:{
//     backgroundColor:
//     '#2089dc',
   
//     justifyContent:'center',
//     alignItems:'center',
//     height:80,
//     paddingTop:40,
//     shadowColor:'#000',
//     shadowOffset:{  width:0, height : 2},
//     shadowOpacity:0.2,
//     elevation:2,
//     position:'relative'
//   },
//   headerTextStyle: {
//    fontSize:20,
//    fontWeight:'600'
//  }

// }
export { Header};



