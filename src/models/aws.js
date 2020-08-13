export default {

  namespace: 'aws',

  state: {  

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    history.listen(({pathname}) => {
        if (pathname === '/'){
          
        }
    })
    },
  },

  effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
      },
  },

  reducers: {

  }
};
  