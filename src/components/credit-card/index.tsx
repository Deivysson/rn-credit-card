import { View, Text } from "react-native"
import { styles } from "./styles"

export function CreditCard(){
    return (
    <View>
        <View style={[styles.card, styles.front]}>
        <View style={styles.header}>
            <View style={[styles.circle, styles.logo]} />
            <Text>Meu Cartao</Text>
        </View>

        <View style={styles.footer}>

        </View>
        </View>
    </View>
    )
}