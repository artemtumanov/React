import { API_URL_PUBLIC } from "../../constant/gists";

export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE';

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
});

export const getGistSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});

export const getGistsFaluire = (error) => ({
    type: GET_GISTS_FAILURE,
    payload: error
});

export const getAllGists = () => async (dispatch) => {    
    dispatch(getGistsRequest);
    try{            
        const response = await fetch(API_URL_PUBLIC);
        if(!response.ok){
            throw new Error(`Requestq failed with status ${response.status}`);
        }            
        const result = await response.json();        
        dispatch(getGistSuccess(result));
    }
    catch (error) {       
        dispatch(getGistsFaluire(error.message));
    }    
};
