import React from 'react';
import { useSelector } from 'react-redux';
import { GridComponentProps } from '../models/SudokuGrid';
import { IAppState } from '../models';
import Cell from './Cell';

const SudokuGrid: React.FC<GridComponentProps> = () => {
  const sudokuGrid = useSelector((state: IAppState) => state.gridState.grid);
  const originalGrid = useSelector((state: IAppState) => state.gridState.originalGrid);
  const [crow, ccol] = useSelector((state: IAppState) => state.gridState.current);
  const solved = useSelector((state: IAppState) => state.gridState.solveCompleted);

  return (
    <div className='grid-container'>
      <table>
        <tbody>
          {sudokuGrid && sudokuGrid.length > 0 ? sudokuGrid.map((row, rowIdx) => {
          return (
          <tr key={`${rowIdx}`}>
            {row.map((val, colIdx) => {
              return (
                <td key={`${rowIdx}-${colIdx}`}>
                  <Cell value={val} oldValue={originalGrid[rowIdx][colIdx]} row={rowIdx} col={colIdx} currentRow={crow} currentCol={ccol} solved={solved} />
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