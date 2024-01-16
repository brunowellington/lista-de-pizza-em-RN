import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { PizzaItem } from "./components/PizzaItem";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Fulano");
  const [lastName, setLastName] = useState("Silva");

  const [showOptions, setShowOptions] = useState(true);

  const handleButton1 = () => {
    setName("Pedro");
    setLastName("Alves");
  };

  const handleButton2 = () => {
    setName("Amaro");
    setLastName("Gomes");
  };

  const handleOptionsButton = () => {
    setShowOptions(!showOptions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalhando com useState</Text>
      <Text style={styles.subTitle}>
        Meu nome é {name} {lastName}
      </Text>

      {showOptions && (
        <View style={styles.box}>
          <Button title="Mudar para Pedro" onPress={handleButton1} />
          <Button title="Mudar para Amaro" onPress={handleButton2} />
        </View>
      )}

      <Button
        title={showOptions ? "Ocultar Opções" : "Mostrar Opções"}
        onPress={handleOptionsButton}
      />

      {/* <Text style={styles.title}>PizzaTech</Text>
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
      /> */}
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
  box: {
    borderColor: "#000000",
    borderStyle: "dotted",
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
});
