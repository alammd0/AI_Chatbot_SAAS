import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { verifyEmailFrontend } from "../hooks/authActions";


export default function VerifyUserWithToken() {

    const navigate = useNavigate();

    const { token } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(verifyEmailFrontend(token, navigate));
    })

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-3 text-white">
            Your account has been verified successfully.

            <Link to="/login">
                <button>
                    Go to Login Page
                </button>
            </Link>
        </div>
    )
}