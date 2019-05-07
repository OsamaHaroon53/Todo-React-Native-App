/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, TouchableHighlight, Alert } from 'react-native';
import { Container, Drawer, Header, Content, Footer, Text, ListItem, Icon, Input, Item, Left, Button, Right, Body, CheckBox, Title } from 'native-base';
// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material';
import SideBar from './sidebar';

export default class App extends Component {
  state = {
    todos: [],
    todo: '',
    isSearch: false,
    search: ''
  }
  drawer;

  changeTextHandler = text => {
    this.setState({ todo: text });
  };

  changeSearchHandler = text => {
    this.setState({ search: text });
  };

  addTodo = () => {
    let { todo } = this.state;
    console.log(todo);
    if (!todo) {
      return;
    }
    this.setState({ todos: [...this.state.todos, todo], todo: '' }, () => console.log(this.state.todos));
  }

  deleteTodo = todo => {
    let { todos } = this.state;
    let index = todos.findIndex(el=> el === todo);
    if(index != -1){
      todos.splice(index, 1);
      console.log(todos);
      this.setState({ todos: todos }, () => console.log(this.state.todos));
    }
  }

  showSearch = () =>{
    if(this.state.isSearch)
      this.setState({ isSearch: false, search: '' });
    else
      this.setState({ isSearch: true });   
  }

  clearFilter = () =>{
    if(!this.state.isSearch)
      return;
    this.showSearch();
  }

  // showHiddenView = () => {
  //   console.log('ok');
  //   this.setState({todo: 'osama'});
  // }

  closeDrawer = () => { this.drawer._root.close() };

  openDrawer = () => { this.drawer._root.open() };

  render() {
    let { todos, search } = this.state;
    return (
      // <StyleProvider style={getTheme(material)}>
      <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
        <Container>
          <Header>
            <Left style={styles.rightLeftHeader}>
              <Button transparent>
                <Icon name='menu' onPress={this.openDrawer}/>
              </Button>
            </Left>
            <Body>
              {this.state.isSearch ?
                <Item style={styles.search} rounded>
                  <Input value={search} style={{ marginTop: 5, color: '#3F51B5' }} placeholder='Search' onChangeText={this.changeSearchHandler} />
                </Item>
                :
                <Title style={{ marginLeft: 10 }}>Todo App</Title>}
            </Body>
            <Right style={styles.rightLeftHeader}>
              <Button hasText transparent onPress={this.showSearch}>
                {this.state.isSearch ? <Text>Cancel</Text> : <Icon name='search' />}
              </Button>
            </Right>
          </Header>

          <Content>

            {/* <Text> */}
            {todos.length ? this.state.todos
              .filter(el => !search || (el.toLowerCase().indexOf(search.trim().toLowerCase()) + 1))
              .map((el, i) => {
                return (<ListItem icon key={i} style={{ marginLeft: 5 }}>
                  <Left>
                    <Button success>
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
                    <Button onPress={() => this.deleteTodo(el)} danger small activeOpacity={0.1}>
                      <Icon active name="close" />
                    </Button>
                  </Right>
                </ListItem>);
              }) : <Text>Please add Todo</Text>}
            {/* </Text> */}
          </Content>
          <Footer style={styles.footer}>
            <Item style={styles.todo}>
              <Input onFocus={()=>this.clearFilter()} value={this.state.todo} placeholder='Add todo' onChangeText={this.changeTextHandler} />
              <Button onPress={this.addTodo} style={{ backgroundColor: "#3F51B5", height: '100%' }}>
                <Icon active name="add" />
              </Button>
            </Item>
          </Footer>

        </Container>
      </Drawer>
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
  border: {
    borderWidth: 1,
    borderColor: 'yellow',
    borderStyle: 'solid',
    marginLeft: 5
  },
  search: {
    // borderWidth: 1,
    // borderColor: '#3F51B5',
    // borderStyle: 'solid',
    backgroundColor: 'white',
    height: 40,
    marginLeft: 5
    // marginTop: 5,
    // marginBottom: 5
    // width: 200
    // flex: 1
    // flexGrow: 1,
  },
  rightLeftHeader: {
    flex: null
  }
});
