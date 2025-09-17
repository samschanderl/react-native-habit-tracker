import { View, Text, StyleSheet } from "react-native"

type HeadingType = {
    children: React.ReactNode,
    type: "small" | "medium" | "large"
}

const Heading = ({children, type}: HeadingType) => {
    return (
        <View>
            <Text style={styles[type]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    large: {
        fontSize: 32
    },
    medium: {
        fontSize: 24
    },
    small: {
        fontSize: 18
    }
})

export default Heading;