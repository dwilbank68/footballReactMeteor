import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {createContainer} from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Divider, List, RaisedButton} from 'material-ui';

import TeamList from './TeamList';
import TeamStats from './TeamStats';
import Player from './Player';
import Edit from './EditPlayer';
import AccountsWrapper from './AccountsWrapper';

let tempPlayer = {
    ballManipulation: 1,
    blockingAbilities: 2,
    duelTackling: 1,
    fieldCoverage: 0,
    gameStrategy: 1,
    kickingAbilities: 2,
    name: "Temp player",
    notes: "temp player only",
    passingAbilities: 0,
    playmakingRisks: 3,
    team: "Lynda",
    createdAt: new Date(),
    owner: Meteor.userId()
};

import {Link} from 'react-router';

import {Players} from '../api/players';

class App extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            currentPlayer: tempPlayer,
            showEditPlayer: false
        }
       this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
       this.showEditForm = this.showEditForm.bind(this)
       this.showTeamStats = this.showTeamStats.bind(this)
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar title="Soccer Application"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            showMenuIconButton={false}>
                        <AccountsWrapper/>
                    </AppBar>
                    <div className="row">
                        <div className="col s12 m7">
                            <Player player={this.state.currentPlayer}
                                    showEditForm={this.showEditForm}/>
                        </div>

                        <div className="col s12 m5">
                            <h2>Team List</h2>
                            <Link to="/new" className="waves-effect waves-light btn">
                                Add player
                            </Link>
                            <Divider/>
                            <List>
                                {this.renderPlayers()}
                            </List>
                            <Divider/>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <br/>
                                <Divider/>
                                {this.showForm()}
                                <Divider/>
                            </div>
                        </div>

                    </div>
                </div>

            </MuiThemeProvider>
        );
    }

    renderPlayers(){
        return this.props.players.map((player) => {
            return (
                <TeamList   key={player._id}
                            player={player}
                            updateCurrentPlayer={this.updateCurrentPlayer}/>
            )
        })
    }

    showEditForm(){
        this.setState({
            showEditPlayer: true
        })
    }

    showForm(){
        if (this.state.showEditPlayer) {
            return (
                <Edit   currentPlayer={this.state.currentPlayer}
                        showTeamStats={this.showTeamStats}/>
            )
        } else {
            return (
                <TeamStats players={this.props.players}/>
            )
        }
    }

    showTeamStats(){
        this.setState({
            showEditPlayer: false
        })
    }

    updateCurrentPlayer(player){
        this.setState({
            currentPlayer: player
        })
    }

}

App.propTypes = {
    players: PropTypes.array.isRequired
}

const mapToProps = (props) => {
    Meteor.subscribe('players');
    const user = Meteor.userId();
    // const {binId} = props.params;
    return {
        players: Players.find({owner: user}, {sort:{name:1}}).fetch(),
        // meteorCall: Meteor.call
    }
}

export default createContainer( mapToProps, App );
