/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Header({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>Info</Small>
        <HeaderIcons.Info width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Carousel</Small>
        <HeaderIcons.Carousel width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>PromoBadge</Small>
        <HeaderIcons.PromoBadge width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Header,
  title: 'React/Foundation/Icons/Header',
} as ComponentMeta<typeof Header>;
