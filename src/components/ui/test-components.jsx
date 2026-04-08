import ButtonExample from "./button-example";
import ThemeIcon from "@/contexts/theme-icon-context";
import { useTheme } from "@/contexts/theme-context";

export default function TestComponents() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="p-8 space-y-6" style={{ backgroundColor: 'var(--bg-body)' }}>
      <h2 style={{ color: 'var(--text-main)' }} className="text-2xl font-bold mb-4">
        Component Test Page
      </h2>
      
      {/* Button Tests */}
      <div className="space-y-4">
        <h3 style={{ color: 'var(--text-main)' }} className="text-lg font-semibold">Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <ButtonExample variant="primary">Primary Button</ButtonExample>
          <ButtonExample variant="secondary">Secondary Button</ButtonExample>
          <ButtonExample variant="outline">Outline Button</ButtonExample>
          <ButtonExample variant="accent">Accent Button</ButtonExample>
          <ButtonExample variant="primary" disabled>Disabled Button</ButtonExample>
        </div>
      </div>

      {/* Icon Tests */}
      <div className="space-y-4">
        <h3 style={{ color: 'var(--text-main)' }} className="text-lg font-semibold">Icons</h3>
        <div className="flex gap-4 items-center">
          <ThemeIcon 
            name="home" 
            folder="home" 
            className="w-6 h-6" 
            style={{ backgroundColor: 'var(--brand-primary)' }}
          />
          <ThemeIcon 
            name="info" 
            folder="info" 
            className="w-6 h-6" 
            style={{ backgroundColor: 'var(--brand-secondary)' }}
          />
          <ThemeIcon 
            name="sun" 
            folder="common" 
            className="w-6 h-6" 
            style={{ backgroundColor: 'var(--brand-accent)' }}
          />
          <ThemeIcon 
            name="moon" 
            folder="common" 
            className="w-6 h-6" 
            style={{ backgroundColor: 'var(--text-muted)' }} 
          />
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="space-y-4">
        <h3 style={{ color: 'var(--text-main)' }} className="text-lg font-semibold">Theme</h3>
        <div className="flex items-center gap-4">
          <span style={{ color: 'var(--text-muted)' }}>
            Current theme: {isDarkMode ? 'Dark' : 'Light'}
          </span>
          <ButtonExample onClick={toggleTheme} variant="outline">
            <ThemeIcon 
              name={isDarkMode ? "sun" : "moon"} 
              folder="common" 
              className="w-4 h-4 mr-2" 
              style={{ backgroundColor: 'currentColor' }}
            />
            Toggle Theme
          </ButtonExample>
        </div>
      </div>

      {/* CSS Variables Test */}
      <div className="space-y-4">
        <h3 style={{ color: 'var(--text-main)' }} className="text-lg font-semibold">CSS Variables</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--brand-primary)' }}>
            <span className="text-white text-sm">Brand Primary</span>
          </div>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--brand-secondary)' }}>
            <span className="text-white text-sm">Brand Secondary</span>
          </div>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--brand-accent)' }}>
            <span style={{ color: 'var(--text-main)' }} className="text-sm">Brand Accent</span>
          </div>
          <div className="p-4 rounded border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <span style={{ color: 'var(--text-main)' }} className="text-sm">Card Background</span>
          </div>
        </div>
      </div>
    </div>
  );
}