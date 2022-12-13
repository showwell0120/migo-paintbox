/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
  Row,
} from '@tanstack/react-table';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { CaretIcons, ControlIcons } from '@paintbox/react-foundation';
import { NormalTable, DraggableRowProps } from '@paintbox/react-table';
import {
  titleData,
  allFeatColumns,
  SeasonResponse,
  EpisodeResponse,
  TitleResponse,
} from './title-data';
import { NormalSortTableProps } from './v8-nomal-sort.stories';

function EpisodeRows({ episodes }: { episodes: EpisodeResponse[] }) {
  return (
    <>
      {episodes.map((episode) => (
        <NormalTable.StyledBodyTR key={episode.episode_id}>
          {/* select */}
          <NormalTable.StyledTD></NormalTable.StyledTD>
          {/* expander */}
          <NormalTable.StyledTD></NormalTable.StyledTD>
          {/* episode name */}
          <NormalTable.StyledTD colSpan={4} style={{ paddingLeft: '2.2rem' }}>
            <span>{episode.episode_name}</span>
          </NormalTable.StyledTD>
          {/* type */}
          <NormalTable.StyledTD>Episode</NormalTable.StyledTD>
          {/* season */}
          <NormalTable.StyledTD></NormalTable.StyledTD>
          {/* episodes */}
          <NormalTable.StyledTD>{`EP${episode.episode_number}`}</NormalTable.StyledTD>
          {/* published, expiration, dpcp */}
          <NormalTable.StyledTD colSpan={3}></NormalTable.StyledTD>
          {/* mds */}
          <NormalTable.StyledTD>
            <span>{`${episode?.deliver_rate?.toFixed(2) ?? '0'} %`}</span>
          </NormalTable.StyledTD>
          {/* size */}
          <NormalTable.StyledTD>{episode.file_size}</NormalTable.StyledTD>
          {/* list price, discount price, distribution */}
          <NormalTable.StyledTD colSpan={3}></NormalTable.StyledTD>
          {/* programming */}
          <NormalTable.StyledTD>switch</NormalTable.StyledTD>
          {/* dnd */}
          <NormalTable.StyledTD></NormalTable.StyledTD>
        </NormalTable.StyledBodyTR>
      ))}
    </>
  );
}

function SeasonRows({ seasons }: { seasons: SeasonResponse[] }) {
  const [epExanded, setEpExpended] = React.useState<boolean>(false);

  const handleEpExpanded = () => setEpExpended(!epExanded);

  return (
    <>
      {seasons.map((season) => {
        return (
          <>
            <NormalTable.StyledBodyTR key={season.season_id}>
              {/* select */}
              <NormalTable.StyledTD></NormalTable.StyledTD>
              {/* expander */}
              <NormalTable.StyledTD></NormalTable.StyledTD>
              {/* season expander + season name */}
              <NormalTable.StyledTD colSpan={4}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span onClick={handleEpExpanded}>
                    {epExanded ? (
                      <CaretIcons.DownFill />
                    ) : (
                      <CaretIcons.RightFill />
                    )}
                  </span>
                  <span>{season.season_name}</span>
                </div>
              </NormalTable.StyledTD>
              {/* type */}
              <NormalTable.StyledTD>Season</NormalTable.StyledTD>
              {/* season */}
              <NormalTable.StyledTD>{`S${season.season_number}`}</NormalTable.StyledTD>
              {/* episodes */}
              <NormalTable.StyledTD>
                {season.episode_count}
              </NormalTable.StyledTD>
              {/* published */}
              <NormalTable.StyledTD>
                {season.publish_timestamp}
              </NormalTable.StyledTD>
              {/* expiration */}
              <NormalTable.StyledTD>{season.license_end}</NormalTable.StyledTD>
              {/* dpcp */}
              <NormalTable.StyledTD>{`${season.licensor}/${season.cp_code}`}</NormalTable.StyledTD>
              {/* mds */}
              <NormalTable.StyledTD>
                <span>{`${season?.deliver_rate?.toFixed(2) ?? '0'} %`}</span>
              </NormalTable.StyledTD>
              {/* size */}
              <NormalTable.StyledTD>{season.file_size}</NormalTable.StyledTD>
              {/* list price & discount price */}
              <NormalTable.StyledTD colSpan={2}></NormalTable.StyledTD>
              {/* distribution */}
              <NormalTable.StyledTD>switch</NormalTable.StyledTD>
              {/* programming */}
              <NormalTable.StyledTD>switch</NormalTable.StyledTD>
              {/* dnd */}
              <NormalTable.StyledTD></NormalTable.StyledTD>
            </NormalTable.StyledBodyTR>
            {epExanded && season.episodes.length && (
              <EpisodeRows episodes={season.episodes} />
            )}
          </>
        );
      })}
    </>
  );
}

function DraggableRow({ row, reorderRow }: DraggableRowProps<TitleResponse>) {
  const [, dropRef] = useDrop({
    accept: 'row',
    drop: (draggedRow: Row<TitleResponse>) =>
      reorderRow(draggedRow.index, row.index),
  });

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => row,
    type: 'row',
  });

  return (
    <React.Fragment key={row.id}>
      <NormalTable.StyledBodyTR
      // ref={previewRef}
      // style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {row.getVisibleCells().map((cell, index) => {
          if (index === row.getVisibleCells().length - 1) {
            return null;
          }

          return (
            <NormalTable.StyledTDRef key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </NormalTable.StyledTDRef>
          );
        })}
        <NormalTable.StyledTDRef ref={dropRef}>
          <span ref={dragRef}>
            <ControlIcons.Sequence />
          </span>
        </NormalTable.StyledTDRef>
      </NormalTable.StyledBodyTR>
      {row.getIsExpanded() && <SeasonRows seasons={row.original.seasons} />}
    </React.Fragment>
  );
}

type NormalAllFeatTableProps = NormalSortTableProps;

function NormalAllFeatTable({ onSort, sortByClient }: NormalAllFeatTableProps) {
  const [data, setData] = React.useState(() => [...titleData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns: allFeatColumns,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    getRowCanExpand: (row) => row.original.seasons.length > 0,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    ...(sortByClient && { getSortedRowModel: getSortedRowModel() }),
  });

  const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
    data.splice(
      targetRowIndex,
      0,
      data.splice(draggedRowIndex, 1)[0] as TitleResponse
    );
    setData([...data]);
  };

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
          <DraggableRow key={row.id} row={row} reorderRow={reorderRow} />
        ))}
      </NormalTable.StyledBody>
    </NormalTable.StyledTable>
  );
}

const Template: ComponentStory<typeof NormalAllFeatTable> = (args) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <NormalAllFeatTable {...args} />
    </DndProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSort(s) {
    console.log(s);
  },
  sortByClient: true,
};

export default {
  component: NormalAllFeatTable,
  title: 'React/Table/Normal Style/All Features',
} as ComponentMeta<typeof NormalAllFeatTable>;
