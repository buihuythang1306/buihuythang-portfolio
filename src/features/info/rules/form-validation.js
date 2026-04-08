import * as yup from 'yup';

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Tên là bắt buộc')
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(50, 'Tên không được quá 50 ký tự'),
  
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không hợp lệ'),
  
  message: yup
    .string()
    .required('Tin nhắn là bắt buộc')
    .min(10, 'Tin nhắn phải có ít nhất 10 ký tự')
    .max(500, 'Tin nhắn không được quá 500 ký tự'),
  
  age: yup
    .number()
    .typeError('Tuổi phải là số')
    .required('Tuổi là bắt buộc')
    .min(1, 'Tuổi phải lớn hơn 0')
    .max(120, 'Tuổi không hợp lệ')
});

export const searchFormSchema = yup.object({
  query: yup
    .string()
    .required('Từ khóa tìm kiếm là bắt buộc')
    .min(1, 'Từ khóa phải có ít nhất 1 ký tự'),
  
  category: yup
    .string()
    .required('Danh mục là bắt buộc')
});