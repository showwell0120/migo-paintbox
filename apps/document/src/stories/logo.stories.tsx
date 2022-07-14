import { Story, Meta } from '@storybook/react';
// import {
//   SolidLogo,
//   FilledLogo,
//   FilledLogoProps,
// } from '@paintbox/design-assets';

import { SolidLogo, FilledLogo, SVGProps } from '@paintbox/design-foundation';

function App(props: SVGProps) {
  return (
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
}

export default {
  component: App,
  title: 'Design / SVGs / Logos',
} as Meta;

const Template: Story<SVGProps> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};
