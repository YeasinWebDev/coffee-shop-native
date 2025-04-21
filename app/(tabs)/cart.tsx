import Container from "@/componets/common/Container";
import Header from "@/componets/common/Header";
import React from "react";
import {
  Button,
  H1,
  H3,
  H4,
  H5,
  H6,
  Image,
  ScrollView,
  SizableText,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "tamagui/linear-gradient";

const cart = () => {
  return (
    <Container>
      <Header title="Cart" />
      <ScrollView>
        <YStack>
          <LinearGradient
            colors={["#262B33", "#262B3300"]}
            start={[0, 0]}
            end={[1.5, 1]}
            br="$5"
            // alignItems="center"
            justifyContent="center"
            flexDirection="row"
            jc="space-between"
            p="$4"
          >
            <Image
              src="https://s3-alpha-sig.figma.com/img/38d1/813d/313b6940b6f0f0fe599f787b83cb6b42?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bsL56vQzE3Z9rhcwOSLTbza7HVaLUZQJpVSci3CjrPNHwNT62lOv66ORbxJxtwwmrgks31KMl7O6Kwc7doBs0Q0xGw6NU2G7kc6L71cLpWdjVeDe8aQsHjkiOlTEcYXrvS12JZ2vgSbKCRXLu4oNWqbmAm7Y1sglM-qHlLg7KODR6vz1F7xPPLSvTZRecaBm~GTaoso1AdwBtIpr70rb~1IfRa4Ki3zOp3MHyDMOf2jqYUSwcw4cUqvE6gJ~YUUxtVoncigiQ8yo6FJvO-X2AQ0tVcZK0cQbnIoSRD5dRL6Glap-DJispSB9EBT4OSAZpz9R3oR6jomWEx3HmMe-Sg__"
              w={180}
              h={180}
              br="$5"
              objectFit="cover"
            />

            <YStack>
              <H4 fontWeight="$6">Cappuccino</H4>
              <H5 fontWeight="$4" color="#AEAEAE" mb="$2">
                With Steamed Milk
              </H5>

              <XStack gap="$4">
                <View
                  bg="#0C0F14"
                  br="$4"
                  ac="center"
                  jc="center"
                  w="$6"
                  h="$4"
                >
                  <Text fontSize={16} fontWeight="$6" textAlign="center">
                    M
                  </Text>
                </View>
                <XStack ai="center" gap="$2">
                  <FontAwesome name="dollar" size={20} color="#D17842" />
                  <H3 fontWeight="$6">10.40</H3>
                </XStack>
              </XStack>

              <XStack ai="center" jc="space-between" mt="$4">
                <View
                  w="$3"
                  h="$3"
                  br="$4"
                  ai="center"
                  jc="center"
                  bg="#D17842"
                >
                  <FontAwesome name="minus" size={18} color="#fff" />
                </View>
                <H4
                  fontWeight="$6"
                  w="$4"
                  h="$3"
                  bg="#0C0F14"
                  textAlign="center"
                  br="$4"
                  pt="$2"
                  borderWidth={1}
                  borderColor="#D17842"
                >
                  1
                </H4>
                <View
                  w="$3"
                  h="$3"
                  br="$4"
                  ai="center"
                  jc="center"
                  bg="#D17842"
                >
                  <FontAwesome name="plus" size={18} color="#fff" />
                </View>
              </XStack>
            </YStack>
          </LinearGradient>
        </YStack>
      </ScrollView>

      <XStack my="$4" ai="center" gap="$5">
        <YStack>
          <H6 fontWeight="$6">Total Price</H6>
          <XStack ai="center" gap="$2">
            <FontAwesome name="dollar" size={20} color="#D17842" />
            <H3 fontWeight="$6">10.40</H3>
          </XStack>
        </YStack>
        <XStack
          bg="#D17842"
          py="$2"
          px="$3"
          br="$6"
          ai="center"
          flex={1}
          h="$6"
          ai="center"
          jc="center"
        >
          <H5 fontWeight="$6">Pay</H5>
        </XStack>
      </XStack>
    </Container>
  );
};

export default cart;
