import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const StyledP = styled.p`
    color: red;
`

function Signt() {
  const schema = yup.object().shape({
    Fullname: yup.string().required('Vui lòng nhập họ tên'),
    Age: yup
      .number()
      .positive('Tuổi phải là số dương')
      .integer('Tuổi phải là số nguyên')
      .min(18, 'Phải lớn hơn hoặc bằng 18 tuổi')
      .required('Vui lòng nhập tuổi'),
    Pass: yup.string().min(4, 'Mật khẩu phải có ít nhất 4 ký tự').required('Vui lòng nhập mật khẩu'),
    ConfirmPass: yup
      .string()
      .oneOf([yup.ref('Pass'), null], 'Mật khẩu không khớp')
      .required('Vui lòng xác nhận mật khẩu'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='text' placeholder='Nhập họ tên' {...register('Fullname')} /> <br />
        {errors.Fullname && <StyledP>{errors.Fullname.message}</StyledP>}
        <input type='number' placeholder='Nhập tuổi' {...register('Age')} /> <br />
        {errors.Age && <StyledP>{errors.Age.message}</StyledP>}
        <input type='password' placeholder='Nhập mật khẩu' {...register('Pass')} /> <br />
        {errors.Pass && <StyledP>{errors.Pass.message}</StyledP>}
        <input type='password' placeholder='Nhập lại mật khẩu' {...register('ConfirmPass')} /> <br />
        {errors.ConfirmPass && <StyledP>{errors.ConfirmPass.message}</StyledP>}
        <input type='submit' />
      </div>
    </form>
  );
}

export default Signt;
