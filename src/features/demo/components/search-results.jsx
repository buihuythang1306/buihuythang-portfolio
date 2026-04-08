import { useSearchParams } from "../hooks/use-search-params";
import ThemeIcon from "@/contexts/theme-icon-context";

export default function SearchResults() {
  const { searchTerm, filter } = useSearchParams();

  if (!searchTerm) {
    return null;
  }

  const mockResults = [
    { id: 1, title: `${searchTerm} Tutorial`, type: 'tutorial', popular: true },
    { id: 2, title: `Advanced ${searchTerm}`, type: 'guide', popular: false },
    { id: 3, title: `${searchTerm} Best Practices`, type: 'article', popular: true },
  ];

  const filteredResults = mockResults.filter(result => {
    if (filter === 'popular') return result.popular;
    if (filter === 'recent') return result.id > 1;
    return true;
  });

  return (
    <div className="search-results mt-8">
      <h3 
        style={{ color: 'var(--text-main)' }}
        className="text-lg font-semibold mb-4"
      >
        Kết quả tìm kiếm cho "{searchTerm}" ({filteredResults.length})
      </h3>
      
      <div className="grid gap-4">
        {filteredResults.map((result) => (
          <div 
            key={result.id}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}
            className="p-4 rounded-lg border transition-all duration-200"
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 10px 25px -5px var(--card-shadow-hover)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ThemeIcon 
                name="info" 
                folder="info" 
                className="w-4 h-4"
                style={{ backgroundColor: 'var(--brand-secondary)' }}
              />
              <h4 
                style={{ color: 'var(--text-main)' }}
                className="font-medium"
              >
                {result.title}
              </h4>
              {result.popular && (
                <span 
                  style={{
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-main)'
                  }}
                  className="px-2 py-1 text-xs rounded opacity-90"
                >
                  Phổ biến
                </span>
              )}
            </div>
            <p 
              style={{ color: 'var(--text-muted)' }}
              className="text-sm"
            >
              Loại: {result.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}