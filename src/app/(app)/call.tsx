import { StatusBar } from 'expo-status-bar';
import {  Platform, StyleSheet, Text } from 'react-native';
import { View } from '../../components/Themed';
import {
  RingingCallContent,
  StreamCall,
  useStreamVideoClient,
  useCalls,
  CallTopView,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

const callId = 'default_72b0a2c7-32af-4af3-b1d1-1eff8abec69a';

export default function CallScreen() {
  const [loaded, setLoaded] = useState(false);

  const client = useStreamVideoClient();

  const calls = useCalls();
  const call = calls[0];

  useEffect(() => {
    if (!call && loaded) {
      return router.back();
    }
    if (call && !loaded) {
      setLoaded(true);
    }
  }, [call]);

  // const [call] = useState(() => client?.call('default', callId));

  // useEffect(() => {
  //   call?.join({ create: true });
  // }, [call]);

  if (!call) {
    return <Text>Call not found!</Text>;
  }

  return (
    <View style={styles.container}>
      <StreamCall call={call}>
        <RingingCallContent
          CallTopView={() => <CallTopView title={`ID: ${call.id}`} />}
          // onHangupCallHandler={() => router.back()}
        />
      </StreamCall>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});