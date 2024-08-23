import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./index.module.scss";

import cross from "assets/vectors/cardModal/crossSvg.svg";
import arrow from "assets/vectors/authModal/arrowSvg.svg";

//вход
const loginSchema = yup
  .object({
    email: yup.string().email("Некорректный e-mail").required("E-mail обязателен"),
    password: yup
      .string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .required("Пароль обязателен"),
  })
  .required();

//регистрация
const registerSchema = yup
  .object({
    email: yup.string().email("Некорректный e-mail").required("E-mail обязателен"),
    password: yup
      .string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .required("Пароль обязателен"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли должны совпадать")
      .required("Подтверждение пароля обязательно"),
  })
  .required();

interface ILoginInput {
  email: string;
  password: string;
}

interface IRegisterInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export const AuthModal: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  console.log(isModalOpen);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //вход
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<ILoginInput>({
    resolver: yupResolver(loginSchema),
  });

  //регистрация
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm<IRegisterInput>({
    resolver: yupResolver(registerSchema),
  });

  //вход
  const onLoginSubmit: SubmitHandler<ILoginInput> = (data) => {
    console.log("Login Data:", data);
  };

  //регистрация
  const onRegisterSubmit: SubmitHandler<IRegisterInput> = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className={`${s.authModal} ${isModalOpen ? s.authModalOpen : s.authModalClosed}`}>
      {isLogin ? (
        <div className={s.login}>
          <div className={s.top}>
            <p className={s.enter}>Вход</p>
            <button className={s.closeModal} onClick={closeModal}>
              <img src={cross} alt="cross" />
            </button>
          </div>
          <form className={s.form} onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <div className={s.formGroup}>
              <input
                id="email"
                type="email"
                {...loginRegister("email")}
                className={loginErrors.email ? s.errorInput : ""}
                placeholder="E-mail"
              />
              {loginErrors.email && <p className={s.errorText}>{loginErrors.email?.message}</p>}
            </div>

            <div className={s.formGroup}>
              <input
                id="password"
                type="password"
                {...loginRegister("password")}
                className={loginErrors.password ? s.errorInput : ""}
                placeholder="Пароль"
              />
              {loginErrors.password && (
                <p className={s.errorText}>{loginErrors.password?.message}</p>
              )}
            </div>

            <div className={s.placeOrderBtn}>
              <button type="submit">Войти</button>
            </div>
          </form>
          <div className={s.registerBlock}>
            <button className={s.noAcc}>нет аккаунта?</button>
            <button className={s.registerBtn} onClick={() => setIsLogin(false)}>
              <p>Регистрация</p>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      ) : (
        <div className={s.register}>
          <div className={s.top}>
            <p className={s.registerTitle}>Регистрация</p>
            <button className={s.closeModal} onClick={closeModal}>
              <img src={cross} alt="cross" />
            </button>
          </div>
          <form className={s.form} onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
            <div className={s.formGroup}>
              <input
                id="email"
                type="email"
                {...registerRegister("email")}
                className={registerErrors.email ? s.errorInput : ""}
                placeholder="E-mail"
              />
              {registerErrors.email && (
                <p className={s.errorText}>{registerErrors.email?.message}</p>
              )}
            </div>

            <div className={s.formGroup}>
              <input
                id="password"
                type="password"
                {...registerRegister("password")}
                className={registerErrors.password ? s.errorInput : ""}
                placeholder="Пароль"
              />
              {registerErrors.password && (
                <p className={s.errorText}>{registerErrors.password?.message}</p>
              )}
            </div>

            <div className={s.formGroup}>
              <input
                id="confirmPassword"
                type="password"
                {...registerRegister("confirmPassword")}
                className={registerErrors.confirmPassword ? s.errorInput : ""}
                placeholder="Повторите Пароль"
              />
              {registerErrors.confirmPassword && (
                <p className={s.errorText}>{registerErrors.confirmPassword?.message}</p>
              )}
            </div>

            <div className={s.placeOrderBtn}>
              <button type="submit">Регистрация</button>
            </div>
          </form>
          <div className={s.registerBlock}>
            <button className={s.registerBtn} onClick={() => setIsLogin(true)}>
              <img src={arrow} alt="arrow" />
              <p>Вход</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
