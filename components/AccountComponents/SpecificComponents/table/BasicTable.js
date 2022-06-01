import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';

const BasicTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter
    }
  }, []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    footerGroups,
    rows, 
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  } = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters, 
  useGlobalFilter,
  useSortBy,
  usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <React.Fragment>
      <GlobalFilter 
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>{column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' desc' : ' asc') : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
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
        <tfoot>
          {footerGroups.map((footerGroup, index) => (
            <tr {...footerGroup.getFooterGroupProps()} key={index}>
              {footerGroup.headers.map((column, index) => (
                <td {...column.getFooterProps} key={index}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
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

export default BasicTable;