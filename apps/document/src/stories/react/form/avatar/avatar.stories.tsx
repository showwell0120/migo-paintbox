import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactAvatar, ReactAvatarProps } from '@paintbox/react-avatar';

const Template: ComponentStory<typeof ReactAvatar> = (
  args: ReactAvatarProps
) => {
  const [avatarURL, setAvatarURL] = React.useState<string>('');

  const handleSyncAvatar = (f: File | Blob | null) => {
    setAvatarURL(f ? URL.createObjectURL(f as Blob) : '');
  };

  return (
    <ReactAvatar
      {...args}
      imageURL={avatarURL}
      onImageSuccess={handleSyncAvatar}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  editable: true,
  required: true,
  maxFileSize: 1 * 1024 * 1024,
  displaySize: {
    width: 120,
    height: 120,
  },
};

export default {
  component: ReactAvatar,
  title: 'React/Form/Avatar/Stories',
} as ComponentMeta<typeof ReactAvatar>;
