import { View, Text } from "react-native"
import { styles } from "./styles"
import Animated, { useAnimatedStyle, SharedValue, interpolate, withTiming } from "react-native-reanimated"

type CreditCardProps = {
    cardSide: SharedValue<number>
    data: {
        name: string
        num: string
        date: string
        code: string
    }
}

export enum CARD_SIDE {
    front = 0,
    back = 1,
}

export function CreditCard( { cardSide, data }: CreditCardProps ){
    const frontAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [0, 180]
        )

        return {
            transform: [
                {rotateY: withTiming(`${rotateValue}deg`, { duration:
                1000 })}
            ],
        };
    })

    const backAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(
            cardSide.value,
            [CARD_SIDE.front, CARD_SIDE.back],
            [180, 360]
        )

        return {
            transform: [
                {rotateY: withTiming(`${rotateValue}deg`, { duration:
                1000 })}
            ],
        };
    })


    return (
    <View>
        <Animated.View style={[styles.card, styles.front, frontAnimatedStyles]}>
        <View style={styles.header}>
            <View style={[styles.circle, styles.logo]} />
            <Text>Meu Cartao</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.name}> {data.name} </Text>

            <View style={styles.flag}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
        </View>
        </View>
        </Animated.View>

        <Animated.View style={[styles.card, styles.back, backAnimatedStyles]}>
            <View>
                <Text style={styles.label}>Numero do cartao</Text>
                <Text style={styles.value}>{data.num}</Text>
            </View>

            <View style={styles.footer}>
                <View>
                <Text style={styles.label}>Validade</Text>
                <Text style={styles.value}> {data.date} </Text>
                </View>

                <View>
                <Text style={styles.label}>CVV</Text>
                <Text style={styles.value}>{data.code}</Text>
                </View>

            </View>

        </Animated.View>
    </View>
    )
}