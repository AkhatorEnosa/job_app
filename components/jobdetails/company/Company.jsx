<<<<<<< HEAD
import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";
=======
import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils'
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
<<<<<<< HEAD
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
=======
        <Image 
          source={{
            uri: checkImageURL(companyLogo) 
            ? companyLogo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
<<<<<<< HEAD
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
=======
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image 
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
<<<<<<< HEAD
          <Text style={styles.locationName}>{location}</Text>
        </View>
=======
        </View>
        <Text style={styles.locationName}>{location}</Text>
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
      </View>
    </View>
  );
};

export default Company;
