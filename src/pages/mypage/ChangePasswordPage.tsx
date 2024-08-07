import { useState, useEffect } from 'react';

const ChangePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{};:'",.<>/?\\|[\]~`]).{8,16}$/;
    return passwordRegex.test(password);
  };
  const handleChangePassword = () => {
    if (isFormValid) {
      console.log('비밀번호 변경 성공');
    }
  };
  useEffect(() => {
    const newErrors = { password: '', newPassword: '', confirmPassword: '' };
    //Fix
    if (touched.password && !validatePassword(password)) {
      newErrors.password = '비밀번호는 8자 이상 16자 이하이며, 숫자, 영문, 특수문자를 포함해야 합니다.';
    }
    if (touched.newPassword && !validatePassword(newPassword)) {
      newErrors.newPassword = '비밀번호는 8자 이상 16자 이하이며, 숫자, 영문, 특수문자를 포함해야 합니다.';
    }
    if (touched.confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some((error) => error !== '');
    setIsFormValid(isValid);
  }, [password, newPassword, confirmPassword, touched]);
  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] mb:w-full mb:h-full bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] mb:mt-[5rem] h-[2rem] text-Light_CategoryText_Icon_Contents font-semibold text-[1.625rem] dark:text-Dark_Text_Name">
        비밀번호 변경
      </h1>
      <div className="mt-[5.5rem] flex flex-col w-[47.875rem] h-[32.25rem] mb:w-[36rem]  bg-Light_Layout-300 rounded-[0.9375rem] dark:bg-Dark_Layout-200">
        <div className="mt-[5.6875rem] flex w-[47.875rem] h-[3rem] justify-evenly mb:w-[36rem]">
          <label
            className="w-[8.6875rem] h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="nowPw"
          >
            현재 비밀번호
          </label>
          <div className="w-[25.0625rem]">
            <input
              className="w-[24.375rem] outline-none bg-Light_Layout-300 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_AboutMe text-[0.85rem] dark:bg-Dark_Layout-200 dark:text-Dark_Text_Name"
              placeholder="현재 비밀번호"
              type="password"
              name="nowPw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setTouched({ ...touched, password: true })}
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents dark:border-Dark_Text_AboutMe" />
            <div className="w-[24.375rem] font-pre text-[0.8rem] text-error">{touched.password && errors.password}</div>
          </div>
        </div>
        <div className="mt-[3.25rem] flex w-[47.875rem] h-[3rem] justify-evenly mb:w-[36rem]">
          <label
            className="w-[8.6875rem] h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="newPw"
          >
            새 비밀번호
          </label>
          <div className="w-[25.0625rem] ">
            <input
              className="w-[24.375rem] outline-none bg-Light_Layout-300 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_AboutMe text-[0.85rem] dark:bg-Dark_Layout-200 dark:text-Dark_Text_Name"
              placeholder="새 비밀번호"
              type="password"
              name="newPw"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onFocus={() => setTouched({ ...touched, newPassword: true })}
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents dark:border-Dark_Text_AboutMe" />
            <div className="w-[24.375rem] font-pre text-[0.8rem] text-error">
              {touched.newPassword && errors.newPassword}
            </div>
          </div>
        </div>
        <div className="mt-[3.25rem] flex w-[47.875rem] h-[3rem] justify-evenly mb:w-[36rem]">
          <label
            className="w-[8.6875rem] h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="newPwCheck"
          >
            새 비밀번호 확인
          </label>
          <div className="w-[25.0625rem]">
            <input
              className="w-[24.375rem] outline-none bg-Light_Layout-300 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_AboutMe text-[0.85rem] dark:bg-Dark_Layout-200 dark:text-Dark_Text_Name"
              placeholder="비밀번호 확인"
              type="password"
              name="newPwCheck"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setTouched({ ...touched, confirmPassword: true })}
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents dark:border-Dark_Text_AboutMe" />
            <div className="h-[0.875rem]">
              <div className="w-[24.375rem] font-pre text-[0.8rem] text-error">
                {touched.confirmPassword && errors.confirmPassword}
              </div>
            </div>
          </div>
        </div>
        <button
          className={`mt-[3.8125rem] mx-auto w-[11.0625rem] h-[3rem] bg-Button font-pre text-Light_Layout-100 text-[1.5625rem] border rounded-[1.5625rem] ${!isFormValid && 'opacity-50 cursor-not-allowed}'}`}
          onClick={handleChangePassword}
          disabled={!isFormValid}
        >
          변경
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
