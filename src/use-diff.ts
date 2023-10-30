import { useEffect, useRef, useState } from 'react';

type Deps = unknown[];

// some very important change
// another important change
// another
// foo

export const useDiff = (deps: Deps): void => {
  const prevDepsRef = useRef<Deps>(deps);

  useEffect(() => {
    const { current: prevDeps } = prevDepsRef;
    const diffKeys = deps.filter((dep, index) => dep !== prevDeps[index]);

    if (diffKeys.length) {
      console.log(`Changed dependencies: ${diffKeys}`);
    }

    prevDepsRef.current = deps;
  }, [deps]);
};
