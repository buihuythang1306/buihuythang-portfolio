export default function FormPreview({ formData }) {
  if (!formData || Object.keys(formData).length === 0) {
    return (
      <div 
        style={{ color: 'var(--text-muted)' }}
        className="text-center py-8"
      >
        Nhập dữ liệu vào form để xem preview
      </div>
    );
  }

  return (
    <div className="form-preview">
      <h3 
        style={{ color: 'var(--text-main)' }}
        className="text-lg font-semibold mb-4"
      >
        Preview Form Data
      </h3>
      
      <div className="space-y-3">
        {Object.entries(formData).map(([key, value]) => (
          value && (
            <div 
              key={key} 
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-color)'
              }}
              className="flex justify-between items-center p-3 rounded border"
            >
              <span 
                style={{ color: 'var(--text-main)' }}
                className="font-medium capitalize"
              >
                {key}:
              </span>
              <span 
                style={{
                  color: 'var(--text-muted)',
                  backgroundColor: 'var(--bg-default)',
                  borderColor: 'var(--border-color)'
                }}
                className="px-2 py-1 rounded border text-sm"
              >
                {typeof value === 'string' && value.length > 50 
                  ? `${value.substring(0, 50)}...` 
                  : value
                }
              </span>
            </div>
          )
        ))}
      </div>
    </div>
  );
}