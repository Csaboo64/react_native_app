import React from "react";
import { Text, View } from "react-native";
import LuckyWheel from "@/app-example/components/luck wheel";

const HomeScreen = () => {
  return (
      <View style={{ flex: 1 }}>
          <LuckyWheel />
      </View>
  );
};

export default HomeScreen;
