import typeToReducer from 'type-to-reducer';
import { actions } from './actions';

const initialState = {
    data: {
      homePageData: [],
      searchData: [],
    },
}

const homeReducer = typeToReducer({
  [actions.HOME_DATA]: {
    PENDING: state => {
        return Object.assign({},state,{ ui: { loading: true }})
      },
      FULFILLED: (state,action) => {
        return {
          ...state,
          data: {
            ...state.data,
            homePageData: action.payload.data,
          }
        }
      },
      REJECTED: (state,action) => {
        return Object.assign({}, state, { error: action.payload.response.data.message, ui: { loading: false } })
      },
  },
  [actions.GET_SEARCH]: (state, action) => {
      const newArray = action.payload.key === 'address' ? state.data.addressData : state.data.homePageData;
      const key = action.payload.key === 'address' ? 'nationality' : 'title';
      return {
         ...state,
         data: {
            ...state.data,
            searchData: newArray.filter(val => 
                {
                    if(val[key]) {
                        return val[key].toLowerCase().includes(action.payload.value)
                }
                })
         }
      }
  },
  [actions.GET_SPACE_ADDRESS]: {
    PENDING: state => {
        return Object.assign({},state,{ ui: { loading: true }})
      },
      FULFILLED: (state,action) => {
        return {
          ...state,
          data: {
            ...state.data,
            addressData: action.payload.data,
          }
        }
      },
      REJECTED: (state,action) => {
        return Object.assign({}, state, { error: action.payload.response.data.message, ui: { loading: false } })
      },
  },
}, initialState);

export default homeReducer;
