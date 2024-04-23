import * as Yup from 'yup';

// login validation
export const validatorLoginSchema = Yup.object().shape({
    login: Yup.string()
    .matches(/^[a-zA-Z0-9_-]+$/, 'Логин может содержать только буквы, цифры, дефис и подчеркивание')
    .required('Введите логин'),
    password: Yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Введите пароль'),
  });

export const validatorZehsCreateShema = Yup.object().shape({
  login: Yup.string()
  .matches(/^[a-zA-Z0-9_-]+$/, 'Логин цеха может содержать только буквы, цифры, дефис и подчеркивание')
  .required('Введите логин цеха'),
  id: Yup.string().max(4, 'Пароль должен содержать максимум 4 символов').required('Введите id цеха'),
});

export const validatorUserCreateShema = Yup.object().shape({
  login: Yup.string()
  .matches(/^[a-zA-Z0-9_-]+$/, 'Логин может содержать только буквы, цифры, дефис и подчеркивание')
  .required('Введите логин'),
  password: Yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Введите пароль'),
  name: Yup.string().min(2, 'Имя должно содержать минимум 2 символа').required('Введите имя'),
  role: Yup.string().required('Выберите роль'),
})

export const validatorRolesSchema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[a-zA-Z0-9_-]+$/, 'Роль может содержать только буквы, цифры, дефис и подчеркивание')
  .required('Введите логин'),
});
