import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export const Card = ({
  id,
  productName,
  productPrice,
  totalOrders,
  leftInStock,
  productImage,
  navigation,
}) => {
  var path = '../../../assets/images/';
  const item = {
    id,
    productName,
    productPrice,
    totalOrders,
    leftInStock,
    productImage,
    navigation,
  };
  return (
    <TouchableOpacity
      style={[
        styles.item,
        // {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
      ]}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/salmon.jpeg')}
        />
      </View>
      <View style={styles.middleContainer}>
        {/* <Text>#{id}</Text> */}
        <Text style={styles.title}>
          #{id}{' '}
          {productName.substring(0, 1).toUpperCase() +
            productName.substring(1).toLowerCase()}
        </Text>
        <Text style={styles.priceText}>${productPrice}</Text>
        <Text>Orders:{totalOrders}</Text>
        <Text>Left In Stock:{leftInStock}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.ButtonWrapper}>
          <Button
            color="white"
            title="Add to Order"
            onPress={() => navigation.navigate('OrdersScreen')}
          />
        </View>
        <Button
          styles={styles.button}
          title="See Details"
          onPress={() =>
            navigation.navigate('ProductDetails', [
              id,
              productName,
              productPrice,
              totalOrders,
              leftInStock,
            ])
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f5f6fa',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flex: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  title: {
    fontSize: 23,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 2,
  },
  leftContainer: {
    flex: 1,
    marginRight: 30,
  },
  priceText: {
    marginBottom: 15,
  },
  button2: {
    backgroundColor: 'red',
    borderRadius: 15,
  },
  ButtonWrapper: {
    width: 130,
    backgroundColor: '#82ccdd',
    borderRadius: 15,
  },
  button: {
    fontSize: 13,
    color: 'white',
  },
  buttonWrapper: {
    justifyContent: 'space-between',
  },
});
