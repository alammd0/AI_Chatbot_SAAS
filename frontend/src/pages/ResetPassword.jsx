
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { resetPasswordFrontend } from "../hooks/authActions";

export default function UpdatePassword() {

    const [passwordData, setPasswordData] = useState({
        password : "",
        confirmPassword : ""
    })

    const onChangeHandler = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name] : e.target.value
        })
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { token } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();

        if(passwordData.password === passwordData.confirmPassword) {

            const { password, confirmPassword } = passwordData;

            dispatch(resetPasswordFrontend(
                token,
                password,
                confirmPassword,
                navigate
            ))

        } else {
            toast.error("Passwords do not match");
        }
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

                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center">
                        <h1 className="mt-5 text-3xl font-bold text-white">
                            Update Password
                        </h1>

                        <p className="mt-3 text-center text-sm leading-6 text-gray-400">
                            Create a strong new password to keep your account
                            secure.
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className="space-y-6">

                        {/* New Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                New Password
                            </label>

                            <input
                                type="password"
                                value={passwordData.password}
                                name="password"
                                onChange={onChangeHandler}
                                placeholder="Enter new password"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                value={passwordData.confirmPassword}
                                name="confirmPassword"
                                onChange={onChangeHandler}
                                placeholder="Confirm new password"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl not-last:from-cyan-500 to-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                            Update Password
                        </button>

                    </form>

                    {/* Footer */}
                    <div className="mt-8 border-t border-white/10 pt-6 text-center">

                        <p className="text-sm text-gray-400">
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-cyan-400 hover:text-cyan-300"
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