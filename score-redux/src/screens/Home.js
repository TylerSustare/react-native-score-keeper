import React from 'react';
import { connect } from 'react-redux';
import { Alert, ScrollView, View } from 'react-native';
import { updatePlayerChanged, scoreChanged } from '../actions';
import { BannerAd, Button, Card, Header, CardSection } from '../components/common';
import ScoreRow from '../components/ScoreRow';

class Home extends React.Component {
    resetScore() {
        Alert.alert(
            'Reset Score?',
            'Make everyone\'s score zero?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => this.newGameScore() },
            ],
            { cancelable: false }
        );
    }

    newGameScore() {
        const keys = Object.keys(this.props.gameScore);
        const newScore = {};
        keys.forEach(element => {
            newScore[element] = 0;
        });
        this.props.scoreChanged(newScore);
    }

    render() {
        const { gameScore, navigation } = this.props;
        const players = Object.keys(gameScore);

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {/* <Header headerText="Game Score" /> */}
                    <Card>
                        {players.map((n) => (<ScoreRow navigation={navigation} player={n} key={n} />))}
                    </Card>
                    <Card>
                        <CardSection />
                        <CardSection>
                            <Button onPress={() => this.resetScore()}>Reset Score</Button>
                            <Button onPress={() => navigation.navigate('Settings')}>Edit Players</Button>
                        </CardSection>
                        <CardSection />
                    </Card>
                </ScrollView>
                <BannerAd />
            </View>
        );
    }
}

const mapStateToProps = ({ score }) => {
    const { gameScore } = score;
    return { gameScore };
};

export default connect(mapStateToProps, { scoreChanged, updatePlayerChanged })(Home);
