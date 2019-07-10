import { SCORE_CHANGED, ADD_PLAYER_TEXT_CHANGED, REMOVE_PLAYER, UPDATE_PLAYER, UPDATE_SCORE } from '../actions/types';

const INITIAL_STATE = {
  gameScore: {},
  addPlayerText: '',
  updatePlayer: '',
  updateScore: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCORE_CHANGED:
      return { ...state, addPlayerText: '', updateScore: '', gameScore: action.payload };

    case ADD_PLAYER_TEXT_CHANGED:
      return { ...state, addPlayerText: action.payload };

    case REMOVE_PLAYER:
      return { ...state, gameScore: action.payload };

    case UPDATE_PLAYER:
      return { ...state, updatePlayer: action.payload };

    case UPDATE_SCORE:
      return { ...state, updateScore: action.payload };

    default:
      return state;
  }
};
