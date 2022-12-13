/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from '@tanstack/react-table';

import { CaretIcons } from '@paintbox/react-foundation';
import { NormalTable } from '@paintbox/react-table';
import {
  titleData,
  expandColumns,
  SeasonResponse,
  EpisodeResponse,
} from './title-data';

function EpisodeRows({ episodes }: { episodes: EpisodeResponse[] }) {
  return (
    <>
      {episodes.map((episode) => (
        <NormalTable.StyledBodyTR key={episode.episode_id}>
          {/* expander */}
          <NormalTable.StyledTD></NormalTable.StyledTD>
          {/* season expander + season name */}
          <NormalTable.StyledTD colSpan={3} style={{ paddingLeft: '2.2rem' }}>
            <span>{episode.episode_name}</span>
          </NormalTable.StyledTD>
          {/* type */}
          <NormalTable.StyledTD>Episode</NormalTable.StyledTD>
          <NormalTable.StyledTD colSpan={4}></NormalTable.StyledTD>
          {/* episodes */}
          <NormalTable.StyledTD>{`EP${episode.episode_number}`}</NormalTable.StyledTD>
          {/* across list price and discount price */}
          <NormalTable.StyledTD colSpan={2}></NormalTable.StyledTD>
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
              {/* expander */}
              <NormalTable.StyledTD></NormalTable.StyledTD>
              {/* season expander + season name */}
              <NormalTable.StyledTD colSpan={3}>
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
              {/* year */}
              <NormalTable.StyledTD></NormalTable.StyledTD>
              {/* exp. */}
              <NormalTable.StyledTD>{season.license_end}</NormalTable.StyledTD>
              {/* exp. */}
              <NormalTable.StyledTD>{`${season.licensor}/${season.cp_code}`}</NormalTable.StyledTD>
              {/* season */}
              <NormalTable.StyledTD>{`S${season.season_number}`}</NormalTable.StyledTD>
              {/* episodes */}
              <NormalTable.StyledTD>
                {season.episode_count}
              </NormalTable.StyledTD>
              {/* across list price and discount price */}
              <NormalTable.StyledTD colSpan={2}></NormalTable.StyledTD>
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

function NormalSubCompTable() {
  const [data, setData] = React.useState(() => [...titleData]);

  const table = useReactTable({
    data,
    columns: expandColumns,
    getRowCanExpand: (row) => row.original.seasons.length > 0,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
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
          <React.Fragment key={row.id}>
            <NormalTable.StyledBodyTR>
              {row.getVisibleCells().map((cell) => (
                <NormalTable.StyledTD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </NormalTable.StyledTD>
              ))}
            </NormalTable.StyledBodyTR>
            {row.getIsExpanded() && (
              <SeasonRows seasons={row.original.seasons} />
            )}
          </React.Fragment>
        ))}
      </NormalTable.StyledBody>
    </NormalTable.StyledTable>
  );
}

const Template: ComponentStory<typeof NormalSubCompTable> = (args) => {
  return <NormalSubCompTable />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: NormalSubCompTable,
  title: 'React/Table/Normal Style/Sub Components',
} as ComponentMeta<typeof NormalSubCompTable>;
