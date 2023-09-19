import {View, Text, Alert} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const App = () => {
  return (
    <QRCodeScanner
      onRead={({data}) => alert(data)}
      flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      
    />
  );
};

export default App;
