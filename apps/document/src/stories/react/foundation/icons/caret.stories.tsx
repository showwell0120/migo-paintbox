/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CaretIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Caret({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>DownFill</Small>
        <CaretIcons.DownFill width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>LeftFill</Small>
        <CaretIcons.LeftFill width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>RightFill</Small>
        <CaretIcons.RightFill width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Caret> = (args) => {
  return <Caret {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Caret,
  title: 'React/Foundation/Icons/Caret',
} as ComponentMeta<typeof Caret>;
