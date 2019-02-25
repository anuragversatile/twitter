import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import { SearchBar, Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
import { Card, CardSection } from "./common";
import {
  searchQuery,
  onEnterPress,
  onButtonPress,
  isInitial
} from "../actions";
import { connect } from "react-redux";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchQueryChanged = this.onSearchQueryChanged.bind(this);
    this.onEnterPressAction = this.onEnterPressAction.bind(this);
    this.onButtonPressAction = this.onButtonPressAction.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this.handleView = this.handleView.bind(this);
  }
  onSearchQueryChanged(text) {
    this.props.searchQuery(text);
  }
  onEnterPressAction(searchStr) {
    const { searchText } = this.props;
    this.props.isInitial();
    this.props.onEnterPress(searchText);
  }
  onButtonPressAction() {
    const { dataSource, buttonPressedValue, oldDataSource } = this.props;

    this.props.onButtonPress(dataSource, buttonPressedValue, oldDataSource);
  }

  _renderItem = ({ item }) => {
    const { rowStyle, columnStyle, flexView, textView } = styles;

    return (
      <View style={rowStyle}>
        <Card>
          <CardSection>
            <Avatar
              rounded
              source={{
                uri: item.user.profile_image_url
              }}
              size="large"
            />

            <View style={columnStyle}>
              <View style={rowStyle}>
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  {item.user.name}
                </Text>
                <Text style={{ color: "grey", fontSize: 12 }}>
                  {" "}
                  @{item.user.screen_name}
                </Text>
              </View>

              <Text style={textView}>{item.full_text}</Text>
              <View style={rowStyle}>
                <Text style={{ color: "black" }}>
                  <Image source={require("../resources/images/retweets.png")} />
                  {item.retweet_count}
                </Text>
                <Text style={{ color: "black" }}>
                  {" "}
                  <Image source={require("../resources/images/favs.png")} />
                  {item.favorite_count}
                </Text>
              </View>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  };
  handleView() {
    const { flexView, tweetNotFoundStyle, MainContainer } = styles;
    const { isLoading, isInitialLoad, dataSource } = this.props;

    if (isLoading && !isInitialLoad) {
      return (
        <View style={flexView}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    } else if (dataSource.length !== 0) {
      return (
        <View style={MainContainer}>
          <FlatList
            data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.props}
          />
        </View>
      );
    } else if (dataSource.length === 0 && !isInitialLoad) {
      return (
        <View style={flexView}>
          <Text style={tweetNotFoundStyle}>Tweet not Found</Text>
        </View>
      );
    }
  }
  render() {
    const { handleViewFlex, backColor, textColor, flexView } = styles;
    const { isLoading, isInitialLoad, searchText } = this.props;

    return (
      <Card>
        <SearchBar
          placeholder="Search Tweet"
          onChangeText={this.onSearchQueryChanged}
          value={searchText}
          onSubmitEditing={this.onEnterPressAction}
          lightTheme={true}
          inputContainerStyle={backColor}
          inputStyle={textColor}
          returnKeyType="search"
          autoCorrect={false}
        />

        <Button title="Sort By Popularity" onPress={this.onButtonPressAction} />

        {this.handleView()}
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchText: state.search.searchText,
    dataSource: state.search.dataSource,
    buttonPressedValue: state.search.buttonPressedValue,
    oldDataSource: state.search.oldDataSource,
    isLoading: state.search.isLoading,
    isInitialLoad: state.search.isInitialLoad
  };
};

export default connect(
  mapStateToProps,
  {
    searchQuery,
    onEnterPress,
    onButtonPress,
    isInitial
  }
)(Tweet);
