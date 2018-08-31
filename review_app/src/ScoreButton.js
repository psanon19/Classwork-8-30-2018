import React, {Component} from "react";
import TwoPlayerScoreKeeper from './TwoPlayerScoreKeeper'


class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClicks: 0
        };
    }

    buttonTotalClicks = () => {
        this.setState({
            totalClicks: (1+this.state.totalClicks)

        })
    };


    render() {

        return (<h1 id="parent_div" className="ScoreButton">
            <span>Exersise 9</span>
            <span><TwoPlayerScoreKeeper/></span>
            <span><TwoPlayerScoreKeeper/></span>
            <span>
                <label>Score Button:</label>
                    <br/><br/>
                {this.state.totalClicks}
                    <br/><br/>
                <button onClick={this.buttonTotalClicks}>Total Clicks</button>
            </span>
            <hr/>
        </h1>);

    }
}

export default ScoreButton;