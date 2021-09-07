import React from 'react';
import './App.css';

const board = [ [0, 4, 3, 0, 8, 0, 2, 5, 0],
                [6, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 9, 4],
                [9, 0, 0, 0, 0, 4, 0, 7, 0],
                [0, 0, 0, 6, 0, 8, 0, 0, 0],
                [0, 1, 0, 2, 0, 0, 0, 0, 3],
                [8, 2, 0, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 3, 4, 0, 9, 0, 7, 1, 0] ];

const App = () => {

  return (
    <div className="App">
      Hello from the App component!
      <div className='container'>
        <table>
          <tbody>
            {board.map((row) => {
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
      
    </div>
  );
}

export default App;
