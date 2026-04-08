import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import ButtonExample from '@/components/ui/button-example';
import InlineLoader from '@/components/ui/inline-loader';
import ThemeIcon from '@/contexts/theme-icon-context';
import { consultationFormSchema } from '../rules/consultation-validation';
import { 
  SERVICE_OPTIONS, 
  BUDGET_OPTIONS, 
  TIMELINE_OPTIONS, 
  CONTACT_METHOD_OPTIONS 
} from '../constants/consultation-constants';

export default function ConsultationForm({ onClose }) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(consultationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
      timeline: '',
      contactMethod: '',
      agreeTerms: false
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Consultation form submitted:', data);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        reset();
        if (onClose) onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="consultation-form-success">
        <div className="text-center py-8">
          <div 
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--brand-accent)' }}
          >
            <ThemeIcon 
              name="info" 
              folder="info" 
              className="w-8 h-8"
              style={{ backgroundColor: 'var(--text-main)' }}
            />
          </div>
          <h3 
            style={{ color: 'var(--text-main)' }}
            className="text-xl font-semibold mb-2"
          >
            Gửi thông tin thành công!
          </h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Chúng tôi sẽ liên hệ với bạn trong vòng 24h. Cảm ơn bạn đã quan tâm!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="consultation-form">
      <div className="form-header mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 
            style={{ color: 'var(--text-main)' }}
            className="text-xl font-semibold"
          >
            Đăng ký tư vấn miễn phí
          </h3>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-muted)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--border-color)';
                e.target.style.color = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--bg-surface)';
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              ✕
            </button>
          )}
        </div>
        <p style={{ color: 'var(--text-muted)' }} className="text-sm">
          Vui lòng điền đầy đủ thông tin để chúng tôi có thể tư vấn tốt nhất cho bạn
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="form-section">
          <h4 
            style={{ color: 'var(--text-main)' }}
            className="font-medium mb-4"
          >
            Thông tin cá nhân
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Họ và tên *
              </label>
              <input
                {...register('fullName')}
                type="text"
                placeholder="Nhập họ và tên của bạn"
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.fullName ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.fullName ? '#ef4444' : 'var(--border-color)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="example@email.com"
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.email ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--brand-primary)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label 
              style={{ color: 'var(--text-main)' }}
              className="block text-sm font-medium mb-2"
            >
              Số điện thoại *
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="0123456789"
              style={{
                backgroundColor: 'var(--bg-default)',
                borderColor: errors.phone ? '#ef4444' : 'var(--border-color)',
                color: 'var(--text-main)'
              }}
              className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--brand-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.phone ? '#ef4444' : 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Project Information */}
        <div className="form-section">
          <h4 
            style={{ color: 'var(--text-main)' }}
            className="font-medium mb-4"
          >
            Thông tin dự án
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Dịch vụ cần tư vấn *
              </label>
              <select
                {...register('service')}
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.service ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
              >
                <option value="">Chọn dịch vụ</option>
                {SERVICE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
              )}
            </div>

            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Ngân sách dự kiến *
              </label>
              <select
                {...register('budget')}
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.budget ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
              >
                <option value="">Chọn ngân sách</option>
                {BUDGET_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label 
              style={{ color: 'var(--text-main)' }}
              className="block text-sm font-medium mb-2"
            >
              Mô tả yêu cầu chi tiết *
            </label>
            <textarea
              {...register('message')}
              rows="4"
              placeholder="Mô tả chi tiết về dự án, yêu cầu kỹ thuật, tính năng mong muốn..."
              style={{
                backgroundColor: 'var(--bg-default)',
                borderColor: errors.message ? '#ef4444' : 'var(--border-color)',
                color: 'var(--text-main)'
              }}
              className="w-full px-3 py-2 border rounded-lg text-sm transition-all resize-vertical"
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--brand-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(30, 56, 136, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Thời gian mong muốn *
              </label>
              <select
                {...register('timeline')}
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.timeline ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
              >
                <option value="">Chọn thời gian</option>
                {TIMELINE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.timeline && (
                <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>
              )}
            </div>

            <div className="form-group">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-sm font-medium mb-2"
              >
                Phương thức liên hệ ưu tiên *
              </label>
              <select
                {...register('contactMethod')}
                style={{
                  backgroundColor: 'var(--bg-default)',
                  borderColor: errors.contactMethod ? '#ef4444' : 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full px-3 py-2 border rounded-lg text-sm transition-all"
              >
                <option value="">Chọn phương thức</option>
                {CONTACT_METHOD_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.contactMethod && (
                <p className="text-red-500 text-xs mt-1">{errors.contactMethod.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="form-group">
          <label className="flex items-start gap-3">
            <input
              {...register('agreeTerms')}
              type="checkbox"
              className="mt-1"
              style={{
                accentColor: 'var(--brand-primary)'
              }}
            />
            <span 
              style={{ color: 'var(--text-muted)' }}
              className="text-sm"
            >
              Tôi đồng ý với{' '}
              <a 
                href="#" 
                style={{ color: 'var(--brand-primary)' }}
                className="underline hover:no-underline"
              >
                điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a 
                href="#" 
                style={{ color: 'var(--brand-primary)' }}
                className="underline hover:no-underline"
              >
                chính sách bảo mật
              </a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-500 text-xs mt-1">{errors.agreeTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-actions pt-4">
          <ButtonExample
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <InlineLoader size="small" />
                Đang gửi thông tin...
              </>
            ) : (
              'Gửi thông tin tư vấn'
            )}
          </ButtonExample>
        </div>
      </form>

      {/* Form Preview (Development) */}
      {process.env.NODE_ENV === 'development' && Object.keys(watchedValues).some(key => watchedValues[key]) && (
        <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h4 style={{ color: 'var(--text-main)' }} className="font-medium mb-2">
            Form Data Preview (Dev Mode)
          </h4>
          <pre 
            style={{ color: 'var(--text-muted)' }}
            className="text-xs overflow-auto"
          >
            {JSON.stringify(watchedValues, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}