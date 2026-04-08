import React from "react";

export default function ThemeIcon({ 
  name, 
  className = "", 
  color,
  folder = "common", // ← Thêm prop folder, mặc định là "common"
  useOriginalColor = false 
}) {
  if (!name) return null;
  
  // Tạo đường dẫn động dựa trên folder
  const iconUrl = `/icons/${folder}/${name}.svg`;

  // Nếu muốn giữ màu gốc → dùng <img>
  if (useOriginalColor) {
    return (
      <img
        src={iconUrl}
        alt={name}
        className={`icon ${className}`}
        onError={(e) => {
          e.target.style.display = "none";
          console.warn(`Icon not found: ${iconUrl}`);
        }}
      />
    );
  }

  // Nếu muốn đổi màu theo theme → dùng mask
  return (
    <span
      className={`icon ${className}`}
      style={{
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`,
        backgroundColor: color || 'currentColor',
      }}
      onError={(e) => {
        e.target.style.display = "none";
        console.warn(`Icon not found: ${iconUrl}`);
      }}
    />
  );
}