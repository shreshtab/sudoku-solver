import React from 'react';

interface GridProps {
  grid: Number[][]
};

const SudokuGrid: React.FC<GridProps> = ({ grid }) => {
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