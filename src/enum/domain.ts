const { REACT_APP_ENV } = process.env;

// 微信 thirdpartyId
export const THIRD_PARTY_ID: { [key: string]: number } = {
  test: 31,
  uat: 31,
  prod: 17,
};

// passport域名
export const PASSPORT_DOMAIN: { [key: string]: string } = {
  test: '//passport.test.ximalaya.com',
  uat: '//passport.uat.ximalaya.com',
  prod: '//passport.ximalaya.com',
};

/* 微信默认授权url */
export const SILENT_AUTH_URL = `${PASSPORT_DOMAIN[REACT_APP_ENV || 'prod']}/thirdparty-h5/v1/auth/${
  THIRD_PARTY_ID[REACT_APP_ENV || 'prod']
}/wx/baseAuthorizeAndRedirect`;
