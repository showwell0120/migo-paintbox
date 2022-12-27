/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactTag, ReactTagProps } from '@paintbox/react-tag';
import { ColorThemes, HeaderIcons } from '@paintbox/react-foundation';

const AllThemes: ComponentStory<typeof ReactTag> = (args: ReactTagProps) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {ColorThemes.map((theme) => (
        <ReactTag {...args} theme={theme} />
      ))}
    </div>
  );
};

export const Default = AllThemes.bind({});
Default.args = {
  variant: 'outlined',
  hasBorder: true,
  children: (
    <div style={{ display: 'flex', gap: '0.1rem', alignItems: 'center' }}>
      <HeaderIcons.PromoBadge />
      <div style={{ marginLeft: 3 }}>tag</div>
    </div>
  ),
  onClick() {
    alert('clicked');
  },
  onClose() {
    alert('closed');
  },
};

export default {
  component: ReactTag,
  title: 'React/Display/Tag/Other Features',
} as ComponentMeta<typeof ReactTag>;
