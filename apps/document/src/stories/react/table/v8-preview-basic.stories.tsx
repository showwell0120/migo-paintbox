/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { PreviewTable } from '@paintbox/react-table';
import { defaultData, columns } from './basic-data';

function PreviewBasicTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <PreviewTable.StyledTable>
      <PreviewTable.StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <PreviewTable.StyledHeadTR key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <PreviewTable.StyledTH key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </PreviewTable.StyledTH>
            ))}
          </PreviewTable.StyledHeadTR>
        ))}
      </PreviewTable.StyledHead>
      <PreviewTable.StyledBody>
        {table.getRowModel().rows.map((row) => (
          <PreviewTable.StyledBodyTR key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <PreviewTable.StyledTD key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </PreviewTable.StyledTD>
            ))}
          </PreviewTable.StyledBodyTR>
        ))}
      </PreviewTable.StyledBody>
    </PreviewTable.StyledTable>
  );
}

const Template: ComponentStory<typeof PreviewBasicTable> = (args) => {
  return <PreviewBasicTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: PreviewBasicTable,
  title: 'React/Table/Preview Style/Basic',
} as ComponentMeta<typeof PreviewBasicTable>;
