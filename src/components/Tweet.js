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
import { searchQuery, onEnterPress, onButtonPress } from "../actions";
import { connect } from "react-redux";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchQueryChanged = this.onSearchQueryChanged.bind(this);
    this.onEnterPressAction = this.onEnterPressAction.bind(this);
    this.onButtonPressAction = this.onButtonPressAction.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }
  onSearchQueryChanged(text) {
    this.props.searchQuery(text);
  }
  onEnterPressAction(searchStr) {
    const { searchText } = this.props;
    this.props.onEnterPress(searchText);
  }
  onButtonPressAction() {
    const { dataSource, buttonPressedValue, oldDataSource } = this.props;

    this.props.onButtonPress(dataSource, buttonPressedValue, oldDataSource);
  }

  _renderItem = ({ item }) => {
    const { rowStyle, columnStyle,flexView } = styles;

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
                <Text style={{fontWeight: "bold" ,color:'black'}}> {item.user.name}</Text>
                <Text style={{color:'grey',fontSize:12}}> @{item.user.screen_name}</Text>
              </View>

              <Text style={styles.textView}>{item.full_text}</Text>
              <View style={rowStyle}>
                <Text style={{color:'black'}}>
                  <Image source={require("../resources/images/retweets.png")} />
                  {item.retweet_count}
                </Text>
                <Text style={{color:'black'}} >
                  {" "}
                  <Image  source={require("../resources/images/favs.png")} />
                  {item.favorite_count}
                </Text>
              </View>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  };

  render() {
    const { handleViewFlex, backColor, textColor } = styles;

    return (
      <Card>
        <SearchBar
          placeholder="Search Tweet"
          onChangeText={this.onSearchQueryChanged}
          value={this.props.searchText}
          onSubmitEditing={this.onEnterPressAction}
          lightTheme={true}
          inputContainerStyle={backColor}
          inputStyle={textColor}
          returnKeyType="search"
          autoCorrect={false}
        />

        <Button title="Sort By Popularity" onPress={this.onButtonPressAction} />

        <View style={styles.MainContainer}>
          <FlatList
            data={this.props.dataSource}
            renderItem={this._renderItem}
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
    oldDataSource: state.search.oldDataSource,
    isLoading: state.search.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    searchQuery,
    onEnterPress,
    onButtonPress
  }
)(Tweet);
