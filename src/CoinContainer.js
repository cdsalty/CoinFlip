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
  flipCoin() {
    let newCoin = choice(this.props.coins); //currCoinSide will now be equal to newCoin
    // TWO DIFFERENT WAYS TO SETSTATE:
    /*Option 1: */
    // this.setState(st => {
    //   let newState = {
    //     ...st, 
    //     currCoinSide: newCoin,
    //     numOfFlips: st.numOfFlips + 1
    //   }
    //   if(newCoin.side === "heads"){
    //     newState.numOfHeads += 1;
    //   } else{
    //     newState.numOfTails += 1;
    //   }
    //   return newState;
    // }); 

    this.setState(st => {
      return {
        currCoinSide: newCoin,
        numOfFlips: st.numOfFlips += 1, // MUST CALL (ST.) and then numOfFlips. Keep leaving off state
        numOfHeads: st.numOfHeads + (newCoin.side === "heads" ? 1 : 0),
        numOfTails: st.numOfTails + (newCoin.side === "tails" ? 1 : 0)
      }
    })
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