import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import formatReal from "../functions/formatReal";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { colors, buttons } from "../constants";
const AnimatableScrollView = Animatable.createAnimatableComponent(ScrollView);

const IMAGE_HEIGHT = 200;
const IMAGE_TOP = 60;
const animation = {
  0: { opacity: 0, translateX: 50 },
  1: { opacity: 1, translateX: 0 },
};

function DescriptionScreen({ navigation }) {
  const item = navigation.getParam("item");
  const ios = Platform.OS === "ios";
  return (
    <SafeAreaView style={{ flex: 1, marginTop: ios ? 40 : 20 }}>
      <View style={{ height: 330 }}>
        <SharedElement id={`item-${item.key}-image`}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </SharedElement>
        <SharedElement id={`item-${item.key}-name`}>
          <Text style={styles.name}>{item.name}</Text>
        </SharedElement>
        <SharedElement id={`item-${item.key}-value`}>
          <Text style={styles.value}>{formatReal(item.value)}</Text>
        </SharedElement>
      </View>
      <AnimatableScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        useNativeDriver
        delay={300}
        animation={animation}
        style={{
          flexGrow: 0,
        }}
      >
        {colors.map((color, i) => {
          return (
            <View key={i} style={[styles.color, { backgroundColor: color }]} />
          );
        })}
      </AnimatableScrollView>
      {buttons.map((button, i) => {
        return (
          <Animatable.View
            useNativeDriver
            animation={animation}
            delay={300 + (i + 1) * 100}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>{button.title}</Text>
            <AntDesign name="arrowright" />
          </Animatable.View>
        );
      })}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.close}
      >
        <AntDesign name="close" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: { padding: 10 },
  name: {
    fontSize: 18,
    fontWeight: "700",
    position: "absolute",
    top: IMAGE_HEIGHT + IMAGE_TOP + 10,
    left: 10,
  },
  value: {
    fontSize: 13,
    opacity: 0.6,
    position: "absolute",
    top: IMAGE_HEIGHT + IMAGE_TOP + 35,
    left: 10,
  },
  image: {
    height: IMAGE_HEIGHT,
    width: "100%",
    position: "absolute",
    resizeMode: "contain",
    top: IMAGE_TOP,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    padding: 20,
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: "#ccc8c8",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

DescriptionScreen.sharedElements = (navigation) => {
  const item = navigation.getParam("item");
  return [
    { id: `item-${item.key}-name` },
    { id: `item-${item.key}-image` },
    { id: `item-${item.key}-value` },
  ];
};

export default DescriptionScreen;
