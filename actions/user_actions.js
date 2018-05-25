import { FacebookAds } from 'expo';
import API from '../data/API';

import {
  LOGIN_USER,
  REGISTER_USER
} from './types';

function setDataUser(user) {
    return {
        type : LOGIN_USER,
        isLogin: true,
        data: user
    };
};

// export const selectKeyIndex = payload => ({ type: SELECT_KEY_INDEX, payload });
export function loginUser(username, password){
    return function (dispatch, getState) {
        return API.loginUser(username, password)
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              dispatch(setDataUser(result)); 
            })
            .catch((err) => console.log(err));
    };
};

// let expirationDate;

export const registerUser = () => {
  // if (!expirationDate || new Date() > expirationDate) {
  //   expirationDate = new Date(
  //     new Date().getTime() + (2 * 60 * 1000)
  //   );
  //   FacebookAds.InterstitialAdManager.showAd('328225604270934_328677554225739')
  //     .then(console.log('Interstitial Ad Shown'))
  //     .catch(err => console.log('Interstitial Ad Error', err));
  // }
  // return { type: CLOSE_CHORDS_MODAL, payload: false };
};
