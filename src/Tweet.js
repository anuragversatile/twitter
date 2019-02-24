import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
  FlatList,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { SearchBar, Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import sortDataSourceFunction from "./utils/sortDataSourceFunction";
import { Card, CardSection } from "./components/common";
import { searchQuery, onEnterPress, onButtonPress } from "./actions";
import { connect } from "react-redux";

class Tweet extends React.Component {
  onSearchQueryChanged(text) {
    this.props.searchQuery(text);
  }
  onEnterPressAction(searchStr) {
    const { searchText } = this.props;
    this.props.onEnterPress(searchText);
  }
  onButtonPressAction() {
    const { dataSource, buttonPressedValue, oldDataSource } = this.props;
    console.log(
      "insided button press",
      dataSource,
      buttonPressedValue,
      oldDataSource
    );
    this.props.onButtonPress(dataSource, buttonPressedValue, oldDataSource);
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  _renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <CardSection>
        <Avatar
          rounded
          source={{
            uri: item.user.profile_image_url
          }}
          size="large"
        />

        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}> {item.user.name}</Text>
            <Text> @{item.user.screen_name}</Text>
          </View>

          <Text style={styles.textView}>{item.full_text}</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text> count {item.retweet_count}</Text>
            <Text>
              {" "}
              favorite
              {item.favorite_count}
            </Text>
          </View>
        </View>
      </CardSection>
    </View>
  );

  render() {
    const { handleViewFlex, backColor, textColor } = styles;

    return (
      <Card>
        <SearchBar
          placeholder="Enter User Name"
          onChangeText={this.onSearchQueryChanged.bind(this)}
          value={this.props.searchText}
          onSubmitEditing={this.onEnterPressAction.bind(this)}
          lightTheme={true}
          inputContainerStyle={backColor}
          inputStyle={textColor}
        />

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          onPress={this.onButtonPressAction.bind(this)}
        />

        <View style={styles.MainContainer}>
          <FlatList
            data={this.props.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={this._renderItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.props}
          />
        </View>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchText: state.search.searchText,
    dataSource: state.search.dataSource,
    buttonPressedValue: state.search.buttonPressedValue,
    oldDataSource: state.search.oldDataSource
  };
};

const styles = StyleSheet.create({
  textColor: {
    color: "black",
    fontWeight: "400"
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
    width: "100%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  }
});

export default connect(
  mapStateToProps,
  {
    searchQuery,
    onEnterPress,
    onButtonPress
  }
)(Tweet);
