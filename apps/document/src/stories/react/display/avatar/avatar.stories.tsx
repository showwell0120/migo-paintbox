import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactAvatar, ReactAvatarProps } from '@paintbox/react-avatar';

const Template: ComponentStory<typeof ReactAvatar> = (
  args: ReactAvatarProps
) => {
  const [avatarURL, setAvatarURL] = React.useState<string>('');

  const handleSyncAvatar = (f: File | Blob) => {
    setAvatarURL(URL.createObjectURL(f as Blob));
  };

  return (
    <ReactAvatar
      {...args}
      avatarURL={avatarURL}
      onImageSuccess={handleSyncAvatar}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  editable: true,
  displaySize: 120,
  exactSize: 0,
  required: true,
  avatarName: 'Avatar',
};

export default {
  component: ReactAvatar,
  title: 'React/Display/Avatar/Stories',
} as ComponentMeta<typeof ReactAvatar>;
