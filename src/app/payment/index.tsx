import { View, Text } from "react-native"

import { CreditCard } from "@/components/credit-card"

import { styles } from "./styles"

export function Payment(){
    return(
        <View style={styles.container}>
        <CreditCard />
        </View>
    )
}