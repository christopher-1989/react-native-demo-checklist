import Swipeable from 'react-native-gesture-handler/Swipeable';
import React, { useState } from 'react';
import { Alert, View, Animated, TouchableHighlight, Modal, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native';



export const SwipeableListItem = ({ item, onSwipeFromLeft, onRightPress }) => {
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

    const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
        return (
            <View style={styles.leftAction}>
                <TouchableWithoutFeedback>
                    <Animated.Text style={[styles.actionText, {transform: [{ scale }]}]}>Add to Cart</Animated.Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
    
     const RightActions = ({progress, dragX, onPress}) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        return ( 
            <View style={styles.rightAction}>
                <TouchableOpacity onPress={onPress}>
                    <Animated.Text style={[styles.actionText, {transform: [{ scale }]}]}>Delete</Animated.Text>
                </TouchableOpacity>
            </View>
        );
    }
    

    return (
        <Swipeable 
            renderLeftActions={LeftActions} 
            onSwipeableLeftOpen={onSwipeFromLeft}
            renderRightActions={(progress, dragX) => <RightActions 
                progress={progress}  
                dragX={dragX} 
                onPress={onRightPress} 
                />}
            >
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

const styles = StyleSheet.create({
    leftAction: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex: 1
    },
    rightAction: {
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20
    }
})
