import { useQueryState } from 'nuqs';

export function useFormState() {
  const [activeTab, setActiveTab] = useQueryState('tab', {
    defaultValue: 'contact',
    clearOnDefault: true
  });
  
  const [showDemo, setShowDemo] = useQueryState('demo', {
    defaultValue: false,
    parse: (value) => value === 'true',
    serialize: (value) => value ? 'true' : null,
    clearOnDefault: true
  });

  return {
    activeTab,
    setActiveTab,
    showDemo,
    setShowDemo
  };
}