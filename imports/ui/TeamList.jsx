import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'material-ui';
import {ListItem} from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import {red500} from 'material-ui/styles/colors';
// import TeamList from './TeamList.jsx';
class TeamList extends Component {

    constructor(props, context){
        super(props, context);

        this.deletePlayer = this.deletePlayer.bind(this)
        this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
    }

    deletePlayer(playerId){
        Meteor.call('deletePlayer', playerId, (err) => {
            if (err) {
                alert('something went wrong: ' + err.reason);
            } else {
                console.log('Player deleted');
            }
        });
    }

    render() {

        const adf = (
            <ActionDeleteForever    hoverColor={red500}
                                    onClick={()=>this.deletePlayer(this.props.player._id)}/>
        )

        return (
            <ListItem   key={this.props.player._id}
                        leftAvatar={<Avatar src="player.jpg"/>}
                        onClick={()=>this.updateCurrentPlayer(this.props.player)}
                        primaryText={this.props.player.name}
                        rightIcon={adf}/>
        );
    }

    updateCurrentPlayer(player){
        this.props.updateCurrentPlayer(player);
    }
}

// TeamList.defaultProps = {};
// TeamList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// TeamList.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default TeamList;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class TeamList extends Component {

    // this.state = {
    //     'whatever':{}
    // }

    // handleSubmit = (e) => {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    // render() {
    //     return (
    //         <div className="team-list">
    //         </div>
    //     );
    // }
// }


