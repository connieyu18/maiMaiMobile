import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, StyleSheet, ScrollView} from 'react-native';
import {products} from '../../models/productData.js';
import {ProductList} from '../../components/productList/productList';
import {Card} from '../../components/card/card';

export const ProductsScreen = ({navigation}) => {
  const [inputVal, setInputVal] = useState('');
  const [sortVal, setSortVal] = useState('');
  const [productsList, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <View>
      <FlatList
        style={{backgroundColor: '#f8c291'}}
        data={productsList}
        renderItem={({item}) => (
          <Card
            styles={styles.card}
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
        )}
      />
      {/* <ProductList productList={productsList} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  ProductPage: {
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
