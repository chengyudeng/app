import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';

// function hello () {
//     console.log('hello imooc, i love react');
// }


// function WrapperHello (fn) {
//     return function () {
//         console.log('before say hello');
//         fn();
//         console.log('after say hello');
//     }
// }

// hello = WrapperHello(hello);
// hello();

// 属性代理
function WrapperHello (Comp) {
    class WrapComp extends Component {
        render () {
            return (
                <div>
                    <p>这是HOC高阶组件特有的元素</p>
                    <Comp { ...this.props }></Comp>
                </div>
            )
        }
    }
    return WrapComp;
}

@WrapperHello
class Hello extends Component {
    render () {
        return <h2>hello chengyudeng I love React & Redux</h2>
    }
}

// Hello = WrapperHello(Hello)

@connect(
    state => state.user,
    { login }
)
export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register () {
        this.props.history.push('/register');
    }
    handleChange (key, val) {
        this.setState({
            [key]: val
        });
    }
    handleLogin () {
        this.props.login(this.state);
    }
    render () {
        return (
            <div>
                <Hello></Hello>
                { this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={ this.props.redirectTo } /> : null } 
                <Logo />
                <WingBlank>
                    <List>
                        { this.props.msg ? <p className="error-msg">{ this.props.msg }</p> : null }
                        <InputItem
                            onChange={ v => this.handleChange('user', v) }
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={ v => this.handleChange('pwd', v) }
                            type='password'
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={ this.handleLogin } type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={ this.register } type='primary'>注册</Button>
                    </WingBlank>
            </div>
        );
    }
}