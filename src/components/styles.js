import {StyleSheet,Platform} from 'react-native'
const styles = StyleSheet.create({
  textColor: {
    color: "black",
    fontWeight: "400"
  },
  rowStyle:{
    flex: 1, flexDirection: "row" 
  },
  columnStyle:{
    flex:1,
    flexDirection:'column'
  },
  backColor: {
    backgroundColor: "white"
  },

  handleViewFlex: {
    flex: 3
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 5,
    marginTop: Platform.OS === "ios" ? 20 : 0
  },

  imageView: {
    flex: 1,
    width: "20%",
    height: "30%"
  },

  textView: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  },
  cardContainerStyle:{
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    flex:1
},

cardSectionContainerStyle:{
  flex:1,
  borderBottomWidth:1,
padding:5,
backgroundColor:'white',
justifyContent:'flex-start',
flexDirection:'row',
borderColor:'#ddd',
position:'relative'
},

headerViewStyle:{
  backgroundColor:
  '#2089dc',
 
  justifyContent:'center',
  alignItems:'center',
  height:80,
  paddingTop:40,
  shadowColor:'#000',
  shadowOffset:{  width:0, height : 2},
  shadowOpacity:0.2,
  elevation:2,
  position:'relative'
},
headerTextStyle: {
 fontSize:20,
 fontWeight:'600'
}

  
 
});
module.exports=styles