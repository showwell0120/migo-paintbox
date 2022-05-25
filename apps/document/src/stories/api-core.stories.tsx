import React from 'react';
import { getTitles, getTitleUsage, CoreAPI } from '@paintbox/api-core';
import { Meta } from '@storybook/react';

function App() {
  const [status, setStatus] = React.useState<number>(0);
  const [titleID, setTitleID] = React.useState<string>('');
  const [usage, setUsage] = React.useState<unknown>();

  const canceller = CoreAPI.getCanceller();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitleID(e.currentTarget.value);
  }

  async function handleSubmit() {
    setStatus(0);
    const data = await getTitles('a', canceller);
    data && setStatus(data.status);
  }

  async function handleSubmitUsage() {
    setUsage(null);
    const data = await getTitleUsage(titleID, canceller);
    data && setUsage(data);
  }

  //   React.useEffect(() => {
  //     return () => {
  //       console.log('do this');
  //       canceller.abort();
  //     };
  //   });

  return (
    <div>
      <h2>Get titles</h2>
      <div>
        <button onClick={handleSubmit}>submit</button>
        <button onClick={() => canceller.abort()}>cancel</button>
      </div>
      <div>status: {status}</div>
      <h2>Get title usage</h2>
      <div>
        <label>title iD:</label>
        <input value={titleID} onChange={handleChange} />
        <button onClick={handleSubmitUsage}>submit</button>
      </div>
      <div>usage: {JSON.stringify(usage)}</div>
    </div>
  );
}

export default {
  component: App,
  title: 'CoreAPI',
} as Meta;

export const Primary = () => <App />;
