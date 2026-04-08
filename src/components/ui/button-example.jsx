export default function ButtonExample({ 
  children, 
  variant = "primary", 
  size = "medium", 
  onClick, 
  disabled = false,
  className = "",
  type = "button"
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-sm", 
    large: "px-6 py-3 text-base"
  };
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 6px -1px var(--card-shadow)',
          transform: disabled ? 'none' : 'scale(1)',
          transition: 'all 0.2s ease'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-main)',
          border: '1px solid var(--border-color)',
          transition: 'all 0.2s ease'
        };
      case 'outline':
        return {
          backgroundColor: 'var(--bg-default)',
          color: 'var(--text-main)',
          border: '1px solid var(--border-color)',
          transition: 'all 0.2s ease'
        };
      case 'accent':
        return {
          background: 'linear-gradient(135deg, var(--brand-accent), var(--gradient-accent-strong-end))',
          color: 'var(--text-main)',
          border: 'none',
          boxShadow: '0 4px 6px -1px var(--card-shadow)',
          transform: disabled ? 'none' : 'scale(1)',
          transition: 'all 0.2s ease'
        };
      default:
        return {};
    }
  };
  
  const handleMouseEnter = (e) => {
    if (disabled) return;
    
    switch (variant) {
      case 'primary':
      case 'accent':
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 10px 25px -5px var(--card-shadow-hover)';
        break;
      case 'secondary':
        e.target.style.backgroundColor = 'var(--bg-default)';
        e.target.style.borderColor = 'var(--brand-primary)';
        break;
      case 'outline':
        e.target.style.backgroundColor = 'var(--bg-surface)';
        e.target.style.borderColor = 'var(--brand-primary)';
        break;
    }
  };
  
  const handleMouseLeave = (e) => {
    if (disabled) return;
    
    switch (variant) {
      case 'primary':
      case 'accent':
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 6px -1px var(--card-shadow)';
        break;
      case 'secondary':
        e.target.style.backgroundColor = 'var(--bg-surface)';
        e.target.style.borderColor = 'var(--border-color)';
        break;
      case 'outline':
        e.target.style.backgroundColor = 'var(--bg-default)';
        e.target.style.borderColor = 'var(--border-color)';
        break;
    }
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getVariantStyles()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        ${baseClasses}
        ${sizes[size]}
        ${disabledClasses}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </button>
  );
}