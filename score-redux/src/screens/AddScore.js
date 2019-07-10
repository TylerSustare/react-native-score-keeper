import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { scoreChanged, updateScoreChanged } from '../actions';
import { Button, Card, CardSection, Header, Input } from '../components/common';

class AddScore extends React.Component {
  onAddButtonPress() {
    const { updateScore } = this.props;
    const score = parseFloat(updateScore);
    this.changeScore(score);
  }

  onSubtractButtonPress() {
    const { updateScore } = this.props;
    const score = parseFloat(updateScore);
    this.changeScore(0 - score);
  }

  changeScore(score) {
    const { gameScore, navigation, updatePlayer } = this.props;
    if (gameScore[updatePlayer]) {
      this.props.scoreChanged({ ...gameScore, [updatePlayer]: (gameScore[updatePlayer] += score) });
    } else {
      this.props.scoreChanged({ ...gameScore, [updatePlayer]: (gameScore[updatePlayer] = score) });
    }
    navigation.goBack();
  }

  render() {
    const { updatePlayer } = this.props;

    return (
      <View>
        {/* <Header headerText={`Update ${updatePlayer}`} /> */}
        <Card>
          <CardSection>
            <Input
              label="Score"
              keyboardType="numeric"
              placeholder="Tap Here to Update Score"
              onChangeText={this.props.updateScoreChanged.bind(this)}
              value={this.props.updateScore}
            />
          </CardSection>
          <CardSection>
            <Button color="red" onPress={this.onSubtractButtonPress.bind(this)}> Subtract </Button>
            <Button onPress={this.onAddButtonPress.bind(this)}>Add</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start'
  },
};


const mapStateToProps = ({ score }) => {
  const { gameScore, updateScore, updatePlayer } = score;
  return { gameScore, updateScore, updatePlayer };
};

export default connect(
  mapStateToProps,
  { scoreChanged, updateScoreChanged }
)(AddScore);
