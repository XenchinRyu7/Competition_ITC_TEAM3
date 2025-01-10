import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/images/logo/logo-dark.png";
import Logo from "../../assets/images/logo/logo-icon.png";
import { useAuth } from "../../hooks/useAuth";
import SuccessAlerts from "../../components/Alerts/SuccessAlerts";
import FailedAlerts from "../../components/Alerts/FailedAlerts";
import WarningAlerts from "../../components/Alerts/WarningAlerts";
import TextField from "../../components/Forms/TextField/TextField";
import { MdOutlineEmail } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error, success, isAuthenticated } = useAuth();

  const validate = () => {
    const tempErrors = { ...errors };
    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (formData.email === "" || !emailPattern.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    } else {
      tempErrors.email = "";
    }

    if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else {
      tempErrors.password = "";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<
    "success" | "error" | "warning" | null
  >(null);

  const showAlert = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      await login({
        email: formData.email,
        password: formData.password,
      });

      if (loading) {
        showAlert("Login in, please wait...", "warning");
      } else if (success) {
        showAlert(success, "success");
      } else if (error) {
        showAlert(error, "error");
      }
    }
  };

  if (isAuthenticated) {
    window.location.href = "/user/list-service";
  }

  return (
    <div className="relative">
      {alertType === "success" && alertMessage && (
        <SuccessAlerts tittle="Success" message={alertMessage} />
      )}
      {alertType === "error" && alertMessage && (
        <FailedAlerts tittle="Error" message={alertMessage} />
      )}
      {alertType === "warning" && alertMessage && (
        <WarningAlerts tittle="Warning" message={alertMessage} />
      )}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full md:block md:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark md:w-1/2 md:border-l-2 min-h-screen flex items-center">
            <div className="w-full p-4 sm:p-6 xl:p-">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to SKillBridge
              </h2>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <TextField
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <span className="absolute right-4 top-4">
                      <MdOutlineEmail size={24} />
                    </span>
                    {errors.email && (
                      <span className="text-red-500">{errors.password}</span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <TextField
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />

                    <span className="absolute right-4 top-4">
                      <LuLockKeyhole />
                    </span>
                    {errors.password && (
                      <span className="text-red-500">{errors.password}</span>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link to="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
