import { Reducer } from 'redux';



export const UPDATE_GRID = 'UPDATE_GRID' 

export type Grid = Number[][];

export const gridReducer: Reducer<any, any> = (
  state,
  action
) => {
  switch (action.type) {
    case UPDATE_GRID: {
      return {
        ...state,
        grid: action.payload
      }
    }
  }
}