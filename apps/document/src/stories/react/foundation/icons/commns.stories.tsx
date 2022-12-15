/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommsIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Comms({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Search</Small>
        <CommsIcons.Search width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Comms> = (args) => {
  return <Comms {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Comms,
  title: 'React/Foundation/Icons/Comms',
} as ComponentMeta<typeof Comms>;
