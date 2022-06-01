import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

const SortingTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    footerGroups,
    rows, 
    prepareRow 
  } = useTable({
    columns,
    data
  }, 
  useSortBy
  );

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>{column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' desc' : ' asc') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
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
  )
}

export default SortingTable;