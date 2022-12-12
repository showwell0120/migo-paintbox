/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { NormalTable } from '@paintbox/react-table';
import { defaultData, selectColumns } from './basic-data';

function NormalSelectTable() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns: selectColumns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <small>
        {Object.keys(rowSelection).length} of{' '}
        {table.getCoreRowModel().rows.length} Total Rows Selected
      </small>
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
    </>
  );
}

const Template: ComponentStory<typeof NormalSelectTable> = (args) => {
  return <NormalSelectTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: NormalSelectTable,
  title: 'React/Table/Normal Style/Select Rows',
} as ComponentMeta<typeof NormalSelectTable>;
