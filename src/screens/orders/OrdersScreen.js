import React, {useState, useEffect} from 'react';
// var Parse = require('parse/react-native');

import {
  View,
  Button,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {Card} from '../../components/card/card';
export const OrdersScreen = ({navigation, route}) => {
  // const productName[Symbol.iterator]() = route.params;
  // const [
  //   id,
  //   productName,
  //   productPrice,
  //   totalOrders,
  //   leftInStock,
  // ] = route.params;
  // const item = {id, productName, productPrice, totalOrders, leftInStock};
  // localStorage.setItem('orders', {...item, ...ordersList});
  // const { item } = route.params;
  // console.log(routes.param);
  // let orders = localStorage.getItem('orders');
  const [ordersList, setOrders] = useState([
    {
      id: 5,
      productName: 'lettuce',
      productPrice: '10.00',
      qty: 2,
      leftInStock: 2,
      productImage: 'lettuce.jpeg',
    },
  ]);

  // useEffect(() => {
  //   setOrders(orders);
  // }, []);

  return (
    <View style={{backgroundColor: '#ffcccc', flex: 1}}>
      {/* <Text>{productName}</Text> */}
      <FlatList
        data={ordersList}
        renderItem={({item}) => (
          <View>
            <Card
              id={item.id}
              productName={item.productName}
              productPrice={item.productPrice}
              totalOrders={item.qty}
              leftInStock={item.leftInStock}
              productImage={item.productImage}
              navigation={navigation}
              // title={item.title}
              // selected={!!selected.get(item.id)}
              // onSelect={onSelect}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  OrdersPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8c291',
  },
  container: {
    flex: 1,
  },
  card: {},
});
