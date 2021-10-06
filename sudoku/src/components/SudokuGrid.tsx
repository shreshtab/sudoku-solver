import React from 'react';

import { GridComponentProps } from '../models/SudokuGrid';

const SudokuGrid: React.FC<GridComponentProps> = ({ grid }) => {
  return (
    <div className='container'>
      <table>
        <tbody>
          {grid.map((row) => {
            return (
            <tr>
              {row.map((column) => {
                return (
                  <td>
                    <div className='cell'>
                      {column}
                    </div>                    
                  </td>
                )
              })}
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )

}

export default SudokuGrid;