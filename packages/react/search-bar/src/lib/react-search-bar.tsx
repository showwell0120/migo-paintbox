import React, { useState, useMemo, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { debounce } from 'lodash';

import { CommsIcons, SignIcons } from '@paintbox/react-foundation';
/* eslint-disable-next-line */
export type CallbackProp = (t: string) => void;

const containerStyle = css`
  position: relative;
  border: 1px solid var(--primary-secondary);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0px 12px 0px 12px;
  &:focus-within {
    border: 1px solid var(--primary-primary);
    box-shadow: 0 0 0 1px var(--primary-primary);
  }
`;

const iconStyle = css`
  padding-top: 3px;
  &:hover {
    cursor: pointer;
  }
  svg {
    path {
      fill: #727272;
    }
  }
`;

const inputStyle = css`
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #727272;
  background-color: transparent;
  border: 0px;
  margin-left: 20px;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

export interface ReactSearchBarProps {
  placeholder?: string;
  onChange?: CallbackProp;
  onEnter?: CallbackProp;
  isDebounce?: boolean;
}

export const ReactSearchBar: React.FC<ReactSearchBarProps> = ({
  placeholder = 'Search',
  onChange,
  onEnter,
  isDebounce = true,
}) => {
  const [keyword, setKeyword] = useState('');
  const [debounceKeyword, setDebounceKeyword] = useState('');
  const isFirstRender = useRef(true);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    if (isDebounce) {
      debounceChangeHandler(e.target.value);
    } else {
      onChange && onChange(e.target.value.trim());
    }
  };

  const debounceHandler = (word: string) => {
    setDebounceKeyword(word.trim());
  };

  const debounceChangeHandler = useMemo(
    () => debounce(debounceHandler, 500),
    []
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    onChange && onChange(debounceKeyword);
    return () => debounceChangeHandler.cancel();
  }, [debounceKeyword, debounceChangeHandler]);
  // if include onChange in the dependency array, onChange will be invoked twice

  const [isFocus, setFocus] = useState(false);
  const onFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFocus(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFocus(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter(keyword.trim());
    }
  };

  const clearKeyword = (e: React.MouseEvent<HTMLDivElement>) => {
    setKeyword('');
    setDebounceKeyword('');
    setFocus(false);
  };

  return (
    <div tabIndex={0} onFocus={onFocus} onBlur={onBlur} css={containerStyle}>
      <div css={iconStyle}>
        <CommsIcons.Search />
      </div>

      <input
        tabIndex={1}
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown}
        css={inputStyle}
      />
      {isFocus && keyword && (
        <div onClick={clearKeyword} css={iconStyle}>
          <SignIcons.XCircleFill />
        </div>
      )}
    </div>
  );
};

export const SearchBarSample = () => {
  const [keyword, setKeyword] = useState('');
  const onChange = (k: string) => {
    setKeyword(k);
  };

  const onEnter = (k: string) => {
    alert(`you press enter and the keyword is: ${k}`);
  };

  return (
    <div style={{ width: '300px' }}>
      <p>You are typing: {keyword}</p>
      <ReactSearchBar
        placeholder="search for..."
        onChange={onChange}
        onEnter={onEnter}
      />
    </div>
  );
};
