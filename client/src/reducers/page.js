import { pageTypes } from '../constants/actionTypes';

export const initialState = {
    pageData: { title: null, text: null },
    innerPageisOpened: false,
};

const page = (state = initialState, action) => {
    switch (action.type) {
        case pageTypes.setPageData: {
            const { title, text } = action.data;
            const newPageData = {  title, text, innerPageisOpened: true };
            return newPageData
        }
        case pageTypes.setInitial: {
            console.log(initialState);
            return initialState
        }
        case pageTypes.togglePageDisplay: {
            const newPageData = { ...initialState.pageData, innerPageisOpened: !initialState.innerPageisOpened };
            return newPageData
        }
        default:
            return state;
    }
};

export default page;
