import * as yup from 'yup';

export const homeSearchSchema = yup.object({
  searchTerm: yup
    .string()
    .required('Từ khóa tìm kiếm là bắt buộc')
    .min(2, 'Từ khóa phải có ít nhất 2 ký tự')
    .max(100, 'Từ khóa không được quá 100 ký tự'),
  
  filter: yup
    .string()
    .oneOf(['all', 'recent', 'popular'], 'Bộ lọc không hợp lệ')
    .required('Bộ lọc là bắt buộc')
});