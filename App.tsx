import { Alert, StyleSheet, Text, View } from "react-native";
import { PizzaItem } from "./components/PizzaItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PizzaTech</Text>
      <Text style={styles.subTitle}>Lista de pizzas</Text>

      <PizzaItem
        name="Canadense"
        size="GG"
        originalPrice={48}
        items={["Mussarela", "Lombinho", "Catupiry", "Milho"]}
        onPress={() => Alert.alert("Pizza canadense")}
      />
      <PizzaItem
        name="Portuguesa"
        size="G"
        originalPrice={40}
        items={["Mussarela", "Presento", "Ovo", "Tomate", "Cebola", "Pimentão"]}
        onPress={() => Alert.alert("Pizza portuguesa")}
      />
      <PizzaItem
        name="Baiana"
        size="M"
        originalPrice={34}
        items={["Mussarela", "Calabresa", "Ovo", "Pimenta", "Cebola"]}
        onPress={() => Alert.alert("Pizza baiana")}
      />
      <PizzaItem
        name="Nordestina"
        size="P"
        originalPrice={28}
        promotionPrice={15}
        items={["Mussarela", "Carne seca", "Cebola", "Milho", "Azeitona"]}
        onPress={() => Alert.alert("Pizza nordestina")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: {
    fontSize: 24,
    color: "#FF0000",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    color: "#999999",
    textAlign: "center",
  },
});
