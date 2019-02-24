import React,{Component} from 'react';
import {Provider} from  'react-redux';
import {View,Platform} from 'react-native';
import ReduxThunk from'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';

import reducers from './src/reducers'
import Tweet from './src/components/Tweet'
import {Header} from './src/components/common'
import SplashScreen from 'react-native-splash-screen';

const store=createStore(reducers,applyMiddleware(ReduxThunk))
class App extends Component{
  componentDidMount() {
    if(Platform.OS==='android')
    SplashScreen.hide()
  }
  render(){

  
    return (
      <Provider store={store}>
      <View style={{flex:1,backgroundColor:'#e1e8ee'}}>
      <Header headerText='Tweet It Sweet'/>
     <Tweet/>

      </View>
</Provider>
    )
  }
}
export default App