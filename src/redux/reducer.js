import { CAMPSITES } from '../shared/campsites.js';
import { COMMENTS } from '../shared/comments.js';
import { PARTNERS } from '../shared/partners.js';
import { PROMOTIONS } from '../shared/promotions.js';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};