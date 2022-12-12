/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ClassNames } from '@emotion/react';
import { Row, flexRender, Header } from '@tanstack/react-table';
export interface NormalTableProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function StyledTable({ children, className, ...props }: NormalTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <table
          className={cx(
            css`
              font-size: 0.75rem;
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

function StyledHead({ children, className }: NormalTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <thead
          className={cx(
            css`
              height: 52px;
              background-color: #e9ecef;
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

function StyledBody({ children, className, ...props }: NormalTableProps) {
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

function StyledHeadTR({ children, className, ...props }: NormalTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tr
          className={cx(
            css`
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
              cursor: default;
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

function StyledBodyTR({ children, className, ...props }: NormalTableProps) {
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
                cursor: pointer;
              }
              &:last-child {
                td {
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

const StyledBodyTRRef = React.forwardRef<HTMLTableRowElement, NormalTableProps>(
  ({ children, className, ...props }, ref) => (
    <ClassNames>
      {({ css, cx }) => (
        <tr
          ref={ref}
          className={cx(
            css`
              height: 48px;
              &:hover,
              &:active {
                background: rgba(232, 245, 253, 0.8);
                cursor: pointer;
              }
              &:last-child {
                td {
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
  )
);

function StyledTH({ children, className, ...props }: NormalTableProps) {
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

type StyledTDProps = NormalTableProps & { colSpan?: number };

function StyledTD({ children, className, ...props }: StyledTDProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <td
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
        </td>
      )}
    </ClassNames>
  );
}

const StyledTDRef = React.forwardRef<HTMLTableCellElement, StyledTDProps>(
  ({ children, className, ...props }, ref) => (
    <ClassNames>
      {({ css, cx }) => (
        <td
          ref={ref}
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
        </td>
      )}
    </ClassNames>
  )
);

interface SortStyledTHProps<TData> {
  header: Header<TData, unknown>;
}

export function SortStyledTH<TData>({ header }: SortStyledTHProps<TData>) {
  return (
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
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: ' 🔼',
            desc: ' 🔽',
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </NormalTable.StyledTH>
  );
}

export interface DraggableRowProps<RowType> {
  row: Row<RowType>;
  reorderRow: (draggedRowIndex: number, targetRowIndex: number) => void;
}

export const NormalTable = {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledHeadTR,
  StyledBodyTR,
  StyledTH,
  StyledTD,
  StyledBodyTRRef,
  StyledTDRef,
  SortStyledTH,
};
