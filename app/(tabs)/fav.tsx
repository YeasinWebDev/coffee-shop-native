import React from "react";
import Container from "../../componets/common/Container";
import Header from "@/componets/common/Header";
import { H3, H4, H5, H6, Image, ScrollView, XStack, YStack } from "tamagui";
import { CoffeeData } from "@/componets/Data";
import { LinearGradient } from "tamagui/linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const fav = () => {
  return (
    <Container>
      <Header title="Favorites" />

      <ScrollView>
        <YStack gap="$6" my="$4">
          {CoffeeData.map((item, index) => (
            <YStack>
              <YStack pos="relative">
                <Image
                  source={{ uri: item.image }}
                  w="100%"
                  h={457}
                  borderTopRightRadius="$6"
                  borderTopLeftRadius="$6"
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
                      <H3 fontWeight="$6">{item.name}</H3>
                      <H5 fontWeight="$4" color="#AEAEAE" lineHeight={15}>
                        {item.subtitle}
                      </H5>
                    </YStack>

                    <XStack ai="center" gap="$2">
                      <AntDesign name="star" size={24} color="#D17842" />
                      <H4 fontWeight="$6" pt="$2">
                        {item.rating}
                      </H4>
                      <H5 color="#AEAEAE" pt="$2">
                        ({item.reviews})
                      </H5>
                    </XStack>
                  </YStack>
                  <YStack gap="$5">
                    <XStack gap="$4">
                      {item.ingredients.map((item, index) => (
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
                        {item.roast}
                      </H5>
                    </XStack>
                  </YStack>
                </XStack>

                <XStack bg='#0C0F14' pos='absolute' top='$2' right='$2' p='$3' br='$10'>
                  <AntDesign name="heart" size={18} color="#DC3535" />
                </XStack>
              </YStack>

              <LinearGradient
                colors={["#262B33", "#262B3300"]}
                start={[0, 1]}
                end={[1, 0]}
                p="$5"
                borderBottomRightRadius="$6"
                borderBottomLeftRadius="$6"
              >
                <H4 fontWeight="$6">Description</H4>
                <H6 fontWeight="$4">{item.description}</H6>
              </LinearGradient>
            </YStack>
          ))}
        </YStack>
      </ScrollView>
    </Container>
  );
};

export default fav;
