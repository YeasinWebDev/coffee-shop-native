import { View, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import Container from "@/componets/common/Container";
import { H2, H3, H4, H5, H6, Paragraph, XStack, YStack } from "tamagui";
import { router } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <YStack ai="center" jc="center" flex={1} paddingHorizontal={16}>
        <XStack marginBottom={24}>
          <H2 fontWeight="600">Cafe</H2>
          <H2 fontWeight="600" color="#D17842">
            Nest
          </H2>
        </XStack>

        <YStack width="100%">
          <H5 fontWeight="$6">Email:</H5>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={{
              borderWidth: 1,
              borderColor: "#21262E",
              borderRadius: 6,
              paddingHorizontal: 20,
              color: "#fff",
              fontSize: 15,
            }}
          />

          <H5 fontWeight="$6" mt="$3">
            Password:
          </H5>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#21262E",
              borderRadius: 6,
              paddingHorizontal: 20,
              color: "#fff",
              fontSize: 15,
            }}
          />

          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              backgroundColor: "#D17842",
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <H5>Sign In</H5>
          </TouchableOpacity>

          <XStack ai="center" jc="center" mt="$4" gap="$2">
            <H6>Don't have an account?</H6>
            <TouchableOpacity onPress={() => router.push("/SignUp")}>
              <H5 color="#D17842">Sign Up</H5>
            </TouchableOpacity>
          </XStack>
        </YStack>
      </YStack>
    </Container>
  );
};

export default SignIn;
