import { Story, Meta } from '@storybook/react';
import { SolidLogo, FilledLogo, SVGProps } from '@paintbox/design-foundation';

const Template: Story<SVGProps> = (args) => (
  <div>
    <h2>SolidLogo:</h2>
    <div
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SolidLogo />
    </div>

    <h2>FilledLogo:</h2>
    <FilledLogo size={60} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export default {
  component: Default,
  title: 'Design / SVGs / Logos',
} as Meta;
