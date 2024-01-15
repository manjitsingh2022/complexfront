import { useState } from 'react';

export const useCommonState = (initialValue) => {
  const [commonState, setCommonState] = useState(initialValue);
  const updateCommonState = (newValue) => {
    setCommonState(newValue);
  };
  return [commonState, updateCommonState];
};

