import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
export const ProductDetails = ({navigation, route}) => {
  const [
    id,
    productName,
    productPrice,
    totalOrders,
    leftInStock,
  ] = route.params;
  // const {productName} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/cookie.jpeg')}
        />
        <Text style={styles.name}>
          #{id}
          {''}{' '}
          {productName.substring(0, 1).toUpperCase() +
            productName.substring(1).toLowerCase()}
        </Text>
        <Text style={styles.details}>PRICE: ${productPrice}</Text>
        <Text style={styles.details}>TOTAL ORDERS: {totalOrders}</Text>
        <Text style={styles.details}>LEFT IN STOCK: {leftInStock}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View style={styles.ButtonWrapper}>
          <Button
            color="white"
            title="Add to Order"
            onPress={() =>
              navigation.navigate('OrdersScreen', [
                id,
                productName,
                productPrice,
                totalOrders,
                leftInStock,
              ])
            }
          />
        </View>
        <View style={styles.ButtonWrapper}>
          <Button
            color="white"
            title="Back"
            onPress={() => navigation.navigate('ProductsScreen')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 40,
  },
  box: {
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    padding: 30,
  },
  profileImage: {
    width: 270,
    height: 270,
    marginBottom: 20,
  },
  name: {
    fontSize: 23,
    marginBottom: 20,
    color: '#1E90FF',
  },
  details: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },

  ButtonWrapper: {
    width: 130,
    backgroundColor: '#82ccdd',
    borderRadius: 15,
    shadowColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    fontSize: 13,
    color: 'white',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
});
