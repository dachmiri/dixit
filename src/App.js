import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import { sizing } from '@material-ui/system';
const cardDeckSize = 27
const cardsInHand = 6
class Game extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            cards: Array(cardDeckSize).fill(Card)
        };
    }
    renderCard(i)
    {
        /*let BG = './cardsImg/' + i + '.jpg';
         import(BG).then(image=>{this.cards[i].image = image});
         console.log(BG);
         return(
             this.state.cards[i]
         );*/
        let BG = './cardsImg/' + i + '.jpg';
        return(
            <button className={"card"} style={{backgroundImage: `url(${BG})`}}></button>
        );
    }
    render() {
        return (
            <Grid container alignItems={"stretch"} justify={"space-between"} direction={"column"} className={"big-grid"}>
                <Grid item container alignItems={"center"} direction={"column"}>
                    <Grid item><h1>You are the storyteller</h1></Grid>
                    <Grid item><h2>pick a card</h2></Grid>
                </Grid>
                <Grid item>
                    <p>players</p>
                </Grid>
                <Grid item container direction={"row"} justify={"space-around"} alignItems={"center"}>
                    <Grid item>{this.renderCard(0)}</Grid>
                    <Grid item>{this.renderCard(1)}</Grid>
                    <Grid item>{this.renderCard(2)}</Grid>
                    <Grid item>{this.renderCard(3)}</Grid>
                    <Grid item>{this.renderCard(4)}</Grid>
                    <Grid item>{this.renderCard(5)}</Grid>
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
          inUse: false,
          used: false
        };
    }

}

export default Game;
