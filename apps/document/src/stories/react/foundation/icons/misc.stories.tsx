/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MiscIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Misc({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>BookmarkCheckFill</Small>
        <MiscIcons.BookmarkCheckFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>BookmarkXFill</Small>
        <MiscIcons.BookmarkXFill width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Misc> = (args) => {
  return <Misc {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Misc,
  title: 'React/Foundation/Icons/Misc',
} as ComponentMeta<typeof Misc>;
