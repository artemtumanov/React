import { getGistsRequest, getGistSuccess, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "../store/gists/actions"


describe('gist reducer action', ()=>{
    it('Request action test', ()=>{
        const result = getGistsRequest();

        expect(result).toEqual({ type: GET_GISTS_REQUEST });
    });
    it('Success action test', ()=>{
        const result = getGistSuccess('gist');
        expect(result).toEqual({ type: GET_GISTS_SUCCESS, payload: 'gist' });
    })
})