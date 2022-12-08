/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ClassNames } from '@emotion/react';

export interface PreviewTableProps {
  children: React.ReactNode;
  className?: string;
}

function StyledTable({ children, className, ...props }: PreviewTableProps) {
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

function StyledHead({ children, className }: PreviewTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <thead
          className={cx(
            css`
              height: 34px;
              color: rgba(0, 0, 0, 0.6);
              background-color: #ebebeb;
              box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset;
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

function StyledBody({ children, className, ...props }: PreviewTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tbody
          className={cx(
            css`
              background-color: rgba(244, 244, 244, 0.5);
            `,
            className
          )}
          {...props}
        >
          {children}
        </tbody>
      )}
    </ClassNames>
  );
}

function StyledHeadTR({ children, className, ...props }: PreviewTableProps) {
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

function StyledBodyTR({ children, className, ...props }: PreviewTableProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <tr
          className={cx(
            css`
              height: 32px;
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

function StyledTH({ children, className, ...props }: PreviewTableProps) {
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

function StyledTD({ children, className, ...props }: PreviewTableProps) {
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

export const PreviewTable = {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledHeadTR,
  StyledBodyTR,
  StyledTH,
  StyledTD,
};
