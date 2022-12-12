/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArrowIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Arrow({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Clockwise</Small>
        <ArrowIcons.Clockwise width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Arrow> = (args) => {
  return <Arrow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Arrow,
  title: 'React/Foundation/Icons/Arrow',
} as ComponentMeta<typeof Arrow>;
