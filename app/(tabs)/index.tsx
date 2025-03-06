import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://hallo4.odoo.com/odoo' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
  },
});
