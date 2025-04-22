import { View, Text } from "react-native";
import React from "react";
import { H3, H4, Image, XStack } from "tamagui";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "tamagui/linear-gradient";

const Header = ({title=''}) => {
  return (
    <XStack jc="space-between" ai='center' mb="$3">
      <LinearGradient
        colors={["#21262E", "#21262E00"]}
        start={[0, 0]}
        end={[1, 1]}
        width={50}
        height={50}
        borderRadius={25}
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        bc='#21262E'
      >
        <Entypo name="menu" size={24} color="#FFFFFF2E" />
      </LinearGradient>

      <H3 fontWeight="$6">{title}</H3>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
        }}
        w="$3"
        h="$3"
        br="$10"
        objectFit="cover"
      />
    </XStack>
  );
};

export default Header;
