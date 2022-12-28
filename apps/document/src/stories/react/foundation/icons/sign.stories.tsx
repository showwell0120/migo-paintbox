/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignIcons, Small } from '@paintbox/react-foundation';
import { Container, Wrapper, TemplateProps } from './_common';

function Sign({ className }: TemplateProps) {
  return (
    <Container>
      <Wrapper>
        <Small>CheckCircleFill</Small>
        <SignIcons.CheckCircleFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>Check</Small>
        <SignIcons.Check width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>ExclamationCircleFill</Small>
        <SignIcons.ExclamationCircleFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>ExclamationTriangleFill</Small>
        <SignIcons.ExclamationTriangleFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>InfoCircleFill</Small>
        <SignIcons.InfoCircleFill
          width={20}
          height={20}
          className={className}
        />
      </Wrapper>
      <Wrapper>
        <Small>XCircleFill</Small>
        <SignIcons.XCircleFill width={20} height={20} className={className} />
      </Wrapper>
      <Wrapper>
        <Small>X</Small>
        <SignIcons.X width={20} height={20} className={className} />
      </Wrapper>
    </Container>
  );
}

const Template: ComponentStory<typeof Sign> = (args) => {
  return <Sign {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: 'fill-path-default',
};

export default {
  component: Sign,
  title: 'React/Foundation/Icons/Sign',
} as ComponentMeta<typeof Sign>;
