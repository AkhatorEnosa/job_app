<<<<<<< HEAD
import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
=======
import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({ name, activeTab, onHandleSearchType}) => {
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
}

const Tabs = ({ tabs, activeTab, setactiveTab }) => {
  return (
    <View>
      <FlatList 
        data={tabs}
        renderItem={({ item }) => {
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setactiveTab(item)}
          />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
>>>>>>> bb8ef6de62d89793b0db62d67ae286246bc62095
}

const Tabs = ({ tabs, activeTab, setactiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setactiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
