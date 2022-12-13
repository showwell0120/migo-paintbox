/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MediaIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Media({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>CameraReelsFill</Small>
        <MediaIcons.CameraReelsFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Media> = (args) => {
  return <Media {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Media,
  title: 'React/Foundation/Icons/Media',
} as ComponentMeta<typeof Media>;
