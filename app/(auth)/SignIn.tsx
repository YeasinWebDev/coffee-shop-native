import { View, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "@/componets/common/Container";
import { H2, H3, H4, H5, H6, Paragraph, XStack, YStack } from "tamagui";
import { router } from "expo-router";
import axios from "axios";
import { getUser, saveUser } from "@/ulits";

const SignIn = () => {
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

  const handleSignIn = async () => {
    if (!email || !password) {
      return setError("All fields are required");
    }
    setLoader(true);
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKENDURL}/login`,
        { email, password }
      );
      if (res) {
        await saveUser(res.data.token, res.data.user);
        setLoader(false);
        router.push('/')
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
          {error && (
            <H5 color="red" fontWeight="$4" mt="$2">
              {error}
            </H5>
          )}
          <TouchableOpacity
            onPress={handleSignIn}
            style={{
              backgroundColor: "#D17842",
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
            disabled={loader}
          >
            {loader ? <H5>Loading...</H5> : <H5>Sign In</H5>}
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
