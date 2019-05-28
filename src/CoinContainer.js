import React, { Component } from 'react';
import Coin from './Coin'
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
      currCoin: null,
      numOfFlips: 0,
      numOfHeads: 0,
      numOfTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // flip coin needs to: create a random number and assign to a varaible. This will either be heads or tails
    /* determine heads or tails; then assign it to a varaible. */
  flipCoin() {
    let newCoin = choice(this.props.coins); // calling the function choice and running the coins array on it
    this.setState(st => {
      return {
    /*
    approaching 'setState' (if/else vs. ternary expression)
    
    Option 1:
      let newState = {
        ...st, 
        currCoin: newCoin,
        numOfFlips: st.numOfFlips + 1
      }
      if(newCoin.side === "heads"){
        newState.numOfHeads += 1;
      } else{
        newState.numOfTails += 1;
      }
      return newState;
    }); 
    */
      // OPTION 2: TERNARY EXPRESSION  
        currCoin: newCoin,
        numOfFlips: st.numOfFlips += 1, // MUST CALL (ST.) and then numOfFlips. Keep leaving off state
        numOfHeads: st.numOfHeads + (newCoin.side === "heads" ? 1 : 0),
        numOfTails: st.numOfTails + (newCoin.side === "tails" ? 1 : 0)
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
        {this.state.currCoin && <Coin info = {this.state.currCoin} />}
        {/* 'Without this.state.currCoin &&' I get an error that it can't read imgSrc of null */}
        {/* this checks if the left side is true, meaning that it's not 'null'; prevents the coin starting off on specific image */}
        {/* if it is null, it won't do anything */}
        <p>
          Out of {this.state.numOfFlips} flips, the coin has landed on heads {this.state.numOfHeads} times and tails {this.state.numOfTails}
        </p>
      </div>
    );
  }
}
export default CoinContainer;