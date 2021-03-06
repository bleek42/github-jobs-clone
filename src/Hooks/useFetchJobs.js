import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQ: 'make-req',
    GET_DATA: 'get-data',
    ERROR: 'error'
}


const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.MAKE_REQ:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] };
        default:
            return state
    }
}

export const useFetchJobs = (params, page) => {

    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true },);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_REQ })
        axios.get(BASE_URL, {
            params: { markdown: true, page: page, ...params }
        })
            .then(res => {
                dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
            })
        return () => {
            cancelToken.cancel();
        }
    }, [params, page])


    return state;
};