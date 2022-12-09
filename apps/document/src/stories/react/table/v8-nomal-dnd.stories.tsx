/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  Row,
} from '@tanstack/react-table';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { NormalTable, DraggableRowProps } from '@paintbox/react-table';

import { defaultData, Person, dndColumns } from './basic-data';

function DraggableRow<RowType>({
  row,
  reorderRow,
}: DraggableRowProps<RowType>) {
  const [, dropRef] = useDrop({
    accept: 'row',
    drop: (draggedRow: Row<RowType>) => reorderRow(draggedRow.index, row.index),
  });

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => row,
    type: 'row',
  });

  return (
    <NormalTable.StyledBodyTRRef
      ref={previewRef} //previewRef could go here
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <NormalTable.StyledTDRef ref={dropRef}>
        <button ref={dragRef}>🟰</button>
      </NormalTable.StyledTDRef>
      {row.getVisibleCells().map((cell, index) => {
        if (index === 0) {
          return null;
        }
        return (
          <NormalTable.StyledTD key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </NormalTable.StyledTD>
        );
      })}
    </NormalTable.StyledBodyTRRef>
  );
}

function NormalDnDTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns: dndColumns,
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
            <DraggableRow<Person>
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
