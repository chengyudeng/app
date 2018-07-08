import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Result, List, WhiteSpace } from 'antd-mobile';
// import browserCookie from 'browser-cookies';

@connect(
    state => state.user
)
export default class User extends Component {
    constructor (props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout () {
        alert(1);
    }
    render () {
        const props = this.props;
        const Item = List.Item;
        const Brief = Item.Brief;
        return props.user ? (
            <div>
                <Result 
                    img={ <img src={ require(`../img/${props.avatar}.png`) } style={ { width: 50 } } alt='' />  }
                    title={ props.user }
                    message={ props.type === 'boss' ? props.company : null }
                />
                <List renderHeader={ () => '简介' }>
                    <Item
                        multipleLine
                    >
                        { props.title }
                        { props.desc.split('\n').map(v => <Brief key={v}>{ v }</Brief>) }
                        { props.money ? <Brief>薪资: { props.money }</Brief> : null }
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List onClick={ () => alert(1) }>
                    <Item>退出登录</Item>
                </List>
            </div>
        ) : null;
    }
}