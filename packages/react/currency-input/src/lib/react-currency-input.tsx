import React from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

import { FormFieldBaseProps, ChangeHandlerParams } from '@paintbox/react-base';
import { SupportedCurrency, formatCurrency } from '@paintbox/util-i18n';

function getPlaceholder(
  min: number | null | undefined,
  max: number | null | undefined,
  currencyCode: string
) {
  if (typeof min === 'number' && typeof max === 'number') {
    return `Please enter value greater than ${currencyCode} ${min} and less than ${currencyCode} ${max}`;
  }
  if (typeof min === 'number') {
    return `Please enter a value greater than ${currencyCode} ${min}`;
  }
  if (typeof max === 'number') {
    return `Please enter a value less than ${currencyCode} ${max}`;
  }
  return;
}

/* eslint-disable-next-line */
export interface ReactCurrencyInputProps<NameType>
  extends FormFieldBaseProps<NameType> {
  label: string;
  step?: number;
  max?: number;
  currency?: SupportedCurrency;
  allowDecimal?: boolean;
  description?: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  min-width: 300px;
  font-size: 0.875rem;
  letter-spacing: 0.15px;
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.div`
  margin-bottom: 6px;
`;

const Middle = styled.div`
  position: relative;
`;

const PriceText = styled.div`
  position: absolute;
  top: 1px;
  left: 12px;
  height: 36px;
  line-height: 36px;
  width: calc(100% - 24px);
  background-color: var(--primary-white);
`;

const WarnText = styled.div`
  margin-top: 8px;
  color: var(--primary-brand);
`;

const Description = styled.div`
  color: var(--text-muted);
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`;

export function ReactCurrencyInput<NameType>({
  value,
  name,
  label,
  step = 1,
  min = 0,
  max,
  currency = 'IDR',
  allowDecimal = false,
  description,
  onChange,
}: ReactCurrencyInputProps<NameType>) {
  const currencyGetter = React.useMemo(
    () => formatCurrency(currency),
    [currency]
  );

  const currencyCode = currencyGetter
    ? currencyGetter.format(1000).split(/\s+/)[0]
    : '';

  const placeholder = React.useMemo(
    () => getPlaceholder(min, max, currencyCode),
    [min, max, currencyCode]
  );

  const [showPriceText, setShowPriceText] = React.useState<boolean>(
    value ? true : false
  );
  const [priceText, setPriceText] = React.useState<string | undefined>(
    value ? currencyGetter.format(value) : undefined
  );
  const [showInvalid, setShowInvalid] = React.useState<boolean>(false);
  const [invalidText, setInvalidText] = React.useState<string>();

  const inputElement = React.useRef<HTMLInputElement>(null);

  const validate = (value: number): boolean => {
    let warnMsg = '',
      isValid = true;
    if (
      !value ||
      (typeof max === 'number' && value >= max) ||
      (typeof min === 'number' && value < min)
    ) {
      warnMsg = 'Please enter a valid price.';
      isValid = false;
    } else if (!allowDecimal && value && !Number.isInteger(value)) {
      warnMsg = 'Not allowed to set value with decimal.';
      isValid = false;
    } else if (value && value % step !== 0) {
      warnMsg = `Please enter a value that can be divided with ${step} exactly.`;
      isValid = false;
    }

    setInvalidText(warnMsg);
    setShowInvalid(!isValid);

    return isValid;
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.valueAsNumber;
    const priceText = value ? currencyGetter.format(value) : undefined;
    setPriceText(priceText);
    const valid = validate(value);
    onChange && onChange({ valid, name, value });
  };

  const handleBlur = () => setShowPriceText(true);

  const handleFocus = () => showPriceText && setShowPriceText(false);

  const hanlePriceTextClick = React.useCallback(() => {
    setShowPriceText(false);
    inputElement?.current?.focus();
  }, []);

  return (
    <Container>
      <Upper>
        <Label style={{ color: 'var(--text-body)' }}>{label as string}</Label>
      </Upper>
      <Middle>
        <ClassNames>
          {({ css, cx }) => (
            <input
              ref={inputElement}
              type={'number'}
              value={value ? value : undefined}
              {...(min && { min })}
              max={max ? max - step : undefined}
              step={step}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={cx(
                css`
                  width: 100%;
                  height: 38px;
                  color: var(--text-muted);
                  background-color: transparent;
                  border: 1px solid var(--text-body);
                  border-radius: 4px;
                  padding: 12px;
                  box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                  -moz-box-sizing: border-box;
                  font-size: 0.875rem;
                  &::-webkit-inner-spin-button,
                  &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  &.warn-input {
                    border-color: var(--primary-brand);
                  }
                `,
                showInvalid && 'warn-input'
              )}
            />
          )}
        </ClassNames>
        {showPriceText && priceText && (
          <PriceText onClick={hanlePriceTextClick}>{priceText}</PriceText>
        )}
      </Middle>
      {showInvalid ? (
        <WarnText>{invalidText}</WarnText>
      ) : (
        description && <Description>{description}</Description>
      )}
    </Container>
  );
}