import React from 'react';
import { ClassNames } from '@emotion/react';
import {
  TableProps,
  TableBodyProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  useTable,
  Column,
} from 'react-table';

export interface TableBaseProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/* eslint-disable-next-line */
export interface StyledTableProps extends TableProps, TableBaseProps {}

export function StyledTable({
  children,
  className,
  ...props
}: StyledTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <table
          className={cx(
            css`
              color: var(--text-body);
              background-color: var(--background);
              border-radius: 4px;
              text-align: left;
              border-collapse: separate;
              border-spacing: 0;
              width: inherit;
              border: 1px solid var(--gray-500);
              border-bottom: none;
            `,
            className
          )}
          {...props}
        >
          {children}
        </table>
      )}
    </ClassNames>
  );
}

/* eslint-disable-next-line */
export interface StyledTheadProps extends TableBaseProps {}

export function StyledThead({ children, className }: StyledTheadProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <thead
          className={cx(
            css`
              height: 52px;
              background-color: var(--transparent);
              box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset;
              position: sticky;
              left: 0;
              top: 0;
            `,
            className
          )}
        >
          {children}
        </thead>
      )}
    </ClassNames>
  );
}

/* eslint-disable-next-line */
export interface StyledTbodyProps extends TableBodyProps, TableBaseProps {}

export function StyledTbody({
  children,
  className,
  ...props
}: StyledTbodyProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tbody className={cx(css``, className)} {...props}>
          {children}
        </tbody>
      )}
    </ClassNames>
  );
}

export interface StyledHeadTRProps extends TableHeaderProps, TableBaseProps {}

export function StyledHeadTR({
  children,
  className,
  ...props
}: StyledHeadTRProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tr
          className={cx(
            css`
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            `,
            className
          )}
          {...props}
        >
          {children}
        </tr>
      )}
    </ClassNames>
  );
}

export interface StyledBodyTRProps extends TableRowProps, TableBaseProps {}

export function StyledBodyTR({
  children,
  className,
  ...props
}: StyledBodyTRProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tr
          className={cx(
            css`
              height: 48px;
              &:hover,
              &:active {
                background: rgba(232, 245, 253, 0.8);
              }
              &:last-child {
                td {
                  border-bottom: none;
                  &:first-child {
                    border-bottom-left-radius: 4px;
                  }
                  &:last-child {
                    border-bottom-right-radius: 4px;
                  }
                }
              }
            `,
            className
          )}
          {...props}
        >
          {children}
        </tr>
      )}
    </ClassNames>
  );
}

export function StyledTH({ children, className, ...props }: StyledHeadTRProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <th
          className={cx(
            css`
              padding-left: 1rem;

              &:first-child {
                border-top-left-radius: 4px;
              }

              &:last-child {
                padding-right: 1rem;
                border-top-right-radius: 4px;
              }
            `,
            className
          )}
          {...props}
        >
          {children}
        </th>
      )}
    </ClassNames>
  );
}

export interface StyledTDProps extends TableCellProps, TableBaseProps {}

export function StyledTD({ children, className, ...props }: StyledTDProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <th
          className={cx(
            css`
              padding-left: 1rem;
              border-bottom: 1px solid var(--gray-500);
              &:last-child {
                padding-right: 1rem;
              }
            `,
            className
          )}
          {...props}
        >
          {children}
        </th>
      )}
    </ClassNames>
  );
}

export function TableSample() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns: ReadonlyArray<Column<{ col1: string; col2: string }>> =
    React.useMemo(
      () => [
        {
          Header: 'Column 1',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
        },
      ],
      []
    );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <StyledTable {...getTableProps()}>
      <StyledThead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <StyledHeadTR {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <StyledTH {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </StyledTH>
                ))
              }
            </StyledHeadTR>
          ))
        }
      </StyledThead>
      {/* Apply the table body props */}
      <StyledTbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <StyledBodyTR {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <StyledTD {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </StyledTD>
                    );
                  })
                }
              </StyledBodyTR>
            );
          })
        }
      </StyledTbody>
    </StyledTable>
  );
}
