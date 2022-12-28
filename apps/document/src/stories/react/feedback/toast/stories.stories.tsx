/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactToast, ReactToastProps } from '@paintbox/react-toast';

const Template: ComponentStory<typeof ReactToast> = (args: ReactToastProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Show Toast</button>
      {open && <ReactToast {...args} onClose={() => setOpen(false)} />}
    </div>
  );
};

const AllToasts: ComponentStory<typeof ReactToast> = (
  args: ReactToastProps
) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Show All Themes</button>
      {open && (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ReactToast
            {...args}
            xAxis="left"
            yAxis="top"
            theme={'secondary-warning'}
            children={'secondary-warning'}
          />
          <ReactToast
            {...args}
            xAxis="right"
            yAxis="top"
            theme={'secondary-danger'}
            children={'secondary-danger'}
          />
          <ReactToast
            {...args}
            xAxis="left"
            yAxis="bottom"
            theme={'secondary-info'}
            children={'secondary-info'}
          />
          <ReactToast
            {...args}
            xAxis="right"
            yAxis="bottom"
            theme={'secondary-success'}
            children={'secondary-success'}
          />
        </div>
      )}
    </div>
  );
};

export const AllThemes = AllToasts.bind({});
AllThemes.args = {};

export const NoPrefixIcon = Template.bind({});
NoPrefixIcon.args = {
  children: 'No Prefix Icon',
  showPrefixIcon: false,
  theme: 'secondary-danger',
};

export const AutoClose = Template.bind({});
AutoClose.args = {
  children: 'Auto Close in 3 Secs',
  enableClose: false,
  theme: 'secondary-danger',
  waitToClose: 3000,
};

export default {
  component: ReactToast,
  title: 'React/feedback/toast/Stories',
} as ComponentMeta<typeof ReactToast>;
