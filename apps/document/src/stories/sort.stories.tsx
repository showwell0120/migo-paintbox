import { Meta } from '@storybook/react';
import * as S from '@paintbox/design-foundation';

function App() {
  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div>
        <S.Small>Sort Up</S.Small>
        <S.SortUp />
      </div>
      <div>
        <S.Small>Sort Down</S.Small>
        <S.SortDown />
      </div>
      <div>
        <S.Small>Sort Up Alt </S.Small>
        <S.SortUpAlt />
      </div>
      <div>
        <S.Small>Sort Down Alt </S.Small>
        <S.SortDownAlt />
      </div>
      <div>
        <S.Small>Sort Alpha Down </S.Small>
        <S.SortAlphaDown />
      </div>
      <div>
        <S.Small>Sort Alpha Up </S.Small>
        <S.SortAlphaUp />
      </div>
      <div>
        <S.Small>Sort Alpha Down Alt </S.Small>
        <S.SortAlphaDownAlt />
      </div>
      <div>
        <S.Small>Sort Alpha Up Alt </S.Small>
        <S.SortAlphaUpAlt />
      </div>
      <div>
        <S.Small>Sort Number Down </S.Small>
        <S.SortNumberDown />
      </div>
      <div>
        <S.Small>Sort Number Up </S.Small>
        <S.SortNumberUp />
      </div>
      <div>
        <S.Small>Sort Number Down Alt </S.Small>
        <S.SortNumberDownAlt />
      </div>
      <div>
        <S.Small>Sort Number Up Alt </S.Small>
        <S.SortNumberUpAlt />
      </div>
    </div>
  );
}

export default {
  component: App,
  title: 'Design / SVGs / Sort',
} as Meta;

export const myStory = () => <App />;

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sv8VnmaINqyDQcpdO3cz5M/%F0%9F%96%A5-Foundation?node-id=14%3A825',
  },
};
