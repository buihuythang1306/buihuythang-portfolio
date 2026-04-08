import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ThemeIcon from "@/contexts/theme-icon-context";
import ButtonExample from "@/components/ui/button-example";
import InlineLoader from "@/components/ui/inline-loader";
import FormPreview from "../components/form-preview";
import { useFormState } from "../hooks/use-form-state";
import { contactFormSchema } from "../rules/form-validation";
import "@/features/info/styles/info-page.css";

export default function InfoPage() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { activeTab, setActiveTab, showDemo, setShowDemo } = useFormState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      age: ''
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    alert('Form đã được gửi thành công!');
    reset();
    setLoading(false);
  };

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="info-page">
      <div className="info-header">
        <div className="info-title">
          <ThemeIcon 
            name="info" 
            folder="info" 
            className="w-8 h-8 text-blue-600" 
          />
          {t("info.title")}
        </div>
        
        <p className="info-description">
          {t("info.description")}
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <ButtonExample
            variant={activeTab === 'contact' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('contact')}
          >
            Liên hệ
          </ButtonExample>
          <ButtonExample
            variant={activeTab === 'settings' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('settings')}
          >
            Cài đặt
          </ButtonExample>
          <ButtonExample
            variant={showDemo ? 'primary' : 'outline'}
            onClick={() => setShowDemo(!showDemo)}
          >
            {showDemo ? 'Ẩn Demo' : 'Hiện Demo'}
          </ButtonExample>
        </div>
      </div>

      <div className="info-content">
        {activeTab === 'contact' && (
          <div className="info-grid">
            <div className="info-section">
              <h2 className="section-title">Template Features</h2>
              <ul className="feature-list">
                <li className="feature-item">
                  <ThemeIcon name="home" folder="home" className="w-4 h-4 text-green-500" />
                  React Router v6 với lazy loading
                </li>
                <li className="feature-item">
                  <ThemeIcon name="sun" folder="common" className="w-4 h-4 text-yellow-500" />
                  Dark/Light theme support
                </li>
                <li className="feature-item">
                  <ThemeIcon name="info" folder="info" className="w-4 h-4 text-blue-500" />
                  i18n internationalization
                </li>
                <li className="feature-item">
                  <ThemeIcon name="moon" folder="common" className="w-4 h-4 text-purple-500" />
                  Tailwind CSS styling
                </li>
                <li className="feature-item">
                  <InlineLoader size="small" />
                  React Hook Form + Yup validation
                </li>
              </ul>
            </div>

            {showDemo && (
              <div className="info-section">
                <h2 className="section-title">Demo Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="demo-form">
                  <div className="form-group">
                    <label className="form-label">Tên</label>
                    <input
                      {...register('name')}
                      type="text"
                      className="form-input"
                      placeholder="Nhập tên của bạn"
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="form-input"
                      placeholder="Nhập email của bạn"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tuổi</label>
                    <input
                      {...register('age')}
                      type="number"
                      className="form-input"
                      placeholder="Nhập tuổi của bạn"
                    />
                    {errors.age && (
                      <p className="form-error">{errors.age.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tin nhắn</label>
                    <textarea
                      {...register('message')}
                      className="form-input"
                      rows="4"
                      placeholder="Nhập tin nhắn của bạn"
                    />
                    {errors.message && (
                      <p className="form-error">{errors.message.message}</p>
                    )}
                  </div>

                  <ButtonExample 
                    type="submit"
                    variant="primary" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <InlineLoader size="small" />
                        Đang gửi...
                      </>
                    ) : (
                      'Gửi form'
                    )}
                  </ButtonExample>
                </form>
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="info-section">
            <h2 className="section-title">Cài đặt hiện tại</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <span className="setting-label">
                  <ThemeIcon name="info" folder="info" className="w-4 h-4" />
                  {t("common.language")}:
                </span>
                <span className="setting-value">
                  {i18n.language === 'vi' ? t("common.vietnamese") : t("common.english")}
                </span>
              </div>
              <div className="setting-item">
                <span className="setting-label">
                  <ThemeIcon name="sun" folder="common" className="w-4 h-4" />
                  {t("common.theme")}:
                </span>
                <span className="setting-value">
                  {document.documentElement.classList.contains('dark') ? t("common.dark") : t("common.light")}
                </span>
              </div>
              <div className="setting-item">
                <span className="setting-label">
                  <ThemeIcon name="home" folder="home" className="w-4 h-4" />
                  Active Tab:
                </span>
                <span className="setting-value">
                  {activeTab}
                </span>
              </div>
              <div className="setting-item">
                <span className="setting-label">
                  <InlineLoader size="small" />
                  Demo Mode:
                </span>
                <span className="setting-value">
                  {showDemo ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="info-actions">
          <ButtonExample 
            variant="primary" 
            onClick={handleAction}
            disabled={loading}
          >
            {loading ? (
              <>
                <InlineLoader size="small" />
                Loading...
              </>
            ) : (
              t("info.content")
            )}
          </ButtonExample>
        </div>

        {/* Form Values Display (for debugging) */}
        {showDemo && Object.keys(watchedValues).some(key => watchedValues[key]) && (
          <div className="info-section mt-4">
            <FormPreview formData={watchedValues} />
          </div>
        )}
      </div>
    </div>
  );
}