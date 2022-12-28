/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactDialog, ReactDialogProps } from '@paintbox/react-dialog';

const Template: ComponentStory<typeof ReactDialog> = (
  args: ReactDialogProps
) => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    args.onCancel?.();
    setOpen(false);
  };

  const handleSubmit = () => {
    args.onSubmit?.();
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Click to open
      </button>
      <div>
        <ReactDialog
          {...args}
          onCancel={args.onCancel ? handleCancel : undefined}
          onSubmit={args.onSubmit ? handleSubmit : undefined}
          isOpen={open}
          onClose={onClose}
          className={'w-50'}
        >
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </ReactDialog>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  closeOnOverlayClick: false,
  actionPosition: 'top',
  onCancel: () => alert('cancel'),
  onSubmit: () => alert('submit'),
};

export const NoActions = Template.bind({});
NoActions.args = {
  closeOnOverlayClick: true,
  actionPosition: 'bottom',
  onCancel: undefined,
  onSubmit: undefined,
};

export const OnlySubmit = Template.bind({});
OnlySubmit.args = {
  closeOnOverlayClick: true,
  actionPosition: 'bottom',
  onCancel: undefined,
  onSubmit: () => alert('submit'),
  submitText: 'OK. I got it.',
};

export default {
  component: ReactDialog,
  title: 'React/Feedback/Dialog/Stories',
} as ComponentMeta<typeof ReactDialog>;
