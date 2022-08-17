// import styles from './react-search-bar.module.scss';
import { SearchIcon } from '../images/SearchIcon';
import { CancelIcon } from '../images/CancelIcon';
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { debounce } from 'lodash';

/* eslint-disable-next-line */
export type CallbackProp = (t: string) => void

const containerStyle = css`
  height: 40px;
  position: relative;
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 12px;
  &:focus-within {
    border: 2px solid #6484FF;
  }
`;

const iconStyle = css`
  height: 100%;
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const inputStyle = css`
  width: 100%;
  font-size: 14px;
  color: #727272;
  background-color: transparent;
  border: 0px;
  margin-left: 20px;
  &:focus {
    outline: none;
  }
`;

export interface ReactSearchBarProps {
  placeholder?: string,
  onChange?: CallbackProp,
  onEnter?: CallbackProp,
  isDebounce?: boolean,
}

export const ReactSearchBar: React.FC<ReactSearchBarProps> = ({
  placeholder = 'Search',
  onChange,
  onEnter,
  isDebounce = true,
}) => {
  const [ keyword, setKeyword ] = useState('');
  const isFirstRender = useRef(true);

  const searchKeyword = keyword.trim();
  const onChangeHandler = debounce((keyword) => { 
    onChange && onChange(keyword);
  }, 500);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return
    }

    if (isDebounce) {
      onChangeHandler(searchKeyword);
    } else {
      onChange && onChange(searchKeyword);
    }
    
  } ,[searchKeyword, onChangeHandler, onChange, isDebounce]);

  const [ isFocus, setFocus ] = useState(false);
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
    onChange && onChange('');
    setFocus(false);
  };

  return (
    <div
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
      css={containerStyle}
    > 
      <SearchIcon />
      <input
        tabIndex={1}
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={e => setKeyword(e.target.value)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { e.stopPropagation() }}
        onKeyDown={handleKeyDown}
        css={inputStyle}
      />
      {(isFocus && keyword) && <div onClick={clearKeyword} css={iconStyle}><CancelIcon /></div>}
    </div>
  );
}
