import { useCallback, useEffect, useState } from 'react';

const UseCallBack = () => {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log('변경되었습니다');
  }, [someFunction]);

  return (
    <div>
      <div>UseCallBack</div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>count up</button>
      <button onClick={() => someFunction()}>FN</button>
    </div>
  );
};

export default UseCallBack;
