<<<<<<< HEAD
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
=======
import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
  return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

<<<<<<< HEAD
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply</Text>
=======
      <TouchableOpacity style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
