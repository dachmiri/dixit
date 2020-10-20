import React from 'react';
import './Board.css';
import {Grid} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const cardDeckSize = 27
const cardsInHand = 6
const playersInGame = 3 //Will come from server later

class Game extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            cards: Array(cardDeckSize),
            players: Array(playersInGame)
        };

        this.initPlayers()
        this.initCardDeck()

        console.log("players:");
        console.log(this.state.players)
    }
    initPlayers() {
        for (let index = 0; index < playersInGame; index++)
        {
            var tempNames = ["Anna", "Noa", "Maya"];
            var tempIcons = ["icons/pig.png", "icons/bunny.png", "icons/fox.png"];
            const p = new Player({
                id: index,
                pName: tempNames[index],
                icon: tempIcons[index]
            });
            this.state.players.push(p)
        }
    }
    initCardDeck() {
        var tempCards = []
        for (let index = 0; index < cardDeckSize; index++)
        {
            const c = <Card id={index} image={"temp"} />
            tempCards.push(c);
        }
        this.state.cards = tempCards;
    }

    onCardClick(i)
    {
        console.log('The card  was clicked. ' + i);
    }

    renderCard(i)
    {
        let cardImg = 'cardsImg/' + i + '.jpg';
        return(
            <Button
                onClick={()=>{this.onCardClick(i)}}
                className={"card"}
                style={{backgroundImage: `url(${cardImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            </Button>
        );
    }
    renderPlayer(i)
    {
        return (
            <Grid item container direction={"row"} spacing={3} alignItems={"center"}>
                <Grid item style={{width: "40%", height:"100%"}}>
                    <Button
                        disableRipple={true}
                        style={{backgroundImage: `url(${this.state.players[i].state.icon})`,
                            backgroundSize: "cover",
                            Width: "30%",
                            Height: "30%",
                            minHeight:"50px",
                            minWidth:"50px",
                            padding:"10px"}}>
                    </Button>
                </Grid>
                <Grid item style={{width: "20%", height:"20%", paddingLeft:"5%",margin:"5%"}}><p>{this.state.players[i].state.pName}</p> </Grid>
                <Grid item style={{width: "10%", height:"20%"}}><p>{this.state.players[i].state.score}</p> </Grid>
            </Grid>
        )
    }
    render() {
        return (
            <Grid container alignItems={"stretch"} justify={"space-between"} direction={"column"} className={"big-grid"} spacing={5}>
                <Grid item container alignItems={"center"} direction={"column"} >
                    <Grid item><h1>You are the storyteller</h1></Grid>
                    <Grid item><h2>pick a card</h2></Grid>
                </Grid>
                <Grid item container className={"players"} direction={"column"} style={{width: "15%"}} justify={"space-between"}>
                    <Grid item className={"SinglePlayerSpace"}>{this.renderPlayer(3)}</Grid>
                    <Grid item className={"SinglePlayerSpace"}>{this.renderPlayer(4)}</Grid>
                    <Grid item className={"SinglePlayerSpace"}>{this.renderPlayer(5)}</Grid>
                </Grid>
                <Grid item container direction={"row"} justify={"space-around"} alignItems={"center"} className={"CardsSpace"}>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(0)}</Grid>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(1)}</Grid>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(2)}</Grid>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(3)}</Grid>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(4)}</Grid>
                    <Grid item className={"SingleCardSpace"}>{this.renderCard(5)}</Grid>
                </Grid>
            </Grid>
        );
    }
}

class Card extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            image: props.image,
        };
    }

}
class Player extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            pName: props.pName,
            score: 0,
            icon: props.icon,
        };
    }
}

export default Game;