/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <PageLayout>
      <section className="component-px component-py w-full flex items-center justify-center bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          <div className="hidden md:flex items-center justify-end">
            {/* Replace the following with your SVG or image */}
            <img
              src="/images/SignInSvg.svg"
              alt="Signup Illustration"
              className="w-2/3"
            />
          </div>
          <div className="">
            <SignIn />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
