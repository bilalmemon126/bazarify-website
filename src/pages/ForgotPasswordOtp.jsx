import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FiShield, FiArrowLeft, FiMail } from "react-icons/fi"
import { forgotPasswordOtp } from "../redux/features/user/userAction"

export default function ForgotPasswordOtp() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error, loading } = useSelector((state) => state.user)
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [resent, setResent] = useState(false)

    const filled = otp.join("").length

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return
        const next = [...otp]
        next[index] = element.value
        setOtp(next)
        if (element.value && element.nextSibling) element.nextSibling.focus()
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
            e.target.previousSibling.focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
        const next = [...otp]
        for (let i = 0; i < pasted.length; i++) next[i] = pasted[i]
        setOtp(next)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const otpString = otp.join("")
        if (otpString.length !== 6) return

        let response = await dispatch(forgotPasswordOtp({ otp: otpString, userId: id }))

        if (response.payload.status) {
            navigate(`/reset-password/${id}`)
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">

            <div className="relative z-10 w-full max-w-[400px]">
                <div className="bg-white rounded-[24px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-10">

                    <div className="text-center mb-7">
                        <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-2">
                            Verify Your Identity
                        </h1>
                        <p className="text-[13px] leading-relaxed text-[oklch(60%_0.02_264)] max-w-[270px] mx-auto">
                            Enter the 6-digit code sent to your email to reset your password.
                        </p>
                    </div>

                    <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div className="flex justify-center gap-2.5">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={handlePaste}
                                    className={[
                                        "size-12 text-center text-[20px] font-bold rounded-[12px]",
                                        "border-2 outline-none transition-all duration-200 bg-gray-50",
                                        "text-[oklch(20%_0.03_264)]",
                                        digit
                                            ? "border-[oklch(55.7%_0.246_272)] bg-[oklch(55.7%_0.246_272_/_5%)]"
                                            : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                                    ].join(" ")}
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-1.5 -mt-2">
                            {otp.map((_, i) => (
                                <span
                                    key={i}
                                    className={[
                                        "rounded-full transition-all duration-200",
                                        i < filled
                                            ? "size-2 bg-[oklch(55.7%_0.246_272)]"
                                            : "size-1.5 bg-[oklch(85%_0.01_264)]",
                                    ].join(" ")}
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-1.5 -mt-2">
                            <svg className="size-3 text-[oklch(70%_0.02_264)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[11px] text-[oklch(65%_0.02_264)]">Code expires in 2 minutes</span>
                        </div>

                        {error && (
                            <div className="flex items-start gap-3 p-4 rounded-[12px] bg-[oklch(60%_0.22_25_/_6%)] border border-[oklch(60%_0.22_25_/_20%)]">
                                <svg className="size-4 text-[oklch(55%_0.22_25)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-[13px] font-semibold text-[oklch(40%_0.18_25)]">Verification Failed</p>
                                    <p className="text-[12px] text-[oklch(50%_0.15_25)] mt-0.5">
                                        {error?.message || "Invalid code. Please check and try again."}
                                    </p>
                                </div>
                            </div>
                        )}

                        {resent && (
                            <div className="flex items-center gap-2 p-3.5 rounded-[12px] bg-[oklch(72%_0.2_145_/_8%)] border border-[oklch(72%_0.2_145_/_20%)]">
                                <svg className="size-4 text-[oklch(45%_0.15_145)] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-[12px] font-medium text-[oklch(40%_0.15_145)]">
                                    A new code has been sent to your email.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading || filled !== 6}
                            className={`w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary hover:bg-gray-700 ${loading || filled !== 6 ? "bg-gray-600" : "bg-brand-primary"}`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Verifying…
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Verify & Continue
                                </span>
                            )}
                        </button>

                    </form>

                    <div className="mt-6 flex flex-col items-center gap-3">

                        <div className="h-px w-full bg-[oklch(55.7%_0.246_272_/_8%)]" />

                        <NavLink
                            to="/forgot-password"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[oklch(55%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                        >
                            <FiArrowLeft className="text-[14px]" />
                            Back to Forgot Password
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}