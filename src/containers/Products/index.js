'use strict';
import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, Title, Header } from 'native-base';
import styles from './style';
import Products from '../../services/products';
import CustomActivityIndicator from '../../components/ActivityIndicator';
import Product from '../../components/Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const {
      json: { items },
    } = await Products.getAllProducts();
    this.setState({ loaded: true, products: items });
  }

  renderItem = ({ item }) => <Product item={item} />;

  render() {
    const { loaded, products } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Header style={[styles.header, styles.shadow]}>
          <Title style={styles.headerText}>Menu</Title>
        </Header>
        <CustomActivityIndicator loaded={loaded} />
        <FlatList
          ListHeaderComponent={this.listHeaderComponent}
          keyExtractor={item => item.id.toString()}
          data={products}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default ProductsList;
