import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/theme-context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ThemeIcon from "@/contexts/theme-icon-context";
import ButtonExample from "@/components/ui/button-example";
import InlineLoader from "@/components/ui/inline-loader";
import SearchResults from "../components/search-results";
import ConsultationForm from "../components/consultation-form";
import { useSearchParams } from "../hooks/use-search-params";
import { homeSearchSchema } from "../rules/search-validation";
import "@/features/demo/styles/home-page.css";
import "@/features/demo/styles/consultation-form.css";

export default function HomePage() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const { searchTerm, setSearchTerm, filter, setFilter } = useSearchParams();
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm({
    resolver: yupResolver(homeSearchSchema),
    defaultValues: {
      searchTerm: searchTerm || '',
      filter: filter || 'all'
    }
  });

  const onSubmit = async (data) => {
    setSearchTerm(data.searchTerm);
    setFilter(data.filter);
    
    // Simulate search
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Search results for:', data);
  };

  const handleQuickSearch = (term) => {
    setValue('searchTerm', term);
    setSearchTerm(term);
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <div className="home-title">
          <ThemeIcon 
            name="home" 
            folder="home" 
            className="w-8 h-8 text-blue-600" 
          />
          {t("demo.title")}
        </div>
        
        <p className="home-description">
          {t("demo.description")}
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                {...register('searchTerm')}
                type="text"
                placeholder="Tìm kiếm..."
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.searchTerm && (
                <p className="text-red-500 text-sm mt-1">{errors.searchTerm.message}</p>
              )}
            </div>
            
            <select
              {...register('filter')}
              style={{
                backgroundColor: 'var(--bg-default)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)'
              }}
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--brand-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option value="all">Tất cả</option>
              <option value="recent">Gần đây</option>
              <option value="popular">Phổ biến</option>
            </select>
            
            <ButtonExample 
              type="submit" 
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? <InlineLoader size="small" /> : 'Tìm kiếm'}
            </ButtonExample>
          </div>
          {errors.filter && (
            <p className="text-red-500 text-sm mt-1">{errors.filter.message}</p>
          )}
        </form>

        {/* Quick Search */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['React', 'Vue', 'Angular', 'Node.js'].map((term) => (
            <button
              key={term}
              onClick={() => handleQuickSearch(term)}
              style={{
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-muted)',
                borderColor: 'var(--border-color)'
              }}
              className="px-3 py-1 text-sm rounded-full transition-all border hover:shadow-md"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--bg-default)';
                e.target.style.color = 'var(--text-main)';
                e.target.style.borderColor = 'var(--brand-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--bg-surface)';
                e.target.style.color = 'var(--text-muted)';
                e.target.style.borderColor = 'var(--border-color)';
              }}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Current Search Display */}
        {searchTerm && (
          <div style={{ color: 'var(--text-muted)' }} className="text-center">
            Đang tìm kiếm: <strong style={{ color: 'var(--text-main)' }}>{searchTerm}</strong> trong <strong style={{ color: 'var(--text-main)' }}>{filter}</strong>
          </div>
        )}
      </div>

      <div className="home-content">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <ThemeIcon 
                name="sun" 
                folder="common" 
                className="w-6 h-6 text-yellow-500" 
              />
            </div>
            <h3 className="feature-title">
              {t("common.theme")}
            </h3>
            <p className="feature-description">
              {isDarkMode ? t("common.dark") : t("common.light")} mode được kích hoạt
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ThemeIcon 
                name="info" 
                folder="info" 
                className="w-6 h-6 text-blue-500" 
              />
            </div>
            <h3 className="feature-title">
              {t("common.language")}
            </h3>
            <p className="feature-description">
              Hỗ trợ đa ngôn ngữ với i18next
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <InlineLoader size="small" />
            </div>
            <h3 className="feature-title">
              React Hook Form
            </h3>
            <p className="feature-description">
              Form validation với Yup schema
            </p>
          </div>
        </div>

        <div className="home-actions">
          <ButtonExample variant="primary" size="large">
            {t("demo.content")}
          </ButtonExample>
          
          <ButtonExample 
            variant="accent" 
            size="large"
            onClick={() => setShowConsultationForm(true)}
          >
            {t("demo.consultation.button")}
          </ButtonExample>
        </div>

        <SearchResults />

        {/* Consultation Form Modal */}
        {showConsultationForm && (
          <div className="consultation-modal">
            <div 
              className="modal-overlay"
              onClick={() => setShowConsultationForm(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  width: '100%',
                  maxWidth: '800px'
                }}
              >
                <ConsultationForm onClose={() => setShowConsultationForm(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}