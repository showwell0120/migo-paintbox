import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ReactSearchBar,
  ReactSearchBarProps,
} from '@paintbox/react-search-bar';

export default {
  component: ReactSearchBar,
  title: 'React/Form/SearchBar',
} as Meta;

const Template: Story<ReactSearchBarProps> = (args) => (
  <ReactSearchBar {...args} />
);

export const KeyChange = Template.bind({});
KeyChange.decorators = [
  (Story, context) => {
    const [text, setText] = useState('');
    const showText = (t: string) => {
      setText(t);
    };

    context.args['onChange'] = showText;

    return (
      <div style={{ width: '300px' }}>
        <span>You are typing: {text}</span>
        <Story />
      </div>
    );
  },
];
KeyChange.args = {
  placeholder: 'default text',
};

export const KeyChangeWithoutDebounce = Template.bind({});
KeyChangeWithoutDebounce.decorators = [
  (Story, context) => {
    const [text, setText] = useState('');
    const showText = (t: string) => {
      setText(t);
    };

    context.args['onChange'] = showText;

    return (
      <div style={{ width: '300px' }}>
        <span>You are typing: {text}</span>
        <Story />
      </div>
    );
  },
];
KeyChangeWithoutDebounce.args = {
  placeholder: 'default text',
  isDebounce: false,
};

export const onEnter = Template.bind({});
onEnter.decorators = [
  (Story, context) => {
    const showText = (t: string) => {
      alert(t);
    };
    context.args['onEnter'] = showText;

    return (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    );
  },
];

onEnter.args = {
  placeholder: 'test test',
};
