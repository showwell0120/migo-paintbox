/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function File({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>ImageOutlined</Small>
        <Small>(from CMS)</Small>
        <FileIcons.ImageOutlined width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>Images</Small>
        <FileIcons.Images width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof File> = (args) => {
  return <File {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: File,
  title: 'React/Foundation/Icons/File',
} as ComponentMeta<typeof File>;
