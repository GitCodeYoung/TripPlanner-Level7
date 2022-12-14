import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import MapPreview from '../components/MapPreview';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors'
const PlaceDetailScreen = (props) => {
  const placeId = props.navigation.getParam('placeId');
  const selectedPlace = useSelector((state) =>
    state.places.places.find((place) => place.id === placeId)
  );
  return (
    <ScrollView contentContainerStyle={{alignItems:'center'}}>
      <Image source={{uri: selectedPlace.imageUri}} style={styles.image}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}><Text style={styles.address}>{selectedPlace.address}</Text></View>
        <MapPreview style={styles.mapPreview} location={{lat:selectedPlace.lan,lng:selectedPlace.lng}}/>
      </View>
    </ScrollView>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};
const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc"
  },
  locationContainer: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10
  },
  addressContainer: {
    padding: 20
  },
  address: {
    color: Colors.primary,
    textAlign: "center"
  }
});
export default PlaceDetailScreen;
