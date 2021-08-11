import Swipeable from 'react-native-gesture-handler/Swipeable';
import React, { useState } from 'react';
import { Alert, View, TouchableHighlight, Modal, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export const SwipeableListItem = ({ item }) => {

    const twoButtonAlert = () => {
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
    }; 

    const LeftActions = () => {

        return (
            <View>
                <Text>Add to Cart</Text>
            </View>
        );
    }

    return (
        <Swipeable renderLeftActions={LeftActions}>
            <ListItem 
                bottomDivider 
                onPress={twoButtonAlert}>
                <Icon
                name={'document-outline'}
                type={'ionicon'}
                textStyle={{ color: 'orange' }}
                />
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
            <ListItem.Chevron/>
          </ListItem>
        </Swipeable>
    );
}
