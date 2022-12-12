/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoxArrowIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function BoxArrow({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>DownRight</Small>
        <BoxArrowIcons.DownRight width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Left</Small>
        <BoxArrowIcons.Left width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>UpLeft</Small>
        <BoxArrowIcons.UpLeft width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof BoxArrow> = (args) => {
  return <BoxArrow {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: BoxArrow,
  title: 'React/Foundation/Icons/BoxArrow',
} as ComponentMeta<typeof BoxArrow>;
