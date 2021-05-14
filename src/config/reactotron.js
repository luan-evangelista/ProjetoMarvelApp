import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
import url from 'url';

//const host = new URL('http://192.168.100.5:19000')

if ( __DEV__ ) {
  const tron = Reactotron.configure({host:'192.168.100.5'})
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative({networking:{ignoreUrls:/symbolicate|192.168.100.5/}})
    .connect()

  tron.clear();

  console.tron = tron;
}