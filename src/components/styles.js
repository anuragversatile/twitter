import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  textColor: {
    color: "black",
    fontWeight: "400"
  },
  rowStyle: {
    flex: 1,
    flexDirection: "row",
    color: "black",
    flexWrap: "wrap"
  },
  columnStyle: {
    flex: 1,
    flexDirection: "column"
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
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1
  },

  cardSectionContainerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 12,
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: "white",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    borderRadius: 5
  },
  tweetNotFoundStyle: {
    textAlignVertical: "center",
    fontSize: 30,
    fontWeight: "400",
    color:'black'
  },

  headerViewStyle: {
    backgroundColor: "#2089dc",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",

    justifyContent: "center"
  },
  flexView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
module.exports = styles;
