import React from 'react';
import { View, Text } from 'react-native';
import { FacebookAds } from 'expo';
import { PLACEMENT_ID } from '../../constants';

const BannerAd = () => {
    /**
     * I realized that this was a recurring problem. For some reason, removing the <Facebook.BannerView /> component,
     * running the app (so it works) then adding the component back in fixed it every time.
     */
    return (
        <View>
            <FacebookAds.BannerView
                placementId={PLACEMENT_ID}
                type="large"
                onPress={() => { }}
                onError={(err) => console.log('error', err)}
            />
            <Text />
            <Text />
        </View>
    );
};

export { BannerAd };
