import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ReactSearchBar, ReactSearchBarProps } from '@paintbox/react-search-bar';

export default {
  component: ReactSearchBar,
  title: 'ReactSearchBar',
} as Meta;

const Template: Story<ReactSearchBarProps> = (args) => <ReactSearchBar {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  (Story, context) => {
    const [ text, setText ] = useState('');
    const showText = (t: string) => {
      setText(t);
    };

    context.args.onChange = showText;

    return (
      <div style={{width: '300px'}}>
        <span>You are typing: {text}</span>
        <Story />
      </div>
    );
  },
];
Primary.args = {
  placeholder: 'default text',
  time: 1000,
};

export const Secondary = Template.bind({});
Secondary.decorators = [
  (Story, context) => {
    const showText = (t: string) => {
      alert(t);
    };
    context.args.onEnter = showText;
    
    return (
      <div style={{width: '300px'}}>
        <Story />
      </div>
    );
  },
];

Secondary.args = {
  placeholder: 'test test',
};