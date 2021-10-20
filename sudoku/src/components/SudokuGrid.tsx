import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GridComponentProps, SudokuBoard } from '../models/SudokuGrid';
import { IAppState } from '../models';

const SudokuGrid: React.FC<GridComponentProps> = () => {
  const sudokuGrid = useSelector((state: IAppState) => state.gridState.grid);
  const originalGrid = useSelector((state: IAppState) => state.gridState.originalGrid);
  const [crow, ccol] = useSelector((state: IAppState) => state.gridState.current);
  const solved = useSelector((state: IAppState) => state.gridState.solveCompleted);

  const getStyles = (value: number, oldValue: number, solved: boolean) => {
    if (oldValue > 0) return '';
    if (oldValue === 0 && value > 0 && solved) return 'solved';
    if (oldValue === 0 && value === 0) return 'pendingsolve';
    if (oldValue === 0 && value > 0) return 'solving';
  }

  const createCell = (value: number, oldValue: number, row: number, col: number, currentRow: number, currentCol: number) => {
    const current = currentRow >= 0 && currentCol>= 0 && row === currentRow && col === currentCol;
    const styles = getStyles(value, oldValue, solved);
    return (
      <div className={`cell ${current? 'current' : ''} ${styles}`}>
        {value >= 0 ? value : ''}
      </div>
    )
  }

  return (
    <div className='container'>
      <table>
        <tbody>
          {sudokuGrid && sudokuGrid.length > 0 ? sudokuGrid.map((row, rowIdx) => {
          return (
          <tr key={`${rowIdx}`}>
            {row.map((val, colIdx) => {
              return (
                <td key={`${rowIdx}-${colIdx}`}>
                  {createCell(val, originalGrid[rowIdx][colIdx], rowIdx, colIdx, crow, ccol)}
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