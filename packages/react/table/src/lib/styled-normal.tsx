/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ClassNames } from '@emotion/react';

export interface NormalTableProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function StyledTable({ children, className, ...props }: NormalTableProps) {
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

function StyledHead({ children, className }: NormalTableProps) {
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

function StyledTD({ children, className, ...props }: NormalTableProps) {
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

export const NormalTable = {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledHeadTR,
  StyledBodyTR,
  StyledTH,
  StyledTD,
};
