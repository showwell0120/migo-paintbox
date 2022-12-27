/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactTag, ReactTagProps } from '@paintbox/react-tag';
import { ColorThemes } from '@paintbox/react-foundation';

const AllThemes: ComponentStory<typeof ReactTag> = (args: ReactTagProps) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {ColorThemes.map((theme) => (
        <ReactTag {...args} theme={theme} children={theme} />
      ))}
    </div>
  );
};

export const Default = AllThemes.bind({});
Default.args = {
  variant: 'contained',
};

export default {
  component: ReactTag,
  title: 'React/Display/Tag/All Themes',
} as ComponentMeta<typeof ReactTag>;
