import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { createRootNavigator } from './src/router';

export default class App extends React.Component {
    render() {
        // get navigation ready
        const Layout = createRootNavigator();
        // get redux ready
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}
