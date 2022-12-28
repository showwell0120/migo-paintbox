import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactCurrencyInput,
  ReactCurrencyInputProps,
} from '@paintbox/react-currency-input';
import { ChangeHandlerParams } from '@paintbox/react-base';

const Template: ComponentStory<typeof ReactCurrencyInput> = (
  args: ReactCurrencyInputProps<any>
) => {
  const [value, setValue] = React.useState<number | null>(null);

  const handleChange = (params: ChangeHandlerParams) => {
    setValue(params.value);
  };

  return <ReactCurrencyInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'list_price',
  label: 'List Price',
};

export const WithDescriptionAndMax = Template.bind({});
WithDescriptionAndMax.args = {
  name: 'discount_price',
  label: 'Discount Price',
  max: 1000,
  description: (
    <div>
      This price will be shown on Migo app for customers as original price with
      strickthrough. (e.g. <del>Rp 30.000</del>)
    </div>
  ),
};

export default {
  component: ReactCurrencyInput,
  title: 'React/Form/CurrencyInput/Stories',
} as ComponentMeta<typeof ReactCurrencyInput>;
