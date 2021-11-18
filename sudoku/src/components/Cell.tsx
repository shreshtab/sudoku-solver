import React from 'react';

import { CellComponentProps } from '../models/SudokuGrid';

const Cell: React.FC<CellComponentProps> = ({value, oldValue, row, col, currentRow, currentCol, solved}) => {

  const getStyles = (value: number, oldValue: number, solved: boolean) => {
    if (oldValue > 0) return '';
    if (value > 0 && solved) return 'solved';
    if (value === 0) return 'pendingsolve';
    if (value > 0) return 'solving';
  }

  const current = currentRow >= 0 && currentCol >= 0 && row === currentRow && col === currentCol;
  const styles = getStyles(value, oldValue, solved);

  return (
    <div className={`cell ${styles} ${current? 'current' : ''}`}>
        {value >= 0 ? value : ''}
    </div>
  )

}

export default Cell;
