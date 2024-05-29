import Login from "@/app/components/pagecomponents/login/Login";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <SignIn />
      {/* <Login /> */}
    </main>
  );
}
