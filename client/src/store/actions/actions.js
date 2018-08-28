import axios from 'axios';

export const CHECKAUTH = 'CHECK_AUTH';

export const checkAuth = (res) => {
    return {
        type: CHECKAUTH,
        payload: res.data
    }
}

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch(checkAuth(res));
}
