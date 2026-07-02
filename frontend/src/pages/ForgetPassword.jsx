
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { forgotPasswordFrontend } from "../hooks/authActions";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ForgetPassword() {

    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if(email) {
            console.log(email);
            dispatch(forgotPasswordFrontend(email));
        } else {
            toast.error("Email is required");
        }

        setEmail("");
    }


    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-4">

            {/* Background Glow */}
            <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">

                    {/* Logo */}
                    <div className="mb-8 flex flex-col items-center">
                        <h1 className="mt-5 text-3xl font-bold text-white">
                            Forgot Password?
                        </h1>

                        <p className="mt-3 text-center text-sm leading-6 text-gray-400">
                            Enter your registered email address and we'll send
                            you a password reset link.
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className="space-y-6">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                name = "email"
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder="john@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                            Send Reset Link
                        </button>

                    </form>

                    {/* Footer */}
                    <div className="mt-8 border-t border-white/10 pt-6 text-center">

                        <p className="text-sm text-gray-400">
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-cyan-400 transition hover:text-cyan-300"
                            >
                                Back to Login
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}