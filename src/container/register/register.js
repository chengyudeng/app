import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';

export default class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        };
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }
    handleRegister () {
        console.log(this.state);
    }
    render () {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo />
                <List>
                    <InputItem 
                        onChange={ v => this.handleChange('user', v) }
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('pwd', v) }
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={ v => this.handleChange('repeatpwd', v) }
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={ this.state.type === 'genius' }
                        onChange={ () => this.handleChange('type', 'genius') }
                    >
                        牛人
                    </RadioItem>
                    <RadioItem checked={ this.state.type === 'boss' }
                        onChange={ () => this.handleChange('type', 'boss') }
                    >
                        boss
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={ this.handleRegister }>注册</Button>
                </List>
                <h2>注册页</h2>
            </div>
        );
    }
}