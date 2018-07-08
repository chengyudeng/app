import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
    state => state
)
export default class User extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <p>用户中心页</p>
            </div>
        );
    }
}