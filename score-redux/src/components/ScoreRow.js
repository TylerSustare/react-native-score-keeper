import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from 'react-native-vector-icons';
import { scoreChanged, updatePlayerChanged } from '../actions';
import ScoreButton from '../components/ScoreButton';
import ScoreCardSection from '../components/ScoreCardSection';

const format = require('format-number');

class ScoreRow extends React.Component {
    setScore(number) {
        const { gameScore, player } = this.props;
        if (gameScore[player] === undefined) {
            return this.props.scoreChanged({ ...gameScore, [player]: number });
        }
        this.props.scoreChanged({ ...gameScore, [player]: gameScore[player] += number });
    }

    updateScore() {
        const { player, navigation } = this.props;
        this.props.updatePlayerChanged(player);
        navigation.navigate('Modal');
    }

    formatNumber(score) {
        return format()(score);
    }

    renderScore() {
        const { textStyle } = styles;
        const { player, gameScore } = this.props;
        if (!gameScore[player]) {
            return (<Text style={textStyle}>0</Text>);
        }
        return (<Text style={textStyle}>{this.formatNumber(gameScore[player])}</Text>);
    }

    render() {
        const { textStyle } = styles;
        const { gameScore, player } = this.props;

        return (
            <View>
                <ScoreCardSection>
                    <Text style={textStyle}>{player}</Text>
                    {this.renderScore()}
                    <ScoreButton color="#007aff" onPress={this.updateScore.bind(this)}>
                        <FontAwesome name="pencil" size={30} color="blue" />
                    </ScoreButton>
                </ScoreCardSection>
            </View>
        );
    }
}


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'flex-end'
    }
};

const mapStateToProps = ({ score }) => {
    const { gameScore } = score;
    return { gameScore };
};

export default connect(mapStateToProps, { scoreChanged, updatePlayerChanged })(ScoreRow);
