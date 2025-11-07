'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('✅ Form Submitted:', data);
  };

  return (
    <div className="internet-package-footer__profile flex items-center justify-center min-h-screen bg-white">
      <div className="internet-package-footer__profile-container w-[360px] h-[480px] bg-white border-2 border-[#FFD700] rounded-xl shadow-md overflow-y-auto p-6">
        <h2 className="internet-package-footer__profile-title text-center text-[#005B9E] text-2xl font-bold mb-6">
          اطلاعات کاربری
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="internet-package-footer__profile-form flex flex-col gap-5"
        >
          <div className="internet-package-footer__profile-form__group flex flex-col">
            <label
              htmlFor="name"
              className="internet-package-footer__profile-form__label text-sm text-gray-700 mb-1"
            >
              نام
            </label>
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'نام الزامی است',
                validate: {
                  isPersian: (value) =>
                    /^[\u0600-\u06FF\s]+$/.test(value) || 'نام کاربری اشتباه است',
                  isString: (value) =>
                    typeof value === 'string' || 'نام کاربری اشتباه است',
                },
              })}
              placeholder="نام به فارسی"
              className="internet-package-footer__profile-form__input border border-[#FFD700] rounded-lg p-2 focus:outline-none focus:border-[#005B9E] focus:shadow-[0_0_6px_rgba(0,91,158,0.3)]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="internet-package-footer__profile-form__group flex flex-col">
            <label
              htmlFor="phone"
              className="internet-package-footer__profile-form__label text-sm text-gray-700 mb-1"
            >
              شماره تماس
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'شماره تماس الزامی است',
                validate: {
                  hasCorrectFormat: (value) =>
                    /^0\d{10}$/.test(value) ||
                    'شماره تلفن همراه اشتباه است',
                },
              })}
              placeholder="مثلاً 09123456789"
              className="internet-package-footer__profile-form__input border border-[#FFD700] rounded-lg p-2 focus:outline-none focus:border-[#005B9E] focus:shadow-[0_0_6px_rgba(0,91,158,0.3)]"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="internet-package-footer__profile-form__group flex flex-col">
            <label
              htmlFor="email"
              className="internet-package-footer__profile-form__label text-sm text-gray-700 mb-1"
            >
              آدرس ایمیل
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'ایمیل الزامی است',
                validate: {
                  hasGmail: (value) =>
                    value.endsWith('@gmail.com')
                },
              })}
              placeholder="example@gmail.com"
              className="internet-package-footer__profile-form__input border border-[#FFD700] rounded-lg p-2 focus:outline-none focus:border-[#005B9E] focus:shadow-[0_0_6px_rgba(0,91,158,0.3)]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="internet-package-footer__profile-form__buttons flex gap-3 justify-between mt-2">
            <button
              type="submit"
              className="internet-package-footer__profile-form__submit w-full bg-white border-2 border-[#FFD700] text-[#005B9E] font-bold py-2.5 rounded-lg hover:bg-[#f2ca00] transition-all duration-300"
            >
              ثبت نام
            </button>

            <button
              type="button"
              className="internet-package-footer__profile-form__login w-full bg-white border-2 border-[#FFD700] text-[#005B9E] font-bold py-2.5 rounded-lg hover:bg-[#FFF6B0] transition-all duration-300"
              onClick={() => console.log('ورود')}
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
