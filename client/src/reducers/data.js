import { dataTypes } from '../constants/actionTypes';

export const initialState = {
    categories: { firstCategory: [{ id: 1, title: "smth", text: "smth" }, { id: 2, title: "smth2", text: "smth2" }], secondCategory: [{ id: 3, title: "smth", text: "smth" }, { id: 4, title: "smth2", text: "smth2" }] }
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case dataTypes.setPageData: {
            const { title, text } = action.data;
            const newPageData = { title, text, innerPageisOpened: true };
            return newPageData
        }

        default:
            return state;
    }
};

export default data;
