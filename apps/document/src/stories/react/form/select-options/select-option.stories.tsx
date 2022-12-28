import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactSelectOption,
  ReactSelectOptionProps,
  OptionItem,
} from '@paintbox/react-select-option';

const options: OptionItem[] = [
  {
    id: 'all',
    name: 'All',
  },
  {
    id: 'empty',
    name: 'Empty',
  },
];

function Normal(props: ReactSelectOptionProps) {
  const [selected, setSelected] = React.useState<OptionItem>(options[1]);

  return (
    <ReactSelectOption
      {...props}
      options={options}
      option={selected}
      onChange={setSelected}
    />
  );
}

const Template: ComponentStory<typeof Normal> = (args) => {
  return (
    <div style={{ height: 200 }}>
      <Normal {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  prefix: 'Prefix: ',
  showBorder: false,
  enableSearch: true,
};

export default {
  component: Normal,
  title: 'React/Form/SelectOption/Normal',
} as ComponentMeta<typeof Normal>;
