import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CountryDetail = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#368BC1",
          height: 50,
          justifyContent: "space-evenly",
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="silver" />
      </Pressable>

      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, color: "#368BC1" }}>
          {data.name.common}
        </Text>
        <Image
          width={50}
          borderRadius={5}
          height={30}
          source={{ uri: data.flags.png }}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "silver" }}></View>
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23, color: "#033E3E" }}>
          {data.name.common}{" "}
          <Text style={{ fontSize: 18 }}>
            is commonly known as the country, and the{" "}
          </Text>
          {data.name.official}{" "}
          <Text style={{ fontSize: 18 }}> serves as its official name.</Text>
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 30, color: "#368BC1" }}>
          ISO country codes{" "}
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: "silver" }}></View>
      <View style={{ padding: 15 }}>
        <Text>
          CCA2 (ISO 3166-1 alpha-2):{" "}
          <Text style={{ fontWeight: "bold" }}>{data.cca2}</Text>
        </Text>
        <Text>
          CCN3 (ISO 3166-1 numeric):{" "}
          <Text style={{ fontWeight: "bold" }}>{data.ccn3}</Text>
        </Text>
        <Text>
          CCA3 (ISO 3166-1 alpha-3):{" "}
          <Text style={{ fontWeight: "bold" }}>{data.ccn3}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CountryDetail;

const styles = StyleSheet.create({});
