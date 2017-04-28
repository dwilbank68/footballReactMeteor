import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, blue900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin:4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    button: {
        margin: 12
    }
};
// import Player from './Player.jsx';
class Player extends Component {

    constructor(props, context){
        super(props, context);
        // this.state = {
        //     whatever:{}
        // }
       this.showEditForm = this.showEditForm.bind(this)
    }


    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }

    render() {

        const p = this.props.player;
        const def = p.duelTackling + p.fieldCoverage + p.blockingAbilities + p.gameStrategy + p.playmakingRisks;
        const off = p.kickingAbilities + p.gameStrategy + p.ballManipulation + p.passingAbilities + p.fieldCoverage + p.playmakingRisks;
        const tot = off + p.duelTackling + p.blockingAbilities
        const overlayObj = (
            <CardTitle title={p.name}
                       subtitle={`Offense: ${off} - Defense: ${def} - Total: ${tot}`} />
        )
        return (
            <Card>
                <CardMedia  overlay={overlayObj}>
                    <img src="player.jpg" />
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.ballManipulation}
                            </Avatar>
                            Ball Manipulation
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.kickingAbilities}
                            </Avatar>
                            Kicking Abilities
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.passingAbilities}
                            </Avatar>
                            Passing Abilities
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.duelTackling}
                            </Avatar>
                            Duel Tackling
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.fieldCoverage}
                            </Avatar>
                            Field Coverage
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.blockingAbilities}
                            </Avatar>
                            Blocking Abilities
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.gameStrategy}
                            </Avatar>
                            Game Strategy
                        </Chip>
                        <Chip   backgroundColor={blue200}
                                style={styles.chip} >
                            <Avatar size={32}
                                    color={blue200}
                                    backgroundColor={blue900} >
                                {p.playmakingRisks}
                            </Avatar>
                            Playmaking Risks
                        </Chip>
                    </div>
                </CardText>
                <CardActions>
                    <RaisedButton   label="Edit Player"
                                    labelPosition="before"
                                    onClick={this.showEditForm}
                                    style={styles.button} >

                    </RaisedButton>
                </CardActions>
            </Card>
        );
    }

    showEditForm() {
        this.props.showEditForm();
    }

}

export default Player;