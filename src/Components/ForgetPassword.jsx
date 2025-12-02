import React, { useContext, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // যদি login পেজ থেকে ইমেইল ফিল্ড ফিল করা থাকে, সেটি এখানে autofill হবে
  const preFilledEmail = location.state?.email || "";
  React.useEffect(() => {
    if (preFilledEmail) {
      setEmail(preFilledEmail);
    }
  }, [preFilledEmail]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Please enter your email address!",
        icon: "warning",
      });
      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          text: "Check your Gmail inbox to reset your password.",
          icon: "success",
          confirmButtonText: "Go to Gmail",
        }).then(() => {
          window.location.href = "https://mail.google.com";
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-900 px-4 my-7 rounded-lg">
      <div className="card w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-lg">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Reset Your Password
          </h1>
          <hr className="my-5 border-gray-300 dark:border-slate-600" />

          <form onSubmit={handleReset} className="flex flex-col gap-4">
            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <button className="btn btn-neutral w-full mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
