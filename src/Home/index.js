import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import formatReal from "../functions/formatReal";
import { StatusBar } from "expo-status-bar";

const data = [
  {
    name: "Acura NSX",
    value: 304000,
    key: "1",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-acura-nsx-carcarcarsvehiclevehiclestransport-5615211263800zxy4.png",
  },
  {
    value: 200000,
    key: "2",
    name: "Yellow Audi",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-yellow-audi-caraudicars-961524670482wrgpg.png",
  },
  {
    value: 350000,
    key: "3",
    name: "Camaro SS Red",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-ss-red-carcarvehicletransportchevrolet-961524653757jvg0f.png",
  },
  {
    value: 500000,
    key: "4",
    name: "Acura NSX GT3",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-acura-nsx-gt3-racing-white-carcarvehicletransportacuraracing-car-961524651326alvsf.png",
  },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <FlatList
        keyExtractor={(item, i) => item.key}
        data={data}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Description", { item })}
            >
              <View style={styles.containerItem}>
                <View>
                  <SharedElement id={`item-${item.key}-name`}>
                    <Text style={styles.name}>{item.name}</Text>
                  </SharedElement>
                  <SharedElement id={`item-${item.key}-value`}>
                    <Text style={styles.value}>{formatReal(item.value)}</Text>
                  </SharedElement>
                </View>
              </View>
              <SharedElement id={`item-${item.key}-image`}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </SharedElement>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#c1cee077",
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    height: 130,
  },
  image: {
    height: 140,
    width: "100%",
    position: "absolute",
    resizeMode: "contain",
    right: "-40%",
    bottom: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    position: "absolute",
  },
  value: {
    fontSize: 13,
    opacity: 0.6,
    position: "absolute",
    top: 25,
  },
});

export default HomeScreen;
