import React from "react";
import Container from "@/componets/common/Container";
import Header from "@/componets/common/Header";
import { H3, H4, H5, H6, Image, ScrollView, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

const OrderHistory = () => {
  return (
    <Container>
      <Header title="Order History" />

      <ScrollView>
        <YStack my='$5' gap='$10'>
          {data.map((item) => (
            <YStack>
              <XStack ai="center" jc="space-between">
                <YStack>
                  <H4 fontWeight="$6">Order Date</H4>
                  <H5 fontWeight="$4">{item.orderDate}</H5>
                </YStack>
                <YStack ai="flex-end">
                  <H4 fontWeight="$6">Total Amount</H4>
                  <H5 fontWeight="$4" color="#D17842">
                    $ {item.totalAmount}
                  </H5>
                </YStack>
              </XStack>

              <YStack gap="$4" mt="$3">
                {item.orderData.map((or) => (
                  <LinearGradient
                    colors={["#262B33", "#262B3300"]}
                    start={[0, 0]}
                    end={[1.5, 1]}
                    br="$5"
                    p="$5"
                  >
                    <YStack>
                      <XStack ai="center" jc="space-between">
                        <XStack gap="$4" ai="center">
                          <Image
                            source={{ uri: or.image }}
                            w={57}
                            h={57}
                            br="$7"
                          />
                          <YStack>
                            <H4 fontWeight="$5">{or.name}</H4>
                            <H6 fontWeight="$4" lineHeight={15}>
                              {or.subtitle}
                            </H6>
                          </YStack>
                        </XStack>
                        <XStack gap="$2" ai="center">
                          <FontAwesome
                            name="dollar"
                            size={24}
                            color="#D17842"
                          />
                          <H3 fontWeight="$6" pt="$1.5">
                            {or.totalPrice}
                          </H3>
                        </XStack>
                      </XStack>
                      <YStack gap="$3" mt="$4">
                        {or.sizes.map((s) => (
                          <XStack ai="center" jc="space-between">
                            <XStack
                              bg="#000"
                              w="$12"
                              ai="center"
                              jc="space-between"
                              br="$5"
                            >
                              <H4
                                py="$2"
                                px="$4"
                                borderRightWidth={2}
                                borderColor="#21262E"
                                flex={1}
                              >
                                {s.size}
                              </H4>
                              <XStack gap="$2" ai="center" pl="$4" pr="$4">
                                <FontAwesome
                                  name="dollar"
                                  size={20}
                                  color="#D17842"
                                />
                                <H4 fontWeight="$6" pt="$1">
                                  {s.pricePerItem}
                                </H4>
                              </XStack>
                            </XStack>

                            <XStack ai="center">
                              <Entypo name="cross" size={24} color="#D17842" />
                              <H4 pt="$1">{s.quantity}</H4>
                            </XStack>

                            <H4 color="#D17842">
                              {(s.pricePerItem * s.quantity).toFixed(2)}
                            </H4>
                          </XStack>
                        ))}
                      </YStack>
                    </YStack>
                  </LinearGradient>
                ))}
              </YStack>
            </YStack>
          ))}
        </YStack>
      </ScrollView>

      <XStack bg='#D17842' w='100%' py='$4' br='$7' jc='center'>
        <H5 fontWeight='$5'>Download</H5>
      </XStack>
    </Container>
  );
};

const data = [
  {
    orderDate: "20th March 2021",
    totalAmount: "74.40",
    orderData: [
      {
        image: "https://cafefabrique.com/cdn/shop/articles/Cappuccino.jpg",
        name: "Cappuccino",
        subtitle: "With Steamed Milk",
        totalPrice: "37.20",
        sizes: [
          {
            size: "S",
            pricePerItem: 4.2,
            quantity: 2,
          },
          {
            size: "M",
            pricePerItem: 6.2,
            quantity: 2,
          },
          {
            size: "L",
            pricePerItem: 8.2,
            quantity: 2,
          },
        ],
      },

      {
        image:
          "https://lesfringales.com/wp-content/uploads/2022/12/hot-drinks.jpg",
        name: "Espresso",
        subtitle: "Strong & Bold",
        totalPrice: "30.20",
        sizes: [
          {
            size: "S",
            pricePerItem: 4.2,
            quantity: 2,
          },
          {
            size: "M",
            pricePerItem: 6.2,
            quantity: 2,
          },
        ],
      },
    ],
  }
];

export default OrderHistory;
