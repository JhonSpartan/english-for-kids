import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
// import { Checkbox } from './checkbox';

const ColumnHiding = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);


  const tableInstance = useTable({
    columns,
    data
  });

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    footerGroups,
    rows, 
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;

  return (
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

export default ColumnHiding;