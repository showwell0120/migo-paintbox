import React from 'react';
import styled from '@emotion/styled';

import { ReactButton } from '@paintbox/react-button';
import { H5 } from '@paintbox/react-foundation';

import {
  FormStepItem,
  UseFormStepReturn,
  Status,
  useFormStep,
} from './useFormStep';

export interface StepActionsProps extends UseFormStepReturn {
  onCancel: () => void;
  onSubmit: () => void;
  submitName?: string;
}

const getCSSVarByStatus = (status: Status) => {
  switch (status) {
    case 'current':
      return 'primary';
    case 'done':
      return 'success';
    case 'none':
      return 'secondary';
    default:
      return;
  }
};

const Steps = styled.div`
  display: flex;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
`;

const Cycle = styled.div<{ status: Status }>`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  color: var(--white);
  background-color: var(
    --${(props: { status: Status }) => getCSSVarByStatus(props.status)});
  );
`;

const Name = styled.div<{ status: Status }>`
  margin-left: 8px;
  color: var(
    --${(props: { status: Status }) => getCSSVarByStatus(props.status)});
  );
`;

const Line = styled.div<{ status: Status }>`
  margin-left: 12px;
  margin-right: 12px;
  height: 1px;
  width: 50px;
  flex: 1;
  background-color: var(
    --${(props: { status: Status }) => getCSSVarByStatus(props.status)});
  );
`;

const ContentWrapper = styled.div<{ status: Status }>`
  display: ${(props: { status: Status }) =>
    props.status === 'current' ? 'block' : 'none'};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function StepGraph({ stepItems }: { stepItems: FormStepItem[] }) {
  return (
    <Steps>
      {stepItems.map((item) => (
        <Step key={item.name}>
          <Cycle status={item.status}>{item.order}</Cycle>
          <Name status={item.status}>
            <H5>{item.name}</H5>
          </Name>
          {item.order !== stepItems.length && <Line status={item.status} />}
        </Step>
      ))}
    </Steps>
  );
}

export function StepContents({
  stepItems,
  children,
}: {
  stepItems: FormStepItem[];
  children: React.ReactFragment;
}) {
  const childrenArray = Array.from(children);

  return (
    <div>
      {childrenArray.map((child, index) => {
        const stepItem = stepItems.find((item) => item.order === index + 1);

        return stepItem ? (
          <ContentWrapper status={stepItem.status}>{child}</ContentWrapper>
        ) : null;
      })}
    </div>
  );
}

export function StepActions({
  isOnFirstStep,
  isOnLastStep,
  currStepItem,
  onChangeStep,
  onCancel,
  onSubmit,
  submitName = 'Submit',
}: StepActionsProps) {
  const handlePreious = () => onChangeStep('previous');

  const handleNext = () => onChangeStep('next');

  return (
    <Buttons>
      {isOnFirstStep && (
        <ReactButton variant="outlined" onClick={onCancel}>
          Cancel
        </ReactButton>
      )}
      {!isOnFirstStep && (
        <ReactButton variant="outlined" onClick={handlePreious}>
          Back
        </ReactButton>
      )}
      {!isOnLastStep && currStepItem && (
        <ReactButton disabled={!currStepItem.validated} onClick={handleNext}>
          Next
        </ReactButton>
      )}
      {isOnLastStep && (
        <ReactButton onClick={onSubmit}>{submitName}</ReactButton>
      )}
    </Buttons>
  );
}

const defaultStepItems: FormStepItem[] = [
  {
    name: 'Step 1',
    order: 1,
    status: 'current',
    validated: true,
  },
  {
    name: 'Step 2',
    order: 2,
    status: 'none',
    validated: true,
  },
  {
    name: 'Step 3',
    order: 3,
    status: 'none',
    validated: true,
  },
];

export const StepperSample1 = () => {
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

export const StepperSample2 = () => {
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