import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';

const FilteringTable = () => {

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
  } = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters, 
  useGlobalFilter
  );

  const { globalFilter } = state;

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
                <th {...column.getHeaderProps()} key={index}>{column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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
    </React.Fragment>
  )
}

export default FilteringTable;