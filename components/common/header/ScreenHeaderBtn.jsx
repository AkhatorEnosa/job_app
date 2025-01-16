<<<<<<< HEAD
import { Image, TouchableOpacity } from "react-native";
=======
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095

import styles from "./screenheader.style";

<<<<<<< HEAD
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};
=======
const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  )
}
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095

export default ScreenHeaderBtn;
