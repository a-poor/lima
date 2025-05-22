import { createAtom } from '@xstate/store';
import { useSelector } from '@xstate/store/react';

const selectedAtom = createAtom<{ selected: string | null }>({ selected: null });

export function useMail() {
  return [
    useSelector(selectedAtom, (s) => s),
    (value: { selected: string | null }) => selectedAtom.set({...value}),
  ] as const;
}
