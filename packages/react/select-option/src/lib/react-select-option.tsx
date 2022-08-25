import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ChevronDown } from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactSelectOptionProps {
  options: OptionItem[];
  option: OptionItem;
  prefix?: string;

  onChange: (item: OptionItem) => void;
}

export interface OptionItem {
  id: string | number;
  name: string;
}

const Container = styled.div<{ prefixWidth: string }>`
  font-size: 0.875rem;
  letter-spacing: 0.15px;
  background: var(--white);
  border-radius: 4px;
  border: 1px solid #adb5bd;
  position: relative;
  padding-left: ${(props: { prefixWidth: string }) => props.prefixWidth};

  &[data-prefix] {
    &::before {
      font-family: Roboto;
      content: attr(data-prefix);
      display: flex;
      align-items: center;
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 0 8px 0 12px;
      color: var(--text-muted);
    }
  }
`;

const selectStyle = css`
  height: 40px;
  padding: 11px 12px;
  border: none;
  display: block;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  position: relative;
  z-index: 1;
  background: transparent;
  color: var(--dark);
`;

const iconStyle = css`
  position: absolute;
  z-index: 0;
  top: 12px;
  right: 0;
  bottom: 0;
  padding: 0 12px 0 0;
`;

export function ReactSelectOption({
  options,
  option,
  prefix,
  onChange,
}: ReactSelectOptionProps) {
  const [prefixWidth, setPrefixWidth] = React.useState<string>('0px');

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    if (option?.id === value) {
      return;
    }

    const item = options.find((el) => el.id === value);
    if (item) {
      onChange && onChange(item);
    }
  };

  React.useEffect(() => {
    // reference: https://codepen.io/designcouch/pen/yLvyqvL
    if (containerRef.current && prefix) {
      const _prefixWidth = window
        .getComputedStyle(containerRef.current, ':before')
        .width.toString()
        .replace('px', '');

      _prefixWidth !== prefixWidth &&
        setPrefixWidth(`${Number(_prefixWidth) + 8}px`);
    }
  }, [prefix, prefixWidth]);

  return (
    <Container
      prefixWidth={prefixWidth}
      ref={containerRef}
      data-prefix={prefix}
    >
      <select css={selectStyle} value={option.id} onChange={handleChange}>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div css={iconStyle}>
        <ChevronDown />
      </div>
    </Container>
  );
}

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

export const SelectOptionSample = (props: Partial<ReactSelectOptionProps>) => {
  const [selected, setSelected] = React.useState<OptionItem>(options[0]);

  return (
    <ReactSelectOption
      options={options}
      option={selected}
      onChange={setSelected}
      {...props}
    />
  );
};
