import styles from './react-search-bar.module.scss';
import { SearchIcon } from '../images/SearchIcon';
import { CancelIcon } from '../images/CancelIcon';
import React, { useState } from 'react'; 
import { debounce } from 'lodash';

/* eslint-disable-next-line */
export type CallbackProp = (t: string) => void

export interface ReactSearchBarProps {
  placeholder?: string,
  onChange?: CallbackProp,
  onEnter?: CallbackProp,
  time?: number,
}

export const ReactSearchBar: React.FC<ReactSearchBarProps> = ({
  placeholder = 'Search',
  onChange,
  onEnter,
  time = 500
}) => {
  const [ keyword, setKeyword ] = useState('');

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = (e.target.value).toString();
    setKeyword(searchKeyword);
    const handleChange = debounce((callback) => { callback(searchKeyword.trim()) }, time);
    if (onChange) {
      handleChange(onChange);
    }
    // 我發現如果當 searchKeyword 為 '' 而不觸發 onChange 事件時，會遇到以下情境：
    // 使用者僅管已經將輸入的字全部刪除，但是父元件永遠只收到最後一個傳上來的字，因而無法做其他的處理
    // 所以我這裡沒有加上這個判斷
  };

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
    if (e.key === 'Enter' && onEnter && keyword) {
      onEnter(keyword);
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
      className={styles['container']}
    > 
      <SearchIcon />
      <input
        tabIndex={1}
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={handleKeyChange}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { e.stopPropagation() }}
        onKeyDown={handleKeyDown}
        className={styles['input']}
      />
      {(isFocus && keyword) && <div onClick={clearKeyword} className={styles['icons']}><CancelIcon /></div>}
    </div>
  );
}
