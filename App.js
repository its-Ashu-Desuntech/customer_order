
import { StyleSheet, Text, View } from 'react-native';
import CustomerOrder from './customerOrder/CustomerOrder';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomerOrder />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
