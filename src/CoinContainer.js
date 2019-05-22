import React, { Component } from 'react';

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
    }
  }

  render(){
    return(
      <div className = "CoinContainer">
        <h2>Flip The Coin</h2>
        <p>Out of {this.state.numOfFlips} flips, the coin has landed on heads {this.state.numOfHeads} times and tails {this.state.numOfTails}</p>
      </div>
    );
  }
}
export default CoinContainer;