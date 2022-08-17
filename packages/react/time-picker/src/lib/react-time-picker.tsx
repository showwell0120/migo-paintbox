/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-pascal-case */
// @ts-nocheck

// FIXME: 在專案中使用這個套件時，react-datepicker 的 default import 會是整個 module，而不是 react-datepicker 中預設 export 的元件。為了暫時解決這個問題，在 JSX 中是 call ReactDatePicker.default。不過在 storybook 中會報錯，目前僅以文字說明。

import React from 'react';
import ReactDatePicker from 'react-datepicker';
import styled from '@emotion/styled';

import { Clock, Calendar3 } from '@paintbox/react-foundation';
import { FormFieldBaseProps, ChangeHandlerParams } from './declarations';
import {
  convertUTCToLocalDate,
  convertLocalToUTCDate,
} from '@paintbox/util-datetime';

import 'react-datepicker/dist/react-datepicker.css';
import './custom-react-datepicker.css';

/* eslint-disable-next-line */
export interface ReactTimePickerProps<NameType>
  extends FormFieldBaseProps<NameType> {
  dateLabel?: string;
  timeLabel?: string;
}

const Container = styled.div`
  width: 100%;
  min-width: 300px;
  font-size: 0.875rem;
  letter-spacing: 0.15px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const Column = styled.div`
  flex: 1;
`;

const Label = styled.div`
  margin-bottom: 6px;
`;

const Input = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
`;

export function ReactTimePicker<NameType>({
  name,
  value,
  min,
  dateLabel = 'Date',
  timeLabel = 'Time',
  onChange,
}: ReactTimePickerProps<NameType>) {
  const handleChange = (newDateObject: Date) => {
    // Use UTC+0 standard time to be real data.
    const converted = convertLocalToUTCDate(newDateObject);
    onChange && converted && onChange({ valid: true, value: converted, name });
  };

  return (
    <Container>
      <Column>
        <Label>{dateLabel}</Label>
        <Input>
          <Icon>
            <Calendar3 />
          </Icon>
          <ReactDatePicker.default
            className="date"
            selected={convertUTCToLocalDate(value)}
            placeholderText="DD/MMM/YYYY"
            dateFormat="dd / MMMM / yyyy"
            onChange={handleChange}
            {...(min && { minDate: new Date(min) })}
          />
        </Input>
      </Column>
      <Column>
        <Label>{timeLabel}</Label>
        <Input>
          <Icon>
            <Clock />
          </Icon>
          <ReactDatePicker.default
            className="time"
            placeholderText="00:00 a.m."
            selected={convertUTCToLocalDate(value)}
            onChange={handleChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption={timeLabel}
            dateFormat="h:mm aa"
          />
        </Input>
      </Column>
    </Container>
  );
}

export default ReactTimePicker;

export const TimepickerSample = () => {
  const [value, setValue] = React.useState<number | null>(null);

  const handleChange = (params: ChangeHandlerParams) => {
    setValue(params.value);
  };

  return (
    <div style={{ height: 400 }}>
      <ReactTimePicker<'field_name'>
        name="field_name"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
