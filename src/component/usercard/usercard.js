import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WingBlank, WhiteSpace, Card } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

@withRouter
export default class UserCard extends Component {
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    handleClick (v) {
        this.props.history.push(`/chat/${v._id}`);
    }
    render () {
        const Header = Card.Header;
        const Body = Card.Body;
        return (
            <WingBlank>
                <WhiteSpace />
                { this.props.userlist.map(v => (
                    v.avatar ? (
                        <Card 
                            key={ v._id } 
                            onClick={ () => this.handleClick(v) }
                        >
                        <Header
                            title={ v.user }
                            thumb={ require(`../img/${v.avatar}.png`) }
                            extra={ <span>{ v.title }</span> }
                        ></Header>
                        <Body>
                            { v.type === 'boss' ? <div>公司: { v.company }</div> : null }
                            { v.desc.split('\n').map(v => (
                                <div key={v}>{ v }</div>
                            )) }
                            { v.type === 'boss' ? <div>薪资: { v.money }</div> : null }
                        </Body>
                    </Card>) : null
                )) }
            </WingBlank>
        );
    }
}