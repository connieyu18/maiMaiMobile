import React from 'react';
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import FontAwesome, {SolidIcons, BrandIcons} from 'react-native-fontawesome';

export const ProductList = ({productList}) => {
  return (
    <TouchableOpacity styles={styles.products}>
      <View style={styles.productListView}>
        {productList.length > 0 ? (
          productsList.map((item) => <Text>HI</Text>)
        ) : (
          <Text>No products</Text>
        )}
        {/* <FontAwesome icon={BrandIcons.github} /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  products: {
    padding: 15,
    backgroundColor: 'blue',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  productListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    fontSize: 18,
  },
};
