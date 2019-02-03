import { useState, SyntheticEvent } from 'react';

export function useInput(initial = '') {
  const [value, setValue] = useState(initial);

  function onChange(e: any) {
    setValue(e.target.value);
  }

  return { value, onChange };
}
