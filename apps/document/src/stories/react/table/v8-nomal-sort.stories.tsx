/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';

import { NormalTable } from '@paintbox/react-table';
import { defaultData, columns } from './basic-data';

export interface NormalSortTableProps {
  onSort?: (sort: SortingState) => void;
  sortByClient?: boolean;
}

function NormalSortTable({
  onSort,
  sortByClient = false,
}: NormalSortTableProps) {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    ...(sortByClient && { getSortedRowModel: getSortedRowModel() }),
  });

  React.useEffect(() => {
    onSort?.(sorting);
  }, [sorting, onSort]);

  return (
    <NormalTable.StyledTable>
      <NormalTable.StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <NormalTable.StyledHeadTR key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <NormalTable.SortStyledTH header={header} />
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

const Template: ComponentStory<typeof NormalSortTable> = (args) => {
  return <NormalSortTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onSort(s) {
    console.log(s);
  },
  sortByClient: true,
};

export default {
  component: NormalSortTable,
  title: 'React/Table/Normal Style/Sort by Columns',
} as ComponentMeta<typeof NormalSortTable>;
