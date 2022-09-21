import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { CaretLeftFill, CaretRightFill } from '@paintbox/react-foundation';

export interface PageParams {
  page: number;
  limit: number;
}

/* eslint-disable-next-line */
export interface ReactPaginationProps {
  pageParams: PageParams;
  total: number;
  onPageChange: (page: number) => void;
}

const amountGetter = new Intl.NumberFormat('en-US');

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const itemStyle = css`
  background: transparent;
  color: var(--text-body);
  border-radius: 4px;
  border: 1px solid var(--gray-500);
  height: 40px;
  line-height: 40px;
`;

const Dashboard = styled.div`
  ${itemStyle}
  width: fit-content;
  padding: 0px 16px;
  white-space: nowrap;
`;

const ToggleButton = styled.div<{ disabled: boolean }>`
  ${itemStyle}
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props: { disabled: boolean }) =>
    props.disabled ? 'not-allowed' : 'pointer'};
`;

export function ReactPagination({
  pageParams,
  total,
  onPageChange,
}: ReactPaginationProps) {
  const [currRange, setCurrRange] = React.useState<{
    from: number;
    to: number;
  }>();
  const { page, limit } = pageParams;

  const lastPage = React.useMemo(
    () => Math.floor(total / limit),
    [limit, total]
  );

  const handleMinusPage = () => {
    if (page > 0) {
      const newPage = page - 1;
      onPageChange && onPageChange(newPage);
    }
  };

  const handleAddPage = () => {
    if (page < lastPage) {
      const newPage = page + 1;
      onPageChange && onPageChange(newPage);
    }
  };

  React.useEffect(() => {
    let from, to;
    if (limit > total) {
      from = 1;
      to = total;
    } else {
      from = page * limit + 1;
      to = page === lastPage ? total : (page + 1) * limit;
    }
    setCurrRange({ from, to });
  }, [page, limit, lastPage, total]);

  return (
    <Container>
      <Dashboard>
        {currRange?.from}-{currRange?.to} of {amountGetter.format(total)}
      </Dashboard>
      <ToggleButton disabled={page === 0} onClick={handleMinusPage}>
        <CaretLeftFill
          {...(page === 0
            ? {
                stroke: 'var(--text-muted)',
              }
            : { stroke: 'var(--text-body)' })}
        />
      </ToggleButton>
      <ToggleButton disabled={page === lastPage} onClick={handleAddPage}>
        <CaretRightFill
          {...(page === lastPage
            ? {
                stroke: 'var(--text-muted)',
              }
            : { stroke: 'var(--text-body)' })}
        />
      </ToggleButton>
    </Container>
  );
}

export function PaginationSample() {
  const defaultPageParams: PageParams = {
    limit: 5,
    page: 0,
  };

  const [pageParams, setPageParams] =
    React.useState<PageParams>(defaultPageParams);

  const handlePageChange = (page: number) =>
    setPageParams({ ...pageParams, page });

  return (
    <ReactPagination
      pageParams={pageParams}
      total={12}
      onPageChange={handlePageChange}
    />
  );
}
