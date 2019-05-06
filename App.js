/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, Text, ListItem, Icon, Input, Item, Left, Button, Right, Body, CheckBox } from 'native-base';
// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material';

export default class App extends Component {
  state = {
    todos: [],
    todo: ''
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
    this.setState({ todos: [...todo.slice(index, 1)] }, () => console.log(this.state.todos));
  }
  render() {
    let { todos } = this.state;
    return (
      // <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <Content>

          {/* <Text> */}
          {todos.length ? this.state.todos.map((el, i) => {
            return (<ListItem icon key={i}>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}>
                  <Icon active name="bookmark" />
                </Button>
              </Left>
              {/* <CheckBox checked={true} /> */}
              <Body>

                <Text>{el}</Text>
              </Body>
              <Right>
                <Button onPress={() => this.deleteTodo(i)} style={{ backgroundColor: "red" }}>
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
            {/* <Icon style={styles.icon} active name='add' /> */}
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
  }
});
