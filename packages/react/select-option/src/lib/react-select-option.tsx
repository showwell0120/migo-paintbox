/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import {
  ChevronIcons,
  SignIcons,
  CommsIcons,
} from '@paintbox/react-foundation';

/* eslint-disable-next-line */
export interface ReactSelectOptionProps {
  options: OptionItem[];
  option: OptionItem | undefined | null;
  prefix?: string;
  enableSearch?: boolean;
  showBorder?: boolean;

  onChange: (item: OptionItem) => void;
}

export interface OptionItem {
  id: string;
  name: string;
}

interface ContainerProps {
  prefixWidth: string;
  showBorder: boolean;
}

const Container = styled.div<ContainerProps>`
  font-size: 0.75rem;
  letter-spacing: 0.15px;
  background: transparent;
  border-radius: 4px;
  border: ${(props: ContainerProps) =>
    props.showBorder ? '1px solid var(--gray-500)' : 'none'};
  position: relative;
  padding-left: ${(props: ContainerProps) => props.prefixWidth};
  min-width: fit-content;
  // width: 100%;

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

const currOptionStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  height: 40px;
  margin-left: 12px;
  cursor: pointer;
`;

const optionWrapperStyle = css`
  background-color: var(--primary-dark);
  color: var(--primary-white);
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 1;
  min-width: -webkit-fill-available;
  border-radius: 4px;
`;

const iconStyle = css`
  padding: 0 12px 0 0;
`;

const searchRowStyle = css`
  display: flex;
  padding: 12px;
  padding-bottom: 6px;
`;

const keywordInputStyle = css`
  all: unset;
  border-bottom: 1px solid var(--primary-white);
  height: 0.75rem;
  margin-left: 6px;
  padding: 3px;
`;

const optionRowStyle = css`
  display: flex;
  padding: 6px 12px;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: var(--primary-primary);
    svg {
      path {
        fill: var(--primary-white);
      }
    }
  }
`;

export function ReactSelectOption({
  options,
  option,
  prefix,
  enableSearch = false,
  showBorder = true,
  onChange,
}: ReactSelectOptionProps) {
  const [prefixWidth, setPrefixWidth] = React.useState<string>('0px');
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [keyword, setKeyword] = React.useState<string>();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const activeOptions = React.useMemo(() => {
    if (!keyword) {
      return options;
    }
    return options.filter((option) =>
      option.name.toLowerCase().includes(keyword?.toLowerCase() ?? '')
    );
  }, [options, keyword]);

  const handleSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget?.dataset['id']) {
      const itemID = event.currentTarget?.dataset['id'];
      if (!option || itemID !== option.id) {
        const item = options.find((el) => el.id === itemID);
        item && onChange && onChange(item);
      }

      setShowOptions(false);
      setKeyword('');
    }
  };

  const handleShowOptions = () => setShowOptions(true);

  const handleHideOptions = (event: MouseEvent) => {
    if (!optionsRef.current?.contains(event.target as Node) && showOptions) {
      setShowOptions(false);
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

  React.useEffect(() => {
    // @see https://github.com/facebook/react/issues/20325#issuecomment-732707240
    window.addEventListener('click', handleHideOptions, { capture: true });
    return () => {
      window.removeEventListener('click', handleHideOptions);
    };
  }, [handleHideOptions]);

  return (
    <Container
      prefixWidth={prefixWidth}
      showBorder={showBorder}
      ref={containerRef}
      data-prefix={prefix}
    >
      <div css={currOptionStyle} onClick={handleShowOptions}>
        {option ? <div>{option.name}</div> : <div></div>}
        <div css={iconStyle}>
          {showOptions ? <ChevronIcons.Up /> : <ChevronIcons.Down />}
        </div>
      </div>
      {showOptions && (
        <div ref={optionsRef} css={optionWrapperStyle}>
          {enableSearch && (
            <div css={searchRowStyle}>
              <CommsIcons.Search
                width={14}
                css={css`
                  path {
                    fill: var(--primary-white);
                  }
                `}
              />
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                css={keywordInputStyle}
              />
            </div>
          )}
          <div>
            {activeOptions.map((item) => (
              <div
                key={item.id}
                data-id={item.id}
                css={optionRowStyle}
                onClick={handleSelect}
              >
                <SignIcons.Check
                  height={12}
                  width={13.5}
                  css={css`
                    path {
                      fill: ${option && item.id === option.id
                        ? 'var(--primary-white)'
                        : 'var(--primary-dark)'};
                    }
                  `}
                />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
