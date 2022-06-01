// import { fromat } from 'date-fns';

import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    Footer: 'Id',
    disableFilters: true
  },
  {
    Header: 'Number',
    accessor: 'list_number',
    Footer: 'Number',
    disableFilters: true
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    Footer: 'First Name'
  },
  {
    Header: 'Last name',
    accessor: 'last_name',
    Footer: 'Number'
  },
  {
    Header: 'Group name',
    accessor: 'group_name',
    Footer: 'Last name'
  },
  {
    Header: 'Parent name',
    accessor: 'parent_name',
    Footer: 'Parent name'
  }
]