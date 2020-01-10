import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';
import { getUserAvatarLink } from '../../utils/getAvatarProps';
import urls from '../../utils/urls';
import Cookies from 'universal-cookie';
import { isProduction } from '../../utils/helperFunctions';

const cookies = new Cookies();

const defaultState = {
  email: '',
  accessToken: '',
  uuid: '',
  isAdmin: null,
  apiKeys: {},
  visited: true,
  userSkills: [],
  isLocalEnv: process.env.REACT_APP_LOCAL_ENV === 'true',
  avatarImg: `${urls.API_URL}/getAvatar.png`,
  avatarImgThumbnail: `${urls.API_URL}/getAvatar.png`,
  showCookiePolicy: false,
  captchaConfig: {
    login: true,
    signUp: true,
    changePassword: true,
  },
};

const { emailId, uuid, loggedIn, visited, showCookiePolicy } = cookies.getAll();
const cookiesAppValues = {
  email: emailId,
  uuid,
  accessToken: loggedIn,
  location: {
    countryCode: '',
    countryName: '',
  },
  visited: typeof visited === 'undefined' ? false : JSON.parse(visited),
  showCookiePolicy:
    typeof showCookiePolicy === 'undefined'
      ? true
      : JSON.parse(showCookiePolicy),
  avatarImg: `${
    urls.API_URL
  }/getAvatar.png?access_token=${loggedIn}&q=${new Date().getTime()}`,
  avatarImgThumbnail: `${
    urls.API_URL
  }/getAvatar.png?access_token=${loggedIn}&q=${new Date().getTime()}&getThumbnail=true`,
};

export default handleActions(
  {
    [actionTypes.APP_GET_API_KEYS](state, { payload }) {
      const {
        keys,
        requestPayload: { type: apiType = 'public' },
      } = payload;
      if (apiType === 'user' && isProduction()) {
        return { ...state };
      }
      let keyValueObj = {};
      
      if(key) {
        for (let [key, value] of Object.entries(keys)) {
          keyValueObj = { ...keyValueObj, [key]: value.value };
        }
      }

      return {
        ...state,
        apiKeys: { ...state.apiKeys, ...keyValueObj },
      };
    },
    [actionTypes.APP_GET_CAPTCHA_CONFIG](state, { payload }) {
      const { captchaConfig } = payload;
      let captchaObj = {};
      for (let [key, value] of Object.entries(captchaConfig)) {
        captchaObj = { ...captchaObj, [key]: value === 'true' };
      }
      return {
        ...state,
        captchaConfig: captchaObj,
      };
    },
    [actionTypes.APP_GET_LOGIN](state, { payload }) {
      const { uuid, accessToken, requestPayload } = payload;
      const email = requestPayload.login;
      return {
        ...state,
        uuid,
        accessToken,
        email: accessToken ? email : '',
        avatarImgThumbnail: `${
          urls.API_URL
        }/getAvatar.png?access_token=${accessToken}&q=${new Date().getTime()}&getThumbnail=true`,
      };
    },
    [actionTypes.APP_LOGOUT](state, { payload }) {
      return {
        ...defaultState,
      };
    },
    [actionTypes.APP_GET_ADMIN](state, { payload }) {
      const { showAdmin: isAdmin } = payload;
      return {
        ...state,
        isAdmin,
      };
    },
    [actionTypes.APP_SET_VISITED_STATE](state, { payload }) {
      return {
        ...state,
        visited: true,
      };
    },
    [actionTypes.APP_SET_COOKIE_POLICY](state, { payload }) {
      return {
        ...state,
        showCookiePolicy: false,
      };
    },
    [actionTypes.APP_GET_USER_SKILLS](state, { payload }) {
      let skillsData = [];
      for (let i of payload.filteredData) {
        skillsData.push({
          skillName: i.skillName,
          type: 'public',
          status: 'active',
          ...i,
        });
      }
      const userSkills = skillsData.filter(item => {
        if (item.authorEmail === state.email) {
          return item;
        }
        return null;
      });
      return {
        ...state,
        userSkills,
      };
    },
    [actionTypes.APP_UPDATE_USER_AVATAR](state, { payload }) {
      return {
        ...state,
        avatarImg: getUserAvatarLink(),
        avatarImgThumbnail: getUserAvatarLink({ getThumbnail: true }),
      };
    },
  },
  {
    ...defaultState,
    ...cookiesAppValues,
  },
);
