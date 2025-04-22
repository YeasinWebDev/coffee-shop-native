import { View, Text } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import Container from "@/componets/common/Container";
import { H3, H4, H5, H6, Image, ScrollView, XStack, YStack } from "tamagui";
import { BeansData, CoffeeData } from "@/componets/Data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Details = () => {
  const { id } = useLocalSearchParams();
  let data =
    BeansData.find((i) => i.id === id) || CoffeeData.find((i) => i.id === id);
  console.log(data);

  if (!data) return;
  return (
    <Container>
      <ScrollView>
        <YStack>
          <YStack>
            <YStack pos="relative">
              <Image
                source={{ uri: data.image }}
                w="100%"
                h={521}
                borderTopRightRadius="$6"
                borderTopLeftRadius="$6"
                objectFit="cover"
              />
              <XStack
                bg="#00000090"
                pos="absolute"
                bottom={0}
                p="$4"
                w="100%"
                borderTopRightRadius="$6"
                borderTopLeftRadius="$6"
                justifyContent="space-between"
              >
                <YStack gap="$5" jc="space-between">
                  <YStack>
                    <H3 fontWeight="$6">{data.name}</H3>
                    <H5 fontWeight="$4" color="#AEAEAE" lineHeight={18}>
                      {data.origin && "From "} {data.subtitle || data.origin}
                    </H5>
                  </YStack>

                  <XStack ai="center" gap="$2">
                    <AntDesign name="star" size={24} color="#D17842" />
                    <H4 fontWeight="$6" pt="$2">
                      {data.rating}
                    </H4>
                    <H5 color="#AEAEAE" pt="$2">
                      ({data.reviews})
                    </H5>
                  </XStack>
                </YStack>
                <YStack gap="$5">
                  <XStack gap="$4">
                    {data?.ingredients?.map((item, index) => (
                      <YStack
                        bg="#141921"
                        w="$5"
                        h="$5"
                        p="$0"
                        br="$5"
                        pt="$2"
                        ai="center"
                        jc="center"
                      >
                        {item === "Milk" ? (
                          <Image
                            source={require(`@/assets/images/drop.png`)}
                            w={20}
                            h={20}
                          />
                        ) : (
                          <Image
                            source={require(`@/assets/images/beans.png`)}
                            w={20}
                            h={20}
                          />
                        )}
                        <H5 fontWeight="$4" fontSize={10} color="#AEAEAE">
                          {item}
                        </H5>
                      </YStack>
                    ))}
                  </XStack>
                  <XStack
                    bg="#141921"
                    py="$3"
                    px="$2"
                    br="$5"
                    ai="center"
                    jc="center"
                  >
                    <H5 fontWeight="$5" fontSize={10} color="#AEAEAE">
                      {data.roast}
                    </H5>
                  </XStack>
                </YStack>
              </XStack>

              <XStack
                bg="#0C0F14"
                pos="absolute"
                top="$2"
                right="$2"
                p="$3"
                br="$10"
              >
                <AntDesign name="heart" size={18} color="#DC3535" />

              </XStack>
              <XStack
                bg="#0C0F14"
                pos="absolute"
                top="$2"
                left="$2"
                p="$3"
                br="$10"
                onPress={() => router.back()}
              >
                <AntDesign name="left" size={18} color="#fff" />
              </XStack>
            </YStack>

            <YStack
              py="$4"
              borderBottomRightRadius="$6"
              borderBottomLeftRadius="$6"
            >
              <H4 fontWeight="$6">Description</H4>
              <H6 fontWeight="$4">{data.description}</H6>
              <H4 fontWeight="$6" mt="$4">
                Size
              </H4>
              <XStack gap="$5" flexWrap="wrap" mt="$2">
                {data.sizes.map((s) => (
                  <H5 px="$5" py="$2.5" bg="#141921" color="#AEAEAE" br="$5">
                    {s}
                  </H5>
                ))}
              </XStack>
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
        <XStack my="$4" ai="center" gap="$5">
          <YStack>
            <H5 fontWeight="$6">Total Price</H5>
            <XStack ai="center" gap="$2">
              <FontAwesome name="dollar" size={20} color="#D17842" />
              <H3 fontWeight="$6">{data.price}</H3>
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
            <H4 fontWeight="$6">Add to Cart</H4>
          </XStack>
        </XStack>
    </Container>
  );
};

export default Details;
