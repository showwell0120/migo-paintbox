import React from 'react';
import { ComponentMeta } from '@storybook/react';

import {
  useFormStep,
  StepGraph,
  StepContents,
  StepActions,
} from '@paintbox/react-stepper';
import { defaultStepItems } from './stepItems';

const Template = (args: any) => {
  const stepProps = useFormStep(defaultStepItems);

  return (
    <div>
      <StepGraph stepItems={stepProps.stepItems} />
      <StepContents stepItems={stepProps.stepItems}>
        <div>step 1</div>
        <div>step 2</div>
        <div>step 3</div>
      </StepContents>
      <StepActions
        {...stepProps}
        onCancel={() => alert('cancel')}
        onSubmit={() => alert('submit')}
      />
    </div>
  );
};

export const Default = Template.bind({});

export default {
  component: Template,
  title: 'React/Navigation/Stepper/Stories/Default',
} as ComponentMeta<typeof Template>;
