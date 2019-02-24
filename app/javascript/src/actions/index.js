import { Get } from '../services'

export async function updateDashboard(dispatch, page) {
  const response = await Get('?page='+page);
  dispatch({type: 'updateDashboard', payload: response });
}

export async function search(dispatch, mag) {
  const response = await Get('/search?mag='+mag);
  dispatch({type: 'updateDashboard', payload: response });
}