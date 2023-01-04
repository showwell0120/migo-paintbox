import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactPagination,
  ReactPaginationProps,
  PageParams,
} from '@paintbox/react-pagination';

const Template: ComponentStory<typeof ReactPagination> = (
  args: ReactPaginationProps
) => {
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
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: ReactPagination,
  title: 'React/Navigation/Pagination/Stories',
} as ComponentMeta<typeof ReactPagination>;
