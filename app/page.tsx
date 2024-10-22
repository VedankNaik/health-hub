import { PasskeyModal } from "@/components/PasskeyModal";
import { PatientForm } from "@/components/ui/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center align-middle mb-12">
            <Image
              src="/assets/icons/logo.png"
              height={1000}
              width={1000}
              alt="logo"
              className="h-12 w-fit"
            />
            <p className="ml-2">HealthHub</p>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} HealthHub
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="onboarding"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
