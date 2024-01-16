import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  name: string;
  size: string;
  originalPrice: number;
  promotionPrice?: number;
  items: string[];
  onPress: () => void;
};

export const PizzaItem = ({
  name,
  size,
  originalPrice,
  promotionPrice,
  items,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.name, styles.negrito]}>
          {name} - {size}
        </Text>
        <Text style={styles.price}>R$ {originalPrice.toFixed(2)}</Text>
        <Text>{items.join(", ")}</Text>
        {promotionPrice && originalPrice > promotionPrice && (
          <Text>PROMOÇÃO EXTRA POR R$ {promotionPrice.toFixed(2)} </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#CCC",
  },
  name: {
    fontSize: 15,
  },
  price: {
    fontSize: 13,
    color: "#FF0000",
  },
  negrito: {
    fontWeight: "bold",
  },
});
