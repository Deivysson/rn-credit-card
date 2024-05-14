import { View, Text,TouchableOpacity } from "react-native"

import { CreditCard, CARD_SIDE } from "@/components/credit-card"

import { styles } from "./styles"
import { useSharedValue } from "react-native-reanimated"

export function Payment(){
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
        <CreditCard cardSide={cardSide} />

        <TouchableOpacity style={styles.button} onPress={handleFlipCard} >
        <Text>Inverter</Text>
        </TouchableOpacity>
        </View>
    )
}