/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, TouchableHighlight, Alert } from 'react-native';
import { Container, Header, Content, Footer, Text, ListItem, Icon, Input, Item, Left, Button, Right, Body, CheckBox, Title } from 'native-base';
// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material';

export default class App extends Component {
  state = {
    todos: [],
    todo: '',
    isSearch: false
  }

  changeTextHandler = text => {
    this.setState({ todo: text });
  };

  addTodo = () => {
    let { todo } = this.state;
    console.log(todo);
    if (!todo) {
      return;
    }
    this.setState({ todos: [...this.state.todos, todo], todo: '' }, () => console.log(this.state.todos));
  }

  deleteTodo = index => {
    let { todos } = this.state;
    todos.splice(index, 1);
    console.log(todos);
    this.setState({ todos: todos }, () => console.log(this.state.todos));
  }

  // showHiddenView = () => {
  //   console.log('ok');
  //   this.setState({todo: 'osama'});
  // }

  render() {
    let { todos } = this.state;
    return (
      // <StyleProvider style={getTheme(material)}>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            {this.state.isSearch ?
              <Item style={styles.todo}>
                <Input value={this.state.todo} placeholder='Search' onChangeText={this.changeTextHandler} />
                <Button onPress={this.addTodo} style={{ backgroundColor: "#FF9501", height: '100%' }}>
                  <Icon active name="add" />
                </Button>
              </Item>
              :
              <Title>Todo App</Title>}
          </Body>
          <Right>
            <Button hasText transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>

        <Content>

          {/* <Text> */}
          {todos.length ? this.state.todos.map((el, i) => {
            return (<ListItem icon key={i} style={{ marginLeft: 5 }}>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="bookmark" />
                </Button>
                {/* <TouchableOpacity
                  onLongPress={() => { console.log("onLongPress");this.showHiddenView(); }}
                >
                  <Text>gfgdfgdfgdfg</Text>
                 </TouchableOpacity> */}
                {/* <TouchableHighlight onPress={() => { console.log("onPress") }} onLongPress={() => { console.log("onLongPress");Alert.alert("on Long Press jam") }} underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                  </View>
                </TouchableHighlight> */}
              </Left>
              {/* <CheckBox checked={true} /> */}
              <Body>

                <Text>{el}</Text>
              </Body>
              <Right>
                <Button onPress={() => this.deleteTodo(i)} style={{ backgroundColor: "red" }} activeOpacity={0.1}>
                  <Icon active name="close" />
                </Button>
              </Right>
            </ListItem>);
          }) : <Text>Please add Todo</Text>}
          {/* </Text> */}
        </Content>
        <Footer style={styles.footer}>
          <Item style={styles.todo}>
            <Input value={this.state.todo} placeholder='Add todo' onChangeText={this.changeTextHandler} />
            <Button onPress={this.addTodo} style={{ backgroundColor: "#FF9501", height: '100%' }}>
              <Icon active name="add" />
            </Button>
          </Item>
        </Footer>

      </Container>
      // </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    width: '100%',
  },
  footer: {
    backgroundColor: 'white',
  },
  icon: {
    // backgroundColor: 'blue',
    // color: 'white'
  },
  border: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    marginLeft: 5
  }
});
