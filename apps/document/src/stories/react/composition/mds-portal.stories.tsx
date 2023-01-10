import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { ReactSelectOption, OptionItem } from '@paintbox/react-select-option';
import { ReactButton } from '@paintbox/react-button';
import { ReactTabs, TabItem } from '@paintbox/react-tabs';
import { ReactDialog } from '@paintbox/react-dialog';

const tabs: TabItem[] = [
  { id: 1, name: 'MDS Swapping' },
  { id: 2, name: 'Deployment CID registration' },
];

const tempOpts: OptionItem[] = [
  { id: '1', name: 'MDS Swapping' },
  { id: '2', name: 'Deployment CID registration' },
];

interface OptionsProps {
  data: Record<any, any>;
  onChange: (data: Record<any, any>) => void;
}

function SwapOptions({ onChange, data }: OptionsProps) {
  return (
    <>
      <ReactSelectOption
        prefix="CID: "
        options={tempOpts}
        option={data['CID']}
        onChange={(newCID) => {
          onChange({ ...data, CID: newCID });
        }}
      />
      <ReactSelectOption
        prefix="Service Unit: "
        options={tempOpts}
        option={data['serviceUnit']}
        onChange={(newServiceUnit) => {
          onChange({ ...data, serviceUnit: newServiceUnit });
        }}
      />
    </>
  );
}

function CIDRegistrationOptions({ onChange, data }: OptionsProps) {
  return (
    <>
      <ReactSelectOption
        prefix="Serial No: "
        options={tempOpts}
        option={data['serialNo']}
        onChange={(newSerialNo) => {
          onChange({ ...data, serialNo: newSerialNo });
        }}
      />
      <ReactSelectOption
        prefix="CID: "
        options={tempOpts}
        option={data['CID']}
        onChange={(newCID) => {
          onChange({ ...data, CID: newCID });
        }}
      />
    </>
  );
}

export function App() {
  const [currentTabID, setCurrentTabID] = React.useState<number>(1);
  const [data, setData] = React.useState<Record<any, any>>({});
  const [showDialog, setShowDialog] = React.useState<boolean>(false);

  const enableSubmit =
    Object.keys(data).length > 1 &&
    Object.values(data).every((v) => v !== undefined);

  const dialogMsg = enableSubmit ? (
    <div>
      {currentTabID === 1 ? (
        <p>
          Are you sure to swap from {data['serviceUnit']['name']} to{' '}
          {data['CID']['name']}?
        </p>
      ) : (
        <p>
          Are you sure to write CID: {data['CID']['name']} to the MDS, instead
          of
          {data['serialNo']['name']}?
        </p>
      )}
      <p>You cannot change once confirmed.</p>
    </div>
  ) : (
    <div>Please fill all options.</div>
  );

  const handleTabChange = (tab: number) => {
    setData({});
    setCurrentTabID(tab);
  };

  return (
    <div className={'select-option-app'}>
      <ReactTabs
        tabs={tabs}
        currentTabID={currentTabID}
        onTabChange={handleTabChange}
      />
      <div className={'select-option-options'}>
        {currentTabID === 1 ? (
          <SwapOptions onChange={setData} data={data} />
        ) : (
          <CIDRegistrationOptions onChange={setData} data={data} />
        )}
      </div>
      <div className={'select-option-buttons'}>
        <ReactButton variant="outlined" onClick={() => setData({})}>
          Clear
        </ReactButton>
        <ReactButton
          variant="contained"
          theme={enableSubmit ? 'primary-primary' : 'primary-muted'}
          onClick={enableSubmit ? () => setShowDialog(true) : undefined}
        >
          {currentTabID === 1 ? 'Swap' : 'Deploy'}
        </ReactButton>
      </div>
      <ReactDialog
        isOpen={showDialog}
        actionPosition="bottom"
        onClose={() => setShowDialog(false)}
        onCancel={() => setShowDialog(false)}
        onSubmit={() => console.log(data)}
      >
        {dialogMsg}
      </ReactDialog>
    </div>
  );
}

export default {
  component: App,
  title: 'React/Composition/MDS Portal',
} as ComponentMeta<typeof App>;
