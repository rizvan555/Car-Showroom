import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center p-10 text-center">
      <SignUp />
    </div>
  );
}
