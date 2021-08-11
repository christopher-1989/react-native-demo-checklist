import React, { useState } from 'react';
import { View, TouchableHighlight, Modal, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { SwipeableListItem } from './SwipeableListItem';

const info = [
  {   name: 'Policy1',
      details: 'Commodo elit est fugiat reprehenderit sint ea proident aliquip ea enim quis proident adipisicing ad.'     
  },
  {   name: 'Policy2',
      details: 'Commodo do et deserunt labore dolor commodo minim do.'
  },
  {    name: 'Policy3',
      details: 'Culpa sunt fugiat ullamco sint magna aute occaecat occaecat tempor do excepteur Lorem.'
  },
  {   name: 'Policy4',
      details: 'Commodo elit est fugiat reprehenderit sint ea proident aliquip ea enim quis proident adipisicing ad.'     
  },
  {   name: 'Policy5',
      details: 'Commodo do et deserunt labore dolor commodo minim do.'
  },
  {    name: 'Policy6',
      details: 'Culpa sunt fugiat ullamco sint magna aute occaecat occaecat tempor do excepteur Lorem.'
  }
]

export default function App () {
  const [modalVisible, setModalVisible] = useState(false);
  const [policyDetails, setPolicyDetails] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
 
  return (
    <View style={styles.listView}> 
      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text>{policyDetails}</Text>
                  <TouchableHighlight
                    style={{ ...styles.button, backgroundColor: '#2196F3' }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.buttonText}>Done</Text>
                  </TouchableHighlight>
                </View>
              </View>
          </Modal>
          <View style={styles.listView}>
      <FlatList 
        data={info}
        renderItem={({ item, index }) => (
          <ListItem 
            bottomDivider 
            onPress={() => {
              setPolicyDetails(item.details)
              setModalVisible(true);
            } }>
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
        )}
        keyExtractor={(item, index) => index.toString()}
          />

      <FlatList 
        data={info}
        renderItem={({ item, index }) => (
          <SwipeableListItem item={item} /> 
        )}
        keyExtractor={(item, index) => index.toString()}
          />


          <FlatList 
        data={info}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              let updatedItems;
              if (selectedItems.indexOf(index) !== -1) {
                updatedItems = selectedItems.filter(key => key !== index)
              } else {
                updatedItems = [...selectedItems, index]
              }
              setSelectedItems(updatedItems);
            } }
            style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
            <Icon
                name={selectedItems.indexOf(index) === -1 ? 'ellipse-outline' : 'checkmark-circle-outline'}
                type={'ionicon'}
              />  
                <Text style={{color: 'black', paddingVertical: 5, paddingLeft: 10}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        extraData={selectedItems}
          />
      </View>
    </View>
    
            
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    flex: 1,
    maxHeight: '100%',
    marginTop: 15,

  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  button: {
      padding: 20,
      margin: 15,
      backgroundColor: '#2196F3',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
    },
    modalButtonText: {
      color: '#2196F3'
    },
    modalButton: {
      borderRadius: 30,
      alignItems: 'center',
    },  
    saveButton: {
      backgroundColor: '#2196F3',
      borderRadius: 5,
      padding: 20,
      maxWidth: 200,
      bottom: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: '95%',
      height: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    elevate: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 5,
    },
    selected: {
      backgroundColor: "#FA7B5F"
    },

});