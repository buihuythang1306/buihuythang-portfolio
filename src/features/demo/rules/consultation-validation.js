import * as yup from 'yup';

export const consultationFormSchema = yup.object({
  fullName: yup
    .string()
    .required('Họ và tên là bắt buộc')
    .min(2, 'Họ và tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ và tên không được quá 50 ký tự')
    .matches(/^[a-zA-ZÀ-ỹ\s]+$/, 'Họ và tên chỉ được chứa chữ cái và khoảng trắng'),
  
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không hợp lệ')
    .max(100, 'Email không được quá 100 ký tự'),
  
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(/^[0-9+\-\s()]+$/, 'Số điện thoại không hợp lệ')
    .min(10, 'Số điện thoại phải có ít nhất 10 số')
    .max(15, 'Số điện thoại không được quá 15 số'),
  
  service: yup
    .string()
    .required('Vui lòng chọn dịch vụ cần tư vấn')
    .oneOf(['web-development', 'mobile-app', 'ui-ux-design', 'consulting', 'other'], 'Dịch vụ không hợp lệ'),
  
  budget: yup
    .string()
    .required('Vui lòng chọn ngân sách dự kiến')
    .oneOf(['under-10m', '10m-50m', '50m-100m', 'over-100m', 'discuss'], 'Ngân sách không hợp lệ'),
  
  message: yup
    .string()
    .required('Mô tả yêu cầu là bắt buộc')
    .min(20, 'Mô tả yêu cầu phải có ít nhất 20 ký tự')
    .max(1000, 'Mô tả yêu cầu không được quá 1000 ký tự'),
  
  timeline: yup
    .string()
    .required('Vui lòng chọn thời gian mong muốn')
    .oneOf(['asap', '1-month', '2-3-months', '3-6-months', 'flexible'], 'Thời gian không hợp lệ'),
  
  contactMethod: yup
    .string()
    .required('Vui lòng chọn phương thức liên hệ ưu tiên')
    .oneOf(['email', 'phone', 'zalo', 'teams'], 'Phương thức liên hệ không hợp lệ'),
  
  agreeTerms: yup
    .boolean()
    .oneOf([true], 'Bạn phải đồng ý với điều khoản và chính sách bảo mật')
});