import React,{Component} from 'react';
import {Provider} from  'react-redux';
import {View,Text} from 'react-native';
import ReduxThunk from'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers'
import Tweet from './src/Tweet'
import {Header} from './src/components/common'

const sagaMiddleware = createSagaMiddleware();
const store=createStore(reducers,applyMiddleware(ReduxThunk))
class App extends Component{
  render(){

  
    return (
      <Provider store={store}>
      <View style={{flex:1,backgroundColor:'white'}}>
      <Header headerText='Tweet It Sweet'/>
     <Tweet/>

      </View>
</Provider>
    )
  }
}
export default App