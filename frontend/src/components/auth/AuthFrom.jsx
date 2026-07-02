import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { createUser, loginUserFrontend } from "../../hooks/authActions";

const AuthFrom = ({ type }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name : "",
        username : "",
        email : "",
        password : ""
    })

    // Change input handler 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const navigate = useNavigate();
    


    // Submit handler 
    const handleSubmit = (e) => {
        e.preventDefault();

        if(type === "register") {

            const { name, username, email, password } = formData;

            dispatch(createUser(
                name,
                username,
                email,
                password,
                navigate
            ))

        } else {

            const { email, password } = formData;

            console.log(email, password);

            dispatch(loginUserFrontend(
                email,
                password,
                navigate
            ))

        }
    }


    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-3">

            {/* Background Glow */}
            <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">

                    {/* Logo */}
                    <div className="mb-4 flex flex-col items-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl shadow-lg shadow-cyan-500/30">
                            🤖
                        </div>

                        <h1 className="mt-4 text-3xl font-bold text-white">
                            {
                                type === "register" ? "Create your account" : "Welcome Back"
                            }
                        </h1>

                        <p className="mt-2 text-center text-sm text-gray-400">
                            {
                                type === "register" ? "Start chatting with AI and unlock powerful productivity tools." : "Sign in to continue chatting with your AI assistant."
                            }
                        </p>

                    </div>

                    <form className="space-y-3" onSubmit={handleSubmit}>

                       {
                         type === "register" && (
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                                />
                            </div>
                         )
                       }

                       {
                         type === "register" && (
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="@johndoe"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                                />
                            </div>
                         )
                       }

                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">

                                <label className="text-sm text-gray-300">
                                    Password
                                </label>

                                {
                                    type === "login" && (
                                        <Link
                                            to="/forgot-password"
                                            className="text-sm text-cyan-400 hover:text-cyan-300"
                                        >
                                            Forgot Password?
                                        </Link>
                                    )
                                }

                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                            {
                                type === "register" ? "Create Account" : "Sign In"
                            }
                        </button>

                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                       {
                        type === "register" ? (
                            <>
                                 Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-cyan-400 hover:text-cyan-300"
                                    >
                                        Sign In
                                    </Link>
                            </>
                        ) : (
                            <>
                                Don't have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="font-medium text-cyan-400 hover:text-cyan-300"
                                >
                                    Create Account
                                </Link>
                            </>
                        )
                       }
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AuthFrom;