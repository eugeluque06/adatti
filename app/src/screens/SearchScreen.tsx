import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = () => {
    // Aquí puedes agregar la lógica de búsqueda
    console.log("Buscando:", searchText);
  };

  return (
    <View style={styles.container}>
      {/* Caja de texto para búsqueda */}
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={searchText}
        onChangeText={setSearchText} // Actualiza el texto cuando el usuario escribe
      />

      {/* Botón de búsqueda */}
      <Button title="Buscar" onPress={handleSearch} />

      {/* Mostrar el texto de búsqueda (opcional) */}
      <Text style={styles.resultText}>Búsqueda: {searchText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    color: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
  },
});

export default SearchBox;
