import {
  SCORE_CHANGED,
  ADD_PLAYER_TEXT_CHANGED,
  REMOVE_PLAYER,
  UPDATE_SCORE,
  UPDATE_PLAYER
} from './types';

/* Score */
export const scoreChanged = score => {
  return {
    type: SCORE_CHANGED,
    payload: score
  };
};

export const addPlayerChanged = text => {
  return {
    type: ADD_PLAYER_TEXT_CHANGED,
    payload: text.substring(0, 25)
  };
};

export const removePlayer = score => {
  return {
    type: REMOVE_PLAYER,
    payload: score
  };
};

export const updatePlayerChanged = player => {
  return {
    type: UPDATE_PLAYER,
    payload: player
  };
};

export const updateScoreChanged = score => {
  return {
    type: UPDATE_SCORE,
    payload: score
  };
};
