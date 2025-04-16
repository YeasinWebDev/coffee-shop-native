import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { H5, SizableText, Text, View, YStack } from 'tamagui'

type Props = {
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}
const Tabs = ({activeTab, setActiveTab}:Props) => {

    const tabs = ['All', "Cappuccino", "Espresso", "Americano", "Macchiato", "Latte"]
  return (
    <View>
        <FlatList
            data={tabs}
            horizontal
            keyExtractor={(item) => item}
            contentContainerStyle={{
                padding: 10,
                gap:25
            }}
            renderItem={({item}) => (
                <YStack ai='center' onPress={() => setActiveTab(item)}>
                    <H5 fontWeight="$6" color={activeTab === item ? '#D17842' : '#52555A'}>{item}</H5>
                    { activeTab === item && <View bg='#D17842' h='$0.75' w='$0.75' borderRadius={20}/>}
                </YStack>
            )}
        />
    </View>
  )
}

export default Tabs