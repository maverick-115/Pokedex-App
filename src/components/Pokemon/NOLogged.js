import { StyleSheet, View, Text, BackHandler, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NOLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesion
      </Text>
      <Button
        title="Ir al Login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
