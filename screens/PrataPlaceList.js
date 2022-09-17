import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  
  const posts = [
    {
      id: 1,
      prataplace: "Mr and Mrs Mohgans Prata",
      address: "300 Joo Chiat Road, Singapore",
      openhrs: "6.30 am - 1.30 pm (Daily)",
      ov1: 20,
      ov2: 29,
      ov3: 91,
    },
  ];
  
  export default function PrataPlaceList() {
    function renderItem({ item }) {
      return (
        <TouchableOpacity style={styles.PrataListCard} onPress={() => {}}>
          <Text style={styles.PrataPlaceCardTitle}>{item.prataplace}</Text>
          <Text style={styles.PrataPlaceCardBodyText}>
            {item.address.substring(0, 120)}
      
          </Text>
          <Text style={styles.PrataPlaceCardOpenHrsText}>
            {item.openhrs.substring(0, 120)}
          </Text>
          <Text style={styles.Overall}>
            Overall Votes
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PRATA LIST</Text>
  
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(post) => post.id.toString()}
        />
  
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add Prata Place</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    PrataListCard: {
      borderColor: "gray",
      borderWidth: 1,
      padding: 15,
      borderRadius: 5,
      marginBottom: 15,
    },
    PrataPlaceCardTitle: {
      fontSize: 13,
      fontWeight: "500",
      marginBottom: 7,
    },
    PrataPlaceCardBodyText: {
      fontSize: 12,
      fontWeight: "300",
    },
    PrataPlaceCardOpenHrsText: {
      fontSize: 12,
      fontWeight: "300",
    },
    Overall: {
      fontSize: 22,
      color:"#BCA6C3",
      textAlign:"center",
      fontWeight: "600",
      paddingTop: 5,
    },
    container: {
      flex: 1,
      backgroundColor: "#FFFCFC",
      paddingTop: 100,
      padding: 25,
    },
    title: {
      fontWeight: "bold",
      color: "#6D3D78",
      textAlign: "center",
      fontSize: 40,
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#F5EAF9",
      borderRadius: 15,
      width: "100%",
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 28,
      padding: 20,
      color: "#FA3895",
    },
  });