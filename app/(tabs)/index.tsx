import Container from "@/componets/common/Container";
import React, { useEffect, useState } from "react";
import {
  H1,
  H3,
  H4,
  Image,
  ScrollView,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import { FlatList, TextInput } from "react-native";
import Tabs from "@/componets/Home/Tabs";
// import { CoffeeData } from "@/componets/Data";
// import { BeansData } from "@/componets/Data";
import Card from "@/componets/common/Card";
import Header from "@/componets/common/Header";
import axios from "axios";
const index = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<any>()

  useEffect(()=>{
    product()
  },[searchText])

  const product = async () => {
    const res = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKENDURL}/products?search=${searchText}`
    );
    setData(res.data)
  };

  return (
    <Container>
      <ScrollView my="$4">
        <Header />
        <H3 fontWeight="$6" mt="$2">
          Find the best
        </H3>
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
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </XStack>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <YStack mt="$3">
          <FlatList
            data={ data?.filter((i:any) => i.type === "coffee")}
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
          <H4 fontWeight="$6" fontSize={18} mb="$2">
            Coffee beans
          </H4>
          <FlatList
            data={data?.filter((i:any) => i.type === "beans")}
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
