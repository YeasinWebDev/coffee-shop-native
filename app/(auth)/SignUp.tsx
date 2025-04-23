import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "@/componets/common/Container";
import { H2, H5, H6, XStack, YStack } from "tamagui";
import { router } from "expo-router";
import axios from "axios";
import { getUser, saveUser } from "@/ulits";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const { token, user } = await getUser();
    if (token && user) {
      router.replace("/");
    }
  };

  const handleSignUp = async () => {
    if (!name || !email || !password)
      return setError("All fields are required");
    setLoader(true);

    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKENDURL}/register`,
        { name, email, password }
      );
      if (res) {
        await saveUser(res.data.token, res.data.user);
        setLoader(false);
        router.push("/");
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
      setLoader(false);
    }
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
          <H5 fontWeight="$6">Full Name:</H5>
          <TextInput
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            style={{
              borderWidth: 1,
              borderColor: "#21262E",
              borderRadius: 6,
              paddingHorizontal: 10,
              color: "#fff",
              fontSize: 15,
              marginBottom: 16,
            }}
          />

          <H5 fontWeight="$6">Email:</H5>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={{
              borderWidth: 1,
              borderColor: "#21262E",
              borderRadius: 6,
              paddingHorizontal: 10,
              color: "#fff",
              fontSize: 15,
              marginBottom: 16,
            }}
          />

          <H5 fontWeight="$6">Password:</H5>
          <TextInput
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#21262E",
              borderRadius: 6,
              paddingHorizontal: 10,
              color: "#fff",
              fontSize: 15,
              marginBottom: 16,
            }}
          />

          {error && (
            <H5 color="red" fontWeight="$4">
              {error}
            </H5>
          )}

          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              backgroundColor: "#D17842",
              padding: 14,
              marginTop: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            {loader ? (
              <H5 color="white">Loading...</H5>
            ) : (
              <H5 color="white">Create Account</H5>
            )}
          </TouchableOpacity>

          <XStack ai="center" jc="center" mt="$4" gap="$2">
            <H6>Already have an account?</H6>
            <TouchableOpacity onPress={() => router.push("/SignIn")}>
              <H5 color="#D17842">Sign In</H5>
            </TouchableOpacity>
          </XStack>
        </YStack>
      </YStack>
    </Container>
  );
};

export default SignUp;
