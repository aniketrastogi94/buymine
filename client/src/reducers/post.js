import {ADD_POST,DELETE_POST, GET_POSTS,POST_ERROR,GET_POST} from '../actions/types';
const intialState={
    posts:[],
    post:null,
    loading:true,
    error:{}
};

export default function(state=intialState,action){
    const {type,payload}=action;
    switch(type){
        case GET_POST:
            return {
                ...state,
                post:payload,
                loading:false
            }
        case GET_POSTS:
            return {
                ...state,
                posts:payload,
                loading:false
            };
        case POST_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        case DELETE_POST:
            return {
                ...state,
                posts:state.posts.filter(post=> post._id!==payload),
                loading:false
            }
        case ADD_POST:
            return {
                ...state,
                posts:[payload,...state.posts],
                loading:false
            }
        default:
            return state;
    }
}