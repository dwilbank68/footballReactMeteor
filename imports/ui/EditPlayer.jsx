import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Players} from '../api/players';

// import Edit from './Edit.jsx';
class Edit extends Component {

    constructor(props, context){
        super(props, context);
        // this.state = {
        //     whatever:{}
        // }
        this.editPlayer = this.editPlayer.bind(this)
    }


    editPlayer(e) {
        e.preventDefault();
        let player = {
            ballManipulation: this.refs.ballManipulation.value,
            blockingAbilities: this.refs.blockingAbilities.value,
            duelTackling: this.refs.duelTackling.value,
            fieldCoverage: this.refs.fieldCoverage.value,
            gameStrategy: this.refs.gameStrategy.value,
            _id: this.props.currentPlayer._id,
            kickingAbilities: this.refs.kickingAbilities.value,
            name: this.refs.name.value,
            notes: this.refs.notes.value,
            passingAbilities: this.refs.passingAbilities.value,
            playmakingRisks: this.refs.playmakingRisks.value,
            team: this.refs.team.value,
            createdAt: new Date(),
            owner: Meteor.userId()
        };
        Meteor.call('updatePlayer', player, (err) => {
            if (err) {
                alert('something went wrong: ' + err.reason);
            } else {
                alert('Player updated');
                this.showTeamStats();
            }
        });
    }

    render() {
        const currentPlayer = this.props.currentPlayer;
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.editPlayer}>
                    <h3>Add a new player</h3>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="name" ref="name"
                                   type="text" className="validate" defaultValue={currentPlayer.name}/>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="team" ref="team"
                                   type="text" className="validate" defaultValue={currentPlayer.team}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Ball Manipulation</h5>
                            <select className="browser-default" ref="ballManipulation"
                                    defaultValue={currentPlayer.ballManipulation}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Kicking Abilities</h5>
                            <select className="browser-default" ref="kickingAbilities"
                                    defaultValue={currentPlayer.kickingAbilities}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Passing Abilities</h5>
                            <select className="browser-default" ref="passingAbilities"
                                    defaultValue={currentPlayer.passingAbilities}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Duel Tackling</h5>
                            <select className="browser-default" ref="duelTackling"
                                    defaultValue={currentPlayer.duelTackling}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Field Coverage</h5>
                            <select className="browser-default" ref="fieldCoverage"
                                    defaultValue={currentPlayer.fieldCoverage}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Blocking Abilities</h5>
                            <select className="browser-default" ref="blockingAbilities"
                                    defaultValue={currentPlayer.blockingAbilities}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Game Strategy</h5>
                            <select className="browser-default" ref="gameStrategy"
                                    defaultValue={currentPlayer.gameStrategy}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Playmaking Risks</h5>
                            <select className="browser-default" ref="playmakingRisks"
                                    defaultValue={currentPlayer.playmakingRisks}>
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="submit">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }

    showTeamStats(){
        this.props.showTeamStats()
    }

}

// Edit.defaultProps = {};
// Edit.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Edit.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Edit;
