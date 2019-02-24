import React from 'react';
import {View} from 'react-native';
import styles from'../styles';
const CardSection=(props)=>
{
  return(
<View style={styles.cardSectionContainerStyle}>
{props.children}

  </View>

  );
}

// const styles={

//   cardSectionContainerStyle:{
//     flex:1,
//     borderBottomWidth:1,
// padding:5,
// backgroundColor:'white',
// justifyContent:'flex-start',
// flexDirection:'row',
// borderColor:'#ddd',
// position:'relative'
//   }
// }

export {CardSection};