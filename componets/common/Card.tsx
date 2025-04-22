import React from "react";
import {
  H3,
  H4,
  H5,
  H6,
  Image,
  Paragraph,
  SizableText,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "tamagui/linear-gradient";
import { router } from "expo-router";
const Card = ({ data }: any) => {
  return (
    <LinearGradient
      colors={["#252A32", "#262B3300"]}
      start={[0, 0]}
      end={[1, 1]}
      br="$4"
    >
      <YStack p="$4" br="$4" onPress={() => router.push(`/details/${data.id}`)}>
        <View pos="relative">
          <Image source={{ uri: data.image }} w={126} h={126} br="$4" />
          <XStack
            pos="absolute"
            top={0}
            right={0}
            ai="center"
            gap={4}
            bg="#00000099"
            px="$2"
            pb="$1"
            borderBottomLeftRadius={20}
          >
            <AntDesign name="star" size={14} color="#D17842" />
            <Text fontWeight="$6">{data.rating}</Text>
          </XStack>

          <YStack mt="$2.5">
            <H6 fontWeight="$5" w="$11" flexWrap="wrap">
              {data.name}
            </H6>
            <H4 fontWeight="$4" fontSize={10} lineHeight={14}>
              {data.origin && "From"} {data.subtitle || data.origin}
            </H4>
            <XStack jc="space-between" mt="$2">
              <XStack ai="center" gap="$2">
                <FontAwesome name="dollar" size={18} color="#D17842" />
                <H4 fontWeight="$6" fontSize={18} pt="$1">
                  {data.price}
                </H4>
              </XStack>

              <View w="$2" h="$2" br="$2" ai="center" jc="center">
                {/* <AntDesign name="heart" size={20} color="#D17842"/> */}
                <AntDesign name="hearto" size={20} color="white" />
              </View>
            </XStack>
          </YStack>
        </View>
      </YStack>
    </LinearGradient>
  );
};

export default Card;
