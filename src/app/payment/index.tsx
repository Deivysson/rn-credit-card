import { View, Text,TouchableOpacity } from "react-native"

import { CreditCard, CARD_SIDE } from "@/components/credit-card"

import { styles } from "./styles"
import { useSharedValue } from "react-native-reanimated"
import { Input } from "@/components/input"
import { useState } from "react"

export function Payment(){
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [date, setDate] = useState('');
    const [code, setCode] = useState('');


    const cardSide = useSharedValue(CARD_SIDE.front)

function showFrontCard() {
    cardSide.value = CARD_SIDE.front
}

function showBackCard() {
    cardSide.value = CARD_SIDE.back
}

function handleFlipCard(){
    if(cardSide.value === CARD_SIDE.front ) {
        showBackCard()
    }else{
        showFrontCard()
    }
}
    
    return(
        <View style={styles.container}>
        <CreditCard cardSide={cardSide} data={{
            name,
            num: num.replace(/(\d{4})(?=\d)/g, '$1 '),
            date,
            code
            }} />

        <TouchableOpacity style={styles.button} onPress={handleFlipCard} >
        <Text>Inverter</Text>
        </TouchableOpacity>

        <View style={styles.form}>
            <Input placeholder="Nome do titular" onChangeText={setName} onFocus={showFrontCard} />
            <Input placeholder="Número do cartão" keyboardType="numeric"  onChangeText={setNum} onFocus={showBackCard} />
        </View>

        <View style={styles.inline}>
            <Input placeholder="01/02" onChangeText={setDate} onFocus={showBackCard} />
            <Input placeholder="123" keyboardType="numeric" onChangeText={setCode} onFocus={showBackCard} />
        </View>

        </View>
    )
}