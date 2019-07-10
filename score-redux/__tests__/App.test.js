import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('basic tests', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
