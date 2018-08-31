import React, {Component} from "react";

class TwoPlayerScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Score: 0,
            totalClicks: 0
        };
    }

    buttonClickP1 = () => {
        this.setState({
            player1Score: this.state.player1Score + 1,
            totalClicks: (1+this.state.player1Score)

        })
    };


    render() {

        return (

            <h1 id="parent_div" className="ScoreButton">
                <span className="ScoreButton" id="child_div_1">

                    <label>Players:</label>
                    <br/><br/>
                    {this.state.player1Score}
                    <br/><br/>
                    <button onClick={this.buttonClickP1}>+1</button>
                </span>

            </h1>);
    }
}

export default TwoPlayerScoreKeeper;