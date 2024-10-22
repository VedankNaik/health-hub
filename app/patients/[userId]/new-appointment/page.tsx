import Image from "next/image";

import { AppointmentForm } from "@/components/ui/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
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
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <p className="copyright py-12">
            © {new Date().getFullYear()} HealthHub
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
