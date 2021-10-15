import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GridComponentProps, SudokuBoard } from '../models/SudokuGrid';
import { IAppState } from '../models';

const SudokuGrid: React.FC<GridComponentProps> = () => {
  const [grid, setGrid] = useState<SudokuBoard | null>(null);

  const sudokuGrid = useSelector((state: IAppState) => state.gridState.grid);
  const [crow, ccol] = useSelector((state: IAppState) => state.gridState.current);

  useEffect(() => {
    setGrid(sudokuGrid)
  },[sudokuGrid]);

  const createCell = (value: number, row: number, col: number, cRow: number, cCol: number) => {
    const current = cRow >= 0 && cCol>= 0 && row === cRow && col === cCol;
    return (
      <div className={`cell ${current? 'current' : ''}`}>
        {value}
      </div>
    )
  }

  return (
    <div className='container'>
      <table>
        <tbody>
          {grid && grid.length > 0 ? grid.map((row, rowIdx) => {
          return (
          <tr>
            {row.map((val, colIdx) => {
              return (
                <td>
                  {createCell(val, rowIdx, colIdx, crow, ccol)}

                  {/* <div className={`cell ${crow === rowIdx && ccol === colIdx ? 'current' : ''}`}>
                    {val}
                  </div>                     */}
                </td>
              )
            })}
            </tr>)
          }): <></>}
        </tbody>
      </table>
    </div>
  )

}

export default SudokuGrid;