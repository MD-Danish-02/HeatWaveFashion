import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, processGoogleLogin } from "./../redux/slices/userSlice";
import { useNavigate, Link } from "react-router-dom";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    dispatch(loginUser({ email, password }));
    navigate("/");
  };

  // --- Google Authentication Logic ---

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Google login success:", credentialResponse);

    try {
      const response = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: credentialResponse.credential }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Backend response for Google login:", data);

        dispatch(
          processGoogleLogin({
            token: data.token,
            user: data.user, // Make sure your userSlice can handle this format
          })
        );
        navigate("/");
      } else {
        console.error(
          "Failed to authenticate with backend:",
          data.message || "Unknown error"
        );
        alert(
          data.message || "Google login failed on server. Please try again."
        );
      }
    } catch (error) {
      console.error("Error sending Google ID token to backend:", error);
      alert("Something went wrong during Google login. Please try again.");
    }
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failed:", error);
    alert("Google login failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
      {" "}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Welcome Back
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-500 text-lg"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none placeholder-gray-500 text-lg"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-lg"
            >
              Log In
            </button>
          </form>

          {/* OR Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-3 text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              width="360px"
            />
          </div>

          {/* Signup Link */}
          <p className="mt-8 text-center text-md text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
            >
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
