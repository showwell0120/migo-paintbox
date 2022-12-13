/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PeopleIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function People({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>PersonFill</Small>
        <PeopleIcons.PersonFill width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>VisibilityOff</Small>
        <Small>(from billing portal)</Small>
        <PeopleIcons.VisibilityOff
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>VisibilityOn</Small>
        <Small>(from billing portal)</Small>
        <PeopleIcons.VisibilityOn
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof People> = (args) => {
  return <People {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: People,
  title: 'React/Foundation/Icons/People',
} as ComponentMeta<typeof People>;
