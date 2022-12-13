/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ControlIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Control({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Sequence</Small>
        <Small>(from CMS)</Small>
        <ControlIcons.Sequence width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Control> = (args) => {
  return <Control {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Control,
  title: 'React/Foundation/Icons/Control',
} as ComponentMeta<typeof Control>;
