import React,{Component} from 'react';
import {Provider} from  'react-redux';
import {View,Text} from 'react-native';
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/reducers'

const sagaMiddleware = createSagaMiddleware();
const store=createStore(reducers,applyMiddleware(sagaMiddleware))
class App extends Component{
  render(){

  
    return (
      <Provider store={store}>
      <View style={{flex:1,backgroundColor:'white'}}>
      <Text> adhaskdjhakdhakj</Text>
      </View>
</Provider>
    )
  }
}
export default App