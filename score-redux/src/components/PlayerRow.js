import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { removePlayer } from '../actions';
import ScoreButton from '../components/ScoreButton';
import ScoreCardSection from '../components/ScoreCardSection';

class ScoreRow extends React.Component {
  removePlayer() {
    const { gameScore, player } = this.props;
    const newScore = _.cloneDeep(gameScore);
    delete newScore[player];
    this.props.removePlayer(newScore);
  }

  render() {
    const { textStyle } = styles;
    const { player } = this.props;

    return (
      <View>
        <ScoreCardSection>
          <Text style={textStyle}>{player}</Text>
          <ScoreButton color="red" onPress={() => { this.removePlayer(); }}>
            X
        </ScoreButton>
        </ScoreCardSection>
      </View >
    );
  }
}


const styles = {
  textStyle: {
    fontSize: 20,
    justifyContent: 'flex-end'
  }
};

const mapStateToProps = ({ score }) => {
  const { gameScore } = score;
  return { gameScore };
};

export default connect(mapStateToProps, { removePlayer })(ScoreRow);
