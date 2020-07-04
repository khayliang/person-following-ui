import {detection_indices_sub, target_present_sub} from "../roslib/rossub"
import {choose_target_srv, clear_target_srv} from "../roslib/rossrv"
import ROSLIB from "roslib"

export default {

    namespace: 'ros_state',
  
    state: {
      string:"hello",
      detection_indices: [],
      stream_url: "",
      selected_target: null
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(({pathname}) => {
          if (pathname === '/'){
            detection_indices_sub.subscribe((message) => {
              dispatch({
                type: 'save_detection_indices',
                payload: message.data
              })
            })
            //subscribe to rosbridge websocket
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
      save_detection_indices(state, action) {
        state = { ...state, detection_indices: action.payload }
        return state;
      },
      save_target_present(state, action) {
        state = { ...state, target_present: action.payload }
        return state;
      },
      target_selected(state, action) {
        let target_indice = action.payload
        let request = new ROSLIB.ServiceRequest({
          target: target_indice
        })

        let selected_target = null
        const choose_target_callback = (result) => {
          if(result.success){
            selected_target = target_indice
            state = { ...state, selected_target: action.payload }
            console.log("target selected")
          }
          else{
            console.log("target not selected")
          }
        }
        
        choose_target_srv.callService(request, choose_target_callback)
        return state
      },
      target_clear(state) {
        let request = new ROSLIB.ServiceRequest({
          clear: true
        })

        let selected_target = null
        const clear_target_callback = (result) => {
          if(result.success){
            state = { ...state, selected_target: null }
            console.log("target cleared")
          }
          else{
            console.log("nothing to clear")
          }
        }
          clear_target_srv.callService(request, clear_target_callback)
          return state
      }
    },
  
  };
  