const prefx = "hinotori_";

type authInfo = {
  access_token?: string | null;
  session?: string | null;
};

const storage = {
  getAuthInfo: () => {
    return JSON.parse(
      window.localStorage.getItem(`${prefx}token`) as string
    ) as authInfo;
  },

  setAuthInfo: (authInfo: authInfo) => {
    window.localStorage.setItem(`${prefx}token`, JSON.stringify(authInfo));
  },

  clearAuthInfo: () => {
    window.localStorage.removeItem(`${prefx}token`);
  },
};

export default storage;
