import {
    LOADING_HERO_PICTURES,
    LOADED_HERO_PICTURES
} from './types'
// import {dispatch} from 'redux-thunk'
import axios from 'axios'

const loadingHeroPictures = () => {
    return {
        type: LOADING_HERO_PICTURES
    }
}

const loadedHeroPictures = image => {
    return {
        type: LOADED_HERO_PICTURES,
        image
    }
}

export const loadHeroPictures = (url) => {
    return dispatch => {
        dispatch(loadingHeroPictures());

        axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
        .then((res)=> {
            dispatch(loadedHeroPictures(res.data.photos[0]))
        })
        .catch((err) => {console.log(`error: ${err}`)})
    }
}