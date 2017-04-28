import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Radar} from 'react-chartjs-2';
import {Divider} from 'material-ui';


// import TeamStats from './TeamStats.jsx';
class TeamStats extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }


    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    render() {

        const players = this.props.players;
        const numPlayers = players.length;

        const ballManipulation = Math.round((players.reduce((ballManipulation, player) => {
            return ballManipulation + player.ballManipulation;
        }, 0) / (3*numPlayers)) * 100);

        const kicking = Math.round((players.reduce((kicking, player) => {
            return kicking + player.kickingAbilities;
        }, 0) / (3*numPlayers)) * 100);

        const passing = Math.round((players.reduce((passing, player) => {
            return passing + player.passingAbilities;
        }, 0) / (3*numPlayers)) * 100);

        const duelTackling = Math.round((players.reduce((duelTackling, player) => {
            return duelTackling + player.duelTackling;
        }, 0) / (3*numPlayers)) * 100);

        const fieldCoverage = Math.round((players.reduce((fieldCoverage, player) => {
            return fieldCoverage + player.fieldCoverage;
        }, 0) / (3*numPlayers)) * 100);

        const blocking = Math.round((players.reduce((blocking, player) => {
            return blocking + player.blockingAbilities;
        }, 0) / (3*numPlayers)) * 100);

        const strategy = Math.round((players.reduce((strategy, player) => {
            return strategy + player.gameStrategy;
        }, 0) / (3*numPlayers)) * 100);

        const risks = Math.round((players.reduce((risks, player) => {
            return risks + player.playmakingRisks;
        }, 0) / (3*numPlayers)) * 100);

        const defense = Math.round((duelTackling + fieldCoverage + blocking + strategy + risks)/5);
        const offense = Math.round((kicking + ballManipulation + passing + fieldCoverage + strategy + risks)/6);
        const total = Math.round((kicking + ballManipulation + passing + fieldCoverage + strategy + risks + duelTackling+blocking)/8)

        const data = {
            labels: ['Ball Manipulation','Kicking','Passing','Duel/Tackling','Field Coverage','Blocking','Strategy','Risks'],
            datasets: [
                {
                    label: '% Of Max Possible',
                    backgroundColor: 'rgba(143,202,249,0.2)',
                    borderColor: 'rgba(12,71,161,1)',
                    pointBackgroundColor: 'rgba(12,71,161,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(12,71,161,1)',
                    data: [ballManipulation, kicking, passing, duelTackling,
                        fieldCoverage, blocking, strategy, risks]
                }
            ]
        };

        return (
            <div>
                <h2>Team Stats</h2>
                <div className="row">
                    <div className="col s12 m7">
                        <Radar  data={data}
                                width={500}
                                height={500}
                                option={
                                {maintainAspectRatio: false}
                                } />
                    </div>
                    <div className="col s12 m5">
                        <h4>Scores In % Of Max Possible</h4>
                        <Divider/>
                        <h4>Team's Offense: {offense}%</h4>
                        <h4>Team's Defense: {defense}%</h4>
                        <h4>Team's Total: {total}%</h4>
                        <Divider/>
                        <h4>Number of players: {numPlayers}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

// TeamStats.defaultProps = {};
// TeamStats.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// TeamStats.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default TeamStats;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class TeamStats extends Component {

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
    //         <div className="team-stats">
    //         </div>
    //     );
    // }
// }