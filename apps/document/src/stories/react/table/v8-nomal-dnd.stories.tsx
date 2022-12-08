/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { NormalTable } from '@paintbox/react-table';

import { defaultData, Person } from './basic-data';

const columns: ColumnDef<Person>[] = [
  {
    id: 'dnd',
    header: 'DnD',
    cell: () => null,
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: (info) => info.getValue(),
  },
];

function NormalDnDTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
    data.splice(
      targetRowIndex,
      0,
      data.splice(draggedRowIndex, 1)[0] as Person
    );
    setData([...data]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
            <NormalTable.DraggableRow<Person>
              key={row.id}
              row={row}
              reorderRow={reorderRow}
            />
          ))}
        </NormalTable.StyledBody>
      </NormalTable.StyledTable>
    </DndProvider>
  );
}

const Template: ComponentStory<typeof NormalDnDTable> = (args) => {
  return <NormalDnDTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: NormalDnDTable,
  title: 'React/Table/Normal Style/Sort Rows by DnD',
} as ComponentMeta<typeof NormalDnDTable>;
