import { useEffect } from 'react';

export function useFrameworkReady() {
  useEffect(() => {
    // This hook is used to ensure the framework is ready
    // before rendering any components that depend on it
  }, []);
}
