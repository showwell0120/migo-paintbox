import { Story, Meta } from '@storybook/react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  BText,
  IText,
  UText,
  DText,
  PText,
} from '@paintbox/design-typography';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <H1>Heading</H1>
      <br />
      <H1>H1. Web heading</H1>
      <H2>H2. Web heading</H2>
      <H3>H3. Web heading</H3>
      <H4>H4. Web heading</H4>
      <H5>H5. Web heading</H5>
      <H6>H6. Web heading</H6>
      <br />
      <br />
      <H1>Body</H1>
      <br />
      <Text>This line of text is meant to be treated as body text.</Text>
      <BText>This line rendered as bold text.</BText>
      <IText>This line rendered as italicized text.</IText>
      <UText>This line of text will render as underlined</UText>
      <DText>This line of text is meant to be treated as deleted text.</DText>
      <PText>This line of text is meant to be treated as fine print.</PText>
    </div>
  );
}

export default {
  component: App,
  title: 'Design / Typography',
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};
