/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChevronIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Chevron({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Down</Small>
        <ChevronIcons.Down width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Chevron> = (args) => {
  return <Chevron {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Chevron,
  title: 'React/Foundation/Icons/Chevron',
} as ComponentMeta<typeof Chevron>;
