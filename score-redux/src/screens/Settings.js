import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { scoreChanged, addPlayerChanged } from '../actions';
import { BannerAd, Button, Card, Header, Input, CardSection } from '../components/common';
import PlayerRow from '../components/PlayerRow';

class Settings extends React.Component {
  /* pop up ads */
  // componentWillMount() {
  // FacebookAds.InterstitialAdManager.showAd(PLACEMENT_ID)
  // .then(didClick => { console.log(didClick); })
  // .catch(error => console.error(error));
  // }

  setScore() {
    const { addPlayerText, gameScore } = this.props;
    if (!_.isEmpty(addPlayerText)) {
      this.props.scoreChanged({ ...gameScore, [addPlayerText]: 0 });
    }
  }

  navigate() {
    return this.props.navigation.navigate('Game');
  }

  renderStartButton() {
    const players = Object.keys(this.props.gameScore);
    if (players.length > 0) {
      return (
        <CardSection>
          <Button onPress={this.navigate.bind(this)}>Start Playing!</Button>
        </CardSection>
      );
    }
  }

  render() {
    const players = Object.keys(this.props.gameScore);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Card>
            <CardSection>
              <Input
                label="Player"
                placeholder="Tap Here to Update Name"
                onChangeText={this.props.addPlayerChanged.bind(this)}
                value={this.props.addPlayerText}
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.setScore.bind(this)}>Add Player To Game</Button>
            </CardSection>
          </Card>
          <Card>
            {players.length > 0 ? (<Header headerText="Players In Game" />) : null}
            {players.map((n) => (<PlayerRow player={n} key={n}>{n}</PlayerRow>))}
            {this.renderStartButton()}
          </Card>
        </ScrollView>
        <BannerAd />
      </View>
    );
  }
}

const mapStateToProps = ({ score }) => {
  const { gameScore, addPlayerText } = score;
  return { gameScore, addPlayerText };
};

export default connect(mapStateToProps, { scoreChanged, addPlayerChanged })(Settings);
