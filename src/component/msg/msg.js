import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
    state => state
)
export default class Msg extends Component {
    render () {
        const msgGroup = {};
        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
        });
        console.log(msgGroup);
        // 按照聊天用户分组, 根据chatid
        return (
            <div>消息列表</div>
        );
    }
}