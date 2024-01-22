import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";
    // const axiosConfig = {
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*', // Adjust this based on your server's CORS configuration
    //     "Content-Type": "application/json",
    //   },
    // };
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log("Response:", response.data);
        const sorted = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountriesData(sorted);
        console.log(countriesData.length);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Pressable
        onPress={() => navigation.navigate("detail", { data: item })}
        style={{ flexDirection: "row", paddingLeft: 10, padding: 16 }}
      >
        <Image
          width={70}
          height={70}
          borderRadius={40}
          source={{ uri: item.flags.png }}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {item.name.common}
          </Text>
          <Text>{item.name.official}</Text>
        </View>
      </Pressable>
      <View style={{ height: 1, flex: 1, backgroundColor: "silver" }}></View>
    </View>
  );

  return (
    <View>
      <View>
        <TextInput
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "silver",
            height: 50,
            paddingLeft: 10,
            marginTop: 10,
          }}
          placeholder="Search countries ..."
        />
      </View>

      <FlatList
        data={countriesData}
        renderItem={renderItem}
        // keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Countries;

const styles = StyleSheet.create({});
