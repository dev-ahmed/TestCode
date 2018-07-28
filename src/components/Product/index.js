'use strict';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { CardItem, Card } from 'native-base';
import propTypes from 'prop-types';
import styles from './style';

class Product extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired,
  };

  render() {
    const {
      item: { name, price },
      item,
    } = this.props;

    const img = item.custom_attributes.filter(attr => attr.attribute_code === 'image');

    const imageUrl = `http://www.teeela.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9${img[0].value}`;

    return (
      <Card style={styles.mainContainer}>
        <CardItem>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.productDesc}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default Product;
