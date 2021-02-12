import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

import {  useHistory } from 'react-router-dom';

export const getMeme = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeme();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMeme = (meme) => async (dispatch) => {
  try {
    console.log("idhar problem hahi bro " + meme.name);
    const { data } = await api.createMeme(meme);
    console.log(`From the create api you data is : ${meme} retrun data is : ${data}`)
    console.log("It can happen before it also!!!");
    dispatch({ type: CREATE, payload: data });
    useHistory().push("/");
  } catch (error) {
    console.log(error);
  }
};

export const updateMeme = (id, meme) => async (dispatch) => {
  try {
    const { data } = await api.updateMeme(id, meme);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
