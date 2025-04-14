import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Home from '@/componets/icons/Home'
import Cart from '@/componets/icons/Cart'
import Fav from '@/componets/icons/Fav';
import Notification from '@/componets/icons/Notification';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          ...Platform.select({
            ios: {
              position: 'absolute',
              borderTopWidth: 0,
              borderTopColor: 'transparent',
            },
            android: {
              elevation: 0,
              borderTopWidth: 0,
            },
          }),
          height:50,
          paddingTop: 5,
        },
        tabBarItemStyle: {
          paddingVertical: Platform.OS === 'ios' ? 5 : 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Home fill={focused ? '#D17842' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <Cart fill={focused ? '#D17842' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fav"
        options={{
          title: 'fav',
          tabBarIcon: ({ focused, color }) => (
            <Fav fill={focused ? '#D17842' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'notification',
          tabBarIcon: ({ focused, color }) => (
            <Notification fill={focused ? '#D17842' : color} />
          ),
        }}
      />
    </Tabs>
  );
}