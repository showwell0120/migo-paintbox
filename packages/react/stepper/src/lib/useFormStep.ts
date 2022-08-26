import React from 'react';

// TODO: The last step also need to check validated.

export type Status = 'current' | 'done' | 'none';

export interface FormStepItem {
  name: string;
  order: number;
  status: Status;
  validated: boolean;
}

export interface UseFormStepReturn {
  isOnFirstStep: boolean;
  isOnLastStep: boolean;
  stepItems: FormStepItem[];
  currStepItem: FormStepItem | undefined;
  onChangeStep: (direction: 'previous' | 'next') => void;
  onValidateStep: (validated: boolean) => void;
}

export function useFormStep(steps: FormStepItem[]): UseFormStepReturn {
  const [stepItems, setStepItems] = React.useState<FormStepItem[]>(steps);

  const isOnFirstStep = stepItems.find(
    (item) => item.order === 1 && item.status === 'current'
  )
    ? true
    : false;

  const isOnLastStep = stepItems.find(
    (item) => item.order === stepItems.length && item.status === 'current'
  )
    ? true
    : false;

  const currStepItem = stepItems.find((item) => item.status === 'current');

  const onValidateStep = (validated: boolean) => {
    setStepItems((prevItems) =>
      prevItems.map((item) => {
        if (item.order === currStepItem?.order) {
          return { ...item, validated };
        }
        return item;
      })
    );
  };

  const onChangeStep = (direction: 'previous' | 'next') => {
    const nearStepItem = currStepItem
      ? stepItems.find(
          (item) =>
            item.order ===
            (direction === 'previous'
              ? currStepItem?.order - 1
              : currStepItem?.order + 1)
        )
      : null;

    if (currStepItem && nearStepItem) {
      setStepItems((prevItems) =>
        prevItems.map((item) => {
          if (item.order === currStepItem?.order) {
            return {
              ...item,
              status: direction === 'previous' ? 'none' : 'done',
            };
          }
          if (item.order === nearStepItem.order) {
            return {
              ...item,
              status: 'current',
            };
          }
          return item;
        })
      );
    }
  };

  return {
    currStepItem,
    isOnFirstStep,
    isOnLastStep,
    stepItems,
    onChangeStep,
    onValidateStep,
  };
}
