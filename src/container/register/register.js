import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';

export default class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'genius'
        }
    }
    render () {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo />
                <List>
                    <InputItem>用户</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={ this.state.type === 'genius' }>
                        牛人
                    </RadioItem>
                    <RadioItem checked={ this.state.type === 'boss' }>
                        boss
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary'>注册</Button>
                </List>
                <h2>注册页</h2>
            </div>
        );
    }
}