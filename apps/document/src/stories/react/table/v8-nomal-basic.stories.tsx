import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { NormalTable } from '@paintbox/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
];

function NormalBasicTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <NormalTable.StyledTable>
      <NormalTable.StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <NormalTable.StyledHeadTR key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <NormalTable.StyledTH key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </NormalTable.StyledTH>
            ))}
          </NormalTable.StyledHeadTR>
        ))}
      </NormalTable.StyledHead>
      <NormalTable.StyledBody>
        {table.getRowModel().rows.map((row) => (
          <NormalTable.StyledBodyTR key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <NormalTable.StyledTD key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </NormalTable.StyledTD>
            ))}
          </NormalTable.StyledBodyTR>
        ))}
      </NormalTable.StyledBody>
    </NormalTable.StyledTable>
  );
}

const Template: ComponentStory<typeof NormalBasicTable> = (args) => {
  return <NormalBasicTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: NormalBasicTable,
  title: 'React/Table/Normal Style/Case 1 - Basic',
} as ComponentMeta<typeof NormalBasicTable>;
