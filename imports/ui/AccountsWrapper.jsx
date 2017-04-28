import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

import PropTypes from 'prop-types';

// import AccountsWrapper from './AccountsWrapper.jsx';
class AccountsWrapper extends Component {

    componentDidMount() {
        this.view = Blaze.render(
            Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container)
        );
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }


    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    render() {
        return (
            <span ref="container"/>
        );
    }
}

// AccountsWrapper.defaultProps = {};
// AccountsWrapper.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// AccountsWrapper.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default AccountsWrapper;
