import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactRadio, ReactRadioProps } from '@paintbox/react-radio';

const Template1: ComponentStory<typeof ReactRadio> = (
  args: ReactRadioProps
) => {
  const [check, setCheck] = React.useState('');

  function handleChange(val: string) {
    setCheck(val);
  }

  return (
    <div>
      <p style={{ color: 'var(--text-body)' }}>Select your favorite drink:</p>
      <ReactRadio
        label="Boba Milk Tea"
        name="drink"
        checked={check === 'boba'}
        value="boba"
        onChange={handleChange}
      />
      <ReactRadio
        label="Orange Green Tea"
        name="drink"
        checked={check === 'orange'}
        value="orange"
        onChange={handleChange}
      />
      <ReactRadio
        label="Watermelon Juice"
        name="drink"
        checked={check === 'watermelon'}
        value="watermelon"
        onChange={handleChange}
      />
    </div>
  );
};

const Template2: ComponentStory<typeof ReactRadio> = (
  args: ReactRadioProps
) => {
  const [check, setCheck] = React.useState('');
  const [hasCovid, setHasCovid] = React.useState(false);

  function handleChange(val: string) {
    setCheck(val);
    setHasCovid(Boolean(val));
  }

  return (
    <div>
      <p style={{ color: 'var(--text-body)' }}>Have you had Covid-19?</p>
      <ReactRadio
        label="Yes"
        name="covid"
        checked={check === 'true'}
        value="true"
        onChange={handleChange}
      />
      <ReactRadio
        label="No"
        name="covid"
        checked={check === ''}
        value=""
        onChange={handleChange}
      />
    </div>
  );
};

export const Default = Template1.bind({});
Default.args = {};

export const BooleanRadios = Template2.bind({});
BooleanRadios.args = {};

export default {
  component: ReactRadio,
  title: 'React/Form/Radio/Stories',
} as ComponentMeta<typeof ReactRadio>;
