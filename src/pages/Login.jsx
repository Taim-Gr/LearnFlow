import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSnackbar } from "../contexts/SnackbarContext";
import { Mail, Lock, ArrowRight, GraduationCap } from "lucide-react";
// layout
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login, isLoggedIn } = useAuth();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!email || !password) {
      showSnackbar("Please fill in all fields.", "error");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      showSnackbar("Please enter a valid email.", "error");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      showSnackbar("Password must be at least 6 characters.", "error");
      setIsLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 800));

    const success = await login(email, password);

    if (success) {
      showSnackbar("Welcome back!", "success");
      navigate("/");
    } else {
      showSnackbar("Login failed. Try again.", "error");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div>
        <title>Login - LearnFlow</title>
      </div>

      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-3xl font-bold font-secondary">
                Welcome Back
              </h1>
              <p className="text-muted">
                Log in to continue your learning journey
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white p-8 rounded-2xl shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10 h-12 w-full rounded-xl border outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 h-12 w-full rounded-xl border outline-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white"
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Logging in…
                    </>
                  ) : (
                    <>
                      Log In
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted text-center mt-6">
                Demo login — Use any email & password (6+ chars)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
