/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TimeIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Time({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Calendar3</Small>
        <TimeIcons.Calendar3 width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Clock</Small>
        <TimeIcons.Clock width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Time> = (args) => {
  return <Time {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Time,
  title: 'React/Foundation/Icons/Time',
} as ComponentMeta<typeof Time>;
