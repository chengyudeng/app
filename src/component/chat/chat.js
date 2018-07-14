import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux';

const socket = io('ws://localhost:9093');

@connect(
    state => state,
    { getMsgList, sendMsg, recvMsg }
)
export default class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = { text: '', msg: [] };
    }
    componentDidMount () {
        this.props.getMsgList();
        this.props.recvMsg();
        // socket.on('revcmsg', (data) => {
        //     this.setState({
        //         msg: [ ...this.state.msg, data.text ]
        //     });
        // });
    }
    handleSubmit () {
        // socket.emit('sendMsg', { text: this.state.text });
        // this.setState({ text: '' });
        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;
        this.props.sendMsg({ from, to, msg });
        this.setState({ text: '' });
    }
    render () {
        console.log(this.props);
        return (
            <div>
                { this.state.msg.map(v => {
                    return <p key={ v }>{ v }</p>
                }) }
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={ this.state.text }
                            onChange={ v => {
                                this.setState({ text: v });
                            } }
                            extra={ <span onClick={ () => this.handleSubmit() }>发送</span> }
                        ></InputItem>
                    </List>
                </div>
            </div>
        );
    }
}