import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactSearchBar,
  ReactSearchBarProps,
} from '@paintbox/react-search-bar';

const Template: ComponentStory<typeof ReactSearchBar> = (
  args: ReactSearchBarProps
) => {
  const [keyword, setKeyword] = React.useState('');
  const onChange = (k: string) => {
    setKeyword(k);
  };

  const onEnter = (k: string) => {
    alert(`you press enter and the keyword is: ${k}`);
  };

  return (
    <div style={{ width: '300px' }}>
      <p>You are typing: {keyword}</p>
      <ReactSearchBar
        placeholder="search for..."
        onChange={onChange}
        onEnter={onEnter}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: ReactSearchBar,
  title: 'React/Form/SearchBar/Stories',
} as ComponentMeta<typeof ReactSearchBar>;
