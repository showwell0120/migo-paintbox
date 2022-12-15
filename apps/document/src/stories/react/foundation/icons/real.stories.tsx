/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RealIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Real({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>TagFill</Small>
        <RealIcons.TagFill width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Real> = (args) => {
  return <Real {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Real,
  title: 'React/Foundation/Icons/Real',
} as ComponentMeta<typeof Real>;
