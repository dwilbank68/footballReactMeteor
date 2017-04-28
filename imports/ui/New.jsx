import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Players} from '../api/players';

// import Form from './Form.jsx';
class Form extends Component {

    constructor(props, context){
        super(props, context);
        // this.state = {
        //     whatever:{}
        // }
       this.submitPlayer = this.submitPlayer.bind(this)
    }


    submitPlayer(e) {
        e.preventDefault();
        let player = {
            ballManipulation: this.refs.ballManipulation.value,
            blockingAbilities: this.refs.blockingAbilities.value,
            duelTackling: this.refs.duelTackling.value,
            fieldCoverage: this.refs.fieldCoverage.value,
            gameStrategy: this.refs.gameStrategy.value,
            kickingAbilities: this.refs.kickingAbilities.value,
            name: this.refs.name.value,
            notes: this.refs.notes.value,
            passingAbilities: this.refs.passingAbilities.value,
            playmakingRisks: this.refs.playmakingRisks.value,
            team: this.refs.team.value,
            createdAt: new Date(),
            owner: Meteor.userId()
        };
        Meteor.call('insertPlayer', player, (err) => {
            if (err) {
                alert('something went wrong: ' + err.reason);
            } else {
                alert('Player added');
                browserHistory.push('/');
            }
        });
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitPlayer}>
                    <h3>Add a new player</h3>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="name" ref="name" type="text" className="validate"/>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="team" ref="team" type="text" className="validate"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Ball Manipulation</h5>
                            <select className="browser-default" ref="ballManipulation" >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Kicking Abilities</h5>
                            <select className="browser-default" ref="kickingAbilities" >
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
                            <select className="browser-default" ref="passingAbilities" >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Duel Tackling</h5>
                            <select className="browser-default" ref="duelTackling" >
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
                            <select className="browser-default" ref="fieldCoverage" >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Blocking Abilities</h5>
                            <select className="browser-default" ref="blockingAbilities" >
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
                            <select className="browser-default" ref="gameStrategy" >
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvement</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="input-field col s6">
                            <h5>Playmaking Risks</h5>
                            <select className="browser-default" ref="playmakingRisks" >
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
}

// Form.defaultProps = {};
// Form.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Form.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Form;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class Form extends Component {

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
    //         <div className="form">
    //         </div>
    //     );
    // }
// }