import { FormStepItem } from '@paintbox/react-stepper';

export const defaultStepItems: FormStepItem[] = [
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
