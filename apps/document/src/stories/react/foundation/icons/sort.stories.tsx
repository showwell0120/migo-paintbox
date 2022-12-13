/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SortIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Sort({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>AlphaDown</Small>
        <SortIcons.AlphaDown width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>AlphaDownAlt</Small>
        <SortIcons.AlphaDownAlt width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>AlphaUp</Small>
        <SortIcons.AlphaUp width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>AlphaUpAlt</Small>
        <SortIcons.AlphaUpAlt width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Down</Small>
        <SortIcons.Down width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>DownAlt</Small>
        <SortIcons.DownAlt width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>NumericDown</Small>
        <SortIcons.NumericDown width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>NumericDownAlt</Small>
        <SortIcons.NumericDownAlt
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>NumericUp</Small>
        <SortIcons.NumericUp width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>NumericUpAlt</Small>
        <SortIcons.NumericUpAlt width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Up</Small>
        <SortIcons.Up width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>UpAlt</Small>
        <SortIcons.UpAlt width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Sort> = (args) => {
  return <Sort {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Sort,
  title: 'React/Foundation/Icons/Sort',
} as ComponentMeta<typeof Sort>;
