import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, ListItem, Icon, Input, Item, Left, Button, Right, Body, CheckBox, Title } from 'native-base';

export default class Sidebar extends Component {
    render(){
        return (
            <Content style={{backgroundColor: "#3F51B5"}}>
                <Text>SideBar</Text>
            </Content>
        )
    }
}