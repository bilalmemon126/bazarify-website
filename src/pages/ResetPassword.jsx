import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FiLock, FiEye, FiEyeOff, FiArrowLeft, FiCheck } from "react-icons/fi"
import { resetPassword } from "../redux/features/user/userAction"

const STEPS = { FORM: "form", SUCCESS: "success" }

const getStrength = (pwd) => {
    if (!pwd) return { score: 0, label: "", color: "" }
    let score = 0
    if (pwd.length >= 8) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++
    const map = [
        { label: "", color: "" },
        { label: "Weak", color: "bg-[oklch(60%_0.22_25)]" },
        { label: "Fair", color: "bg-[oklch(75%_0.18_65)]" },
        { label: "Good", color: "bg-[oklch(60%_0.2_230)]" },
        { label: "Strong", color: "bg-[oklch(72%_0.2_145)]" },
    ]
    return { score, ...map[score] }
}

const requirements = [
    { label: "At least 8 characters", test: (p) => p.length >= 8 },
    { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
    { label: "One number", test: (p) => /[0-9]/.test(p) },
    { label: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
]

export default function ResetPassword() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [step, setStep] = useState(STEPS.FORM)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [form, setForm] = useState({ newPassword: "", confirmPassword: "" })

    const strength = getStrength(form.newPassword)
    const passwordsMatch = form.newPassword && form.confirmPassword && form.newPassword === form.confirmPassword
    const mismatch = form.confirmPassword && form.newPassword !== form.confirmPassword

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (form.newPassword !== form.confirmPassword) return setError({ message: "Passwords do not match." })
        if (strength.score < 2) return setError({ message: "Please choose a stronger password." })
        await dispatch(resetPassword({ password: form.newPassword, confirmPassword: form.confirmPassword, userId: id }))
        setStep(STEPS.SUCCESS)
    }

    const inputBase = [
        "w-full pl-10 py-3 rounded-[12px] text-[14px] text-[oklch(20%_0.03_264)]",
        "border-2 outline-none transition-all duration-200 bg-gray-50",
        "placeholder:text-[oklch(70%_0.02_264)]",
    ].join(" ")

    return (
        <div className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12 overflow-hidden">

            <div className="relative z-10 w-full max-w-[420px]">
                <div className="bg-white rounded-[24px] shadow-[0_24px_64px_oklch(55.7%_0.246_272_/_10%),0_4px_16px_oklch(0%_0_0_/_5%)] border border-[oklch(55.7%_0.246_272_/_8%)] px-8 py-10">

                    {step === STEPS.FORM && (
                        <>
                            <div className="text-center mb-7">
                                <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-2">
                                    Set New Password
                                </h1>
                                <p className="text-[13px] leading-relaxed text-[oklch(60%_0.02_264)] max-w-[270px] mx-auto">
                                    Choose a strong password to secure your account.
                                </p>
                            </div>

                            <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                                        <input
                                            type={showNew ? "text" : "password"}
                                            value={form.newPassword}
                                            onChange={(e) => setForm((p) => ({ ...p, newPassword: e.target.value }))}
                                            placeholder="Enter new password"
                                            required
                                            className={[
                                                inputBase, "pr-11",
                                                form.newPassword
                                                    ? "border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]"
                                                    : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                                            ].join(" ")}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNew(!showNew)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                                        >
                                            {showNew ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                                        </button>
                                    </div>

                                    {form.newPassword && (
                                        <div className="flex flex-col gap-1.5 mt-1">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <div
                                                        key={i}
                                                        className={[
                                                            "h-1 flex-1 rounded-full transition-all duration-300",
                                                            i <= strength.score ? strength.color : "bg-gray-200",
                                                        ].join(" ")}
                                                    />
                                                ))}
                                            </div>
                                            {strength.label && (
                                                <p className={[
                                                    "text-[11px] font-semibold",
                                                    strength.score <= 1 ? "text-[oklch(55%_0.22_25)]" :
                                                        strength.score === 2 ? "text-[oklch(60%_0.15_65)]" :
                                                            strength.score === 3 ? "text-[oklch(45%_0.18_230)]" :
                                                                "text-[oklch(40%_0.15_145)]",
                                                ].join(" ")}>
                                                    {strength.label} password
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[13px] font-semibold text-[oklch(30%_0.03_264)]">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] text-[15px] pointer-events-none" />
                                        <input
                                            type={showConfirm ? "text" : "password"}
                                            value={form.confirmPassword}
                                            onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                                            placeholder="Re-enter new password"
                                            required
                                            className={[
                                                inputBase, "pr-11",
                                                mismatch
                                                    ? "border-[oklch(60%_0.22_25)] focus:border-[oklch(55%_0.22_25)] focus:ring-4 focus:ring-[oklch(60%_0.22_25_/_10%)]"
                                                    : passwordsMatch
                                                        ? "border-[oklch(72%_0.2_145)] focus:ring-4 focus:ring-[oklch(72%_0.2_145_/_10%)]"
                                                        : "border-[oklch(90%_0.01_264)] focus:border-[oklch(55.7%_0.246_272)] focus:ring-4 focus:ring-[oklch(55.7%_0.246_272_/_10%)]",
                                            ].join(" ")}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[oklch(65%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                                        >
                                            {showConfirm ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                                        </button>
                                    </div>
                                    {mismatch && (
                                        <p className="text-[11px] text-[oklch(55%_0.22_25)] font-medium">
                                            Passwords do not match
                                        </p>
                                    )}
                                    {passwordsMatch && (
                                        <p className="text-[11px] text-[oklch(40%_0.15_145)] font-medium flex items-center gap-1">
                                            <FiCheck size={11} strokeWidth={3} /> Passwords match
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-1.5 p-4 rounded-[12px] bg-gray-50 border border-[oklch(55.7%_0.246_272_/_8%)]">
                                    {requirements.map((req) => {
                                        const met = req.test(form.newPassword)
                                        return (
                                            <div key={req.label} className="flex items-center gap-1.5 text-[11px]">
                                                <div className={[
                                                    "size-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-200",
                                                    met
                                                        ? "bg-[oklch(72%_0.2_145_/_15%)]"
                                                        : "bg-gray-200",
                                                ].join(" ")}>
                                                    {met
                                                        ? <FiCheck size={9} className="text-[oklch(40%_0.15_145)]" strokeWidth={3} />
                                                        : <span className="size-1 rounded-full bg-gray-400" />
                                                    }
                                                </div>
                                                <span className={met ? "text-[oklch(35%_0.02_264)]" : "text-[oklch(65%_0.02_264)]"}>
                                                    {req.label}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>

                                {error && (
                                    <div className="flex items-start gap-3 p-4 rounded-[12px] bg-[oklch(60%_0.22_25_/_6%)] border border-[oklch(60%_0.22_25_/_20%)]">
                                        <svg className="size-4 text-[oklch(55%_0.22_25)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-[12px] text-[oklch(45%_0.18_25)]">
                                            {error?.message || "Something went wrong. Please try again."}
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || !passwordsMatch || strength.score < 4}
                                    className={`w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary hover:bg-gray-700 ${loading || !passwordsMatch || strength.score < 4 ? "bg-gray-600" : "bg-brand-primary"}`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Updating Password…
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <FiLock size={14} />
                                            Update Password
                                        </span>
                                    )}
                                </button>
                            </form>
                        </>
                    )}

                    {step === STEPS.SUCCESS && (
                        <>
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[oklch(72%_0.2_145_/_20%)] rounded-full blur-xl" />
                                    <div className="relative size-16 rounded-full bg-[oklch(72%_0.2_145_/_10%)] border border-[oklch(72%_0.2_145_/_25%)] flex items-center justify-center">
                                        <FiCheck className="text-[oklch(40%_0.15_145)] text-[28px]" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mb-7">
                                <h1 className="text-[24px] font-bold text-[oklch(20%_0.03_264)] mb-2">
                                    Password Updated!
                                </h1>
                                <p className="text-[13px] leading-relaxed text-[oklch(60%_0.02_264)] max-w-[270px] mx-auto">
                                    Your password has been reset successfully. You can now sign in with your new password.
                                </p>
                            </div>

                            <div className="h-px bg-[oklch(55.7%_0.246_272_/_8%)] mb-7" />

                            <div className="flex items-start gap-3 p-4 rounded-[12px] bg-[oklch(55.7%_0.246_272_/_5%)] border border-[oklch(55.7%_0.246_272_/_12%)] mb-6">
                                <div className="size-7 rounded-full bg-[oklch(55.7%_0.246_272_/_12%)] flex items-center justify-center shrink-0 mt-0.5">
                                    <FiLock className="text-[oklch(55.7%_0.246_272)] text-[12px]" />
                                </div>
                                <p className="text-[12px] leading-relaxed text-[oklch(45%_0.02_264)]">
                                    For security, you've been signed out of all other devices. Sign in again to continue.
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/login")}
                                className="w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary hover:bg-gray-700"
                            >
                                Sign In Now
                                <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {step === STEPS.FORM && (
                        <div className="flex justify-center mt-6 pt-5 border-t border-[oklch(55.7%_0.246_272_/_8%)]">
                            <NavLink
                                to="/forgot-password"
                                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[oklch(55%_0.02_264)] hover:text-[oklch(55.7%_0.246_272)] transition-colors duration-200"
                            >
                                <FiArrowLeft size={14} />
                                Back to Forgot Password
                            </NavLink>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}