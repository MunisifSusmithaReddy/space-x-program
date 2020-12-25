import api from './api';
const actions = {
    HOME_DATA: 'HOME_DATA',
    GET_SEARCH: 'GET_SEARCH',
    GET_SPACE_ADDRESS: 'GET_SPACE_ADDRESS',
}

const actionCreators = {
    getSpaceXData: () => {
        return {
            type: 'HOME_DATA',
            payload: api.getSpaceXData(),
        }
    },
    getSearchData: (value, key) => {
        debugger;
        return {
            type: 'GET_SEARCH',
            payload: {value, key},
        }
    },
    getSpaceAddress: () => {
        return {
            type: 'GET_SPACE_ADDRESS',
            payload: api.getSpaceXAddress(),
        }
    }
}

export { actions, actionCreators };