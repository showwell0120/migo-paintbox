import React from 'react';
import { ComponentMeta } from '@storybook/react';

import {
  useFormStep,
  StepGraph,
  StepContents,
  StepActions,
} from '@paintbox/react-stepper';
import { defaultStepItems } from './stepItems';

const Template1 = (args: any) => {
  const stepItems = [...defaultStepItems];
  stepItems[1] = {
    name: 'Step 2',
    order: 2,
    status: 'none',
    validated: false,
  };

  const stepProps = useFormStep(stepItems);

  return (
    <div>
      <StepGraph stepItems={stepProps.stepItems} />
      <StepContents stepItems={stepProps.stepItems}>
        <div>step 1</div>
        <div>step 2</div>
        <div>step 3</div>
        <div>step 4</div>
      </StepContents>
      <StepActions
        {...stepProps}
        onCancel={() => alert('cancel')}
        onSubmit={() => alert('submit')}
      />
    </div>
  );
};

export const DisableStep = Template1.bind({});

export default {
  component: Template1,
  title: 'React/Form/Navigation/Stories/DisableStep',
} as ComponentMeta<typeof Template1>;
