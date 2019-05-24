import React, { Component } from 'react';
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}  
    ]
  };
  constructor(props){
    super(props);
    this.state = {
      currCoinSide: null,
      numOfFlips: 0,
      numOfHeads: 0,
      numOfTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // flip coin needs to: create a random number and assign to a varaible. This will either be heads or tails
    /* determine heads or tails; then assign it to a varaible. */
  flipCoin(){
    const newCoin = choice(this.props.coins); // calling choice and running the two coins' inside, to determine heads or tails
    this.setState(st => {  // st represents the current state we are GOING TO CHANGE. 
      return {
        currCoinSide: newCoin, // the currentCoinSide is now the value of 'newCoin,' created in this function
        numOfFlips: st.numOfFlips + 1, // must pass in state somewhere... it's a parameter in the function
      }
    });
  }
  handleClick(e) {
    this.flipCoin();
  };

  render(){
    return(
      <div className = "CoinContainer">
        <h2>Flip The Coin</h2>
        <button onClick = {this.handleClick}>Click to Flip!</button>
        <p>Out of {this.state.numOfFlips} flips, the coin has landed on heads {this.state.numOfHeads} times and tails {this.state.numOfTails}</p>
      </div>
    );
  }
}
export default CoinContainer;