import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactImageUploader,
  ReactImageUploaderProps,
} from '@paintbox/react-image-uploader';

const Template: ComponentStory<typeof ReactImageUploader> = (
  args: ReactImageUploaderProps
) => {
  const [imageURL, setImageURL] = React.useState<string>('');

  const handleSyncImage = (f: File | Blob | null) => {
    setImageURL(f ? URL.createObjectURL(f as Blob) : '');
  };

  return (
    <ReactImageUploader
      {...args}
      imageURL={imageURL}
      onImageSuccess={handleSyncImage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  editable: true,
  required: true,
  imageSubject: 'Banner',
  maxFileSize: 3 * 1024 * 1024,
  aspectRatio: { width: 720, height: 240 },
  displaySize: {
    width: 525,
    height: 175,
  },
};

export default {
  component: ReactImageUploader,
  title: 'React/Form/ImageUploader/Stories',
} as ComponentMeta<typeof ReactImageUploader>;
