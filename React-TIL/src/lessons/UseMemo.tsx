import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const getUsers = () => {
    console.log('계산!');
    return 10 * 10;
  };

  const users = useMemo(() => getUsers(), []);
  // const users = useMemo(() => getUsers(), []);

  return (
    <>
      <div>UseMemo</div>
      <div>counting</div>
      <div>{count}</div>
      <div>{users}</div>
      <button onClick={() => setCount(count + 1)}>count up</button>
    </>
  );
};

export default UseMemo;
