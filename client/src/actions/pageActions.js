import { pageTypes } from '../constants/actionTypes';


export const setPageData = (data) => ({ type: pageTypes.setPageData, data });

export const togglePageDisplay = () => ({ type: pageTypes.togglePageDisplay });

export const setInitial = () => ({ type: pageTypes.setInitial })


