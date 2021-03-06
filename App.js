import React from 'react';
import { StyleSheet, Text, View, Button, Modal, Image } from 'react-native';

var onPressLearnMore = function() {
console.log('button is clicked :)');
};

export default class App extends React.Component {
  state = {
      modalVisible: false,
    };
    
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
    
  render() {
    return (
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
          <Button
        onPress={onPressLearnMore}
        title="Lets console.loging!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
