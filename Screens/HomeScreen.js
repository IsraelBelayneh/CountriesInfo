import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import axios from "axios";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Countries from "./Countries";

const SecondRoute = () => (
  <View style={[styles.scene, {}]}>
    <Text>Second Tab</Text>
  </View>
);

const HomeScreen = () => {
  const initialLayout = { width: 1000 };

  const renderScene = SceneMap({
    first: Countries,
    second: SecondRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Countries" },
    { key: "second", title: "Continents" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "#368BC1" }}
    />
  );

  return (
    <>
      <View>
        <View
          style={{
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#368BC1",
            height: 50,
          }}
        >
          <Pressable>
            <Feather name="menu" size={24} color="silver" />
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="silver" />
          </Pressable>
          {/* <Text>HomeScreen</Text> */}
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default HomeScreen;

// const styles = StyleSheet.create({});
