import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface IUseToggleOutput {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
}

function useToggle(defaultValue?: boolean): IUseToggleOutput {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, setValue, toggle };
}

export default useToggle;
