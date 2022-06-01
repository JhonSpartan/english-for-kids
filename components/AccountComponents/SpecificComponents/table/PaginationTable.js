import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
// import './table.css'; 

const PaginationTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state, 
    prepareRow 
  } = useTable({
    columns,
    data
  },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <React.Fragment>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cells, index) => (
                  <td {...cells.getCellProps()} key={index}>{cells.render('Cell')}</td>
                ))}
              </tr>
            )
          })}        
        </tbody>
      </table>
      <div>
        <span> Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page {' '}
          <input 
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{width: '50px'}}  
          />
        </span>
        <select 
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {
            [10, 25, 50].map(pageSize => (
              <option 
                key={pageSize}
                value={pageSize}
              >
                Show {pageSize}
              </option>
            ))
          }
        </select>
        <button
          onClick={() => gotoPage(0)} 
          disabled={!canPreviousPage}
        >{'<<'}</button>  
        <button 
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >Previous</button>
        <button 
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >Next</button>
        <button
          onClick={() => gotoPage(pageCount - 1)} 
          disabled={!canNextPage}
        >{'>>'}</button>   
      </div>
    </React.Fragment>
  )
}

export default PaginationTable;