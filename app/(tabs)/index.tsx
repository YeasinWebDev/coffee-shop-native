import Container from "@/componets/common/Container";
import React, { useState } from "react";
import { H1, H3, H4, Image, ScrollView, Text, View, XStack, YStack } from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import { FlatList, TextInput } from "react-native";
import Tabs from "@/componets/Home/Tabs";
import { CoffeeData } from "@/componets/Data";
import { BeansData } from "@/componets/Data";
import Card from "@/componets/common/Card";
const index = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <Container>
      <ScrollView>
        <XStack jc="flex-end" my="$3">
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
        <H3 fontWeight="$6">Find the best</H3>
        <H3 fontWeight="$6">Coffee for you</H3>

        <XStack
          bg="#141921"
          py="$2"
          px="$3"
          br="$5"
          ai="center"
          gap="$2"
          my="$4"
        >
          <Feather name="search" size={24} color="#52555A" />
          <TextInput
            placeholder="Find your coffee...."
            placeholderTextColor="#52555A"
            style={{ flex: 1, fontSize: 16, color: "#fff" }}
          />
        </XStack>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <YStack mt="$3">
          <FlatList
            data={CoffeeData}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
            }}
          />
        </YStack>
        <YStack mt="$5">
          <H4 fontWeight='$6' fontSize={18} mb='$2'>Coffee beans</H4>
          <FlatList
            data={BeansData}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
            }}
          />
        </YStack>
      </ScrollView>
    </Container>
  );
};

export default index;
