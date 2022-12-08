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

function NormalSortTable() {
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
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <NormalTable.StyledTable>
      <NormalTable.StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <NormalTable.StyledHeadTR key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <NormalTable.StyledTH key={header.id}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
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

const Template: ComponentStory<typeof NormalSortTable> = (args) => {
  return <NormalSortTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: NormalSortTable,
  title: 'React/Table/Normal Style/Sort by Columns',
} as ComponentMeta<typeof NormalSortTable>;
