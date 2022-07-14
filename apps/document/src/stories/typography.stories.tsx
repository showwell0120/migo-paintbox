import { Meta } from '@storybook/react';
import * as T from '@paintbox/design-foundation';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <T.H1>Heading</T.H1>
      <br />
      <T.H1>H1. Web heading</T.H1>
      <T.H2>H2. Web heading</T.H2>
      <T.H3>H3. Web heading</T.H3>
      <T.H4>H4. Web heading</T.H4>
      <T.H5>H5. Web heading</T.H5>
      <T.H6>H6. Web heading</T.H6>
      <br />
      <br />
      <T.H1>Body</T.H1>
      <br />
      <T.Text>This line of text is meant to be treated as body text.</T.Text>
      <T.BText>This line rendered as bold text.</T.BText>
      <T.IText>This line rendered as italicized text.</T.IText>
      <T.UText>This line of text will render as underlined</T.UText>
      <T.DText>
        This line of text is meant to be treated as deleted text.
      </T.DText>
      <T.PText>This line of text is meant to be treated as fine print.</T.PText>
      <br />
      <br />
      <T.H1>Inner</T.H1>
      <T.Small className="test">
        This line of text is meant to be treated as body text.
      </T.Small>
      <T.BSmall>This line rendered as bold text.</T.BSmall>
      <T.ISmall>This line rendered as italicized text.</T.ISmall>
      <T.USmall>This line of text will render as underlined</T.USmall>
      <T.DSmall>
        This line of text is meant to be treated as deleted text.
      </T.DSmall>
      <T.PSmall>
        This line of text is meant to be treated as fine print.
      </T.PSmall>
      <br />
    </div>
  );
}

export default {
  component: App,
  title: 'Design / Typography',
} as Meta;

export const myStory = () => <App />;

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sv8VnmaINqyDQcpdO3cz5M/%F0%9F%96%A5-Foundation?node-id=9%3A394',
  },
};
