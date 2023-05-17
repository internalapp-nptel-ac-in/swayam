import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { details } from "../../utils/CertificateDetails";
import logo from "../../public/logo.png";

export const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (email === "" || password === "") {
      console.log("Enter anything");
      return;
    }

    details.map((detail) => {
      if (detail.email === email) {
        console.log("Yes it is equal and his name is", detail.name);
        router.push(`/examform/${detail.id}`);
      } else console.log("wrong email");
    });
  };
  return (
    <>
      <div className=" min-h-screen flex flex-col mt-10 items-center">
        <div className="w-70 mx-auto">
          <Image src={logo} alt="Logo" className="mx-auto mb-4" width={500} />
          <h2 className="text-center font-sans font-medium text-xl mb-6">
            NPTEL Online Course Certification Exams
          </h2>
          <div className="bg-gray-200 w-full px-4 py-6">
            <p className="font-bold">Note:</p>
            <p>
              Please make sure that you login using the same email id you had
              used while enrolling (joining) to the course.
            </p>
          </div>
          <div className="flex justify-center items-center my-8">
            <div className="pl-4 ml-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="">Username</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 rounded px-2 py-1 mb-2"
                />
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded px-2 py-1 mb-2"
                />
                <button
                  onClick={submitHandler}
                  className="bg-gray-100 text-black rounded px-4 py-1"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center mb-4">
                <a href="#" className="text-blue-500">
                  Forgot your password?
                </a>
              </div>
              <div className="border-t border-gray-300 text-center py-4">
                <span>OR</span>
              </div>
              <div className="text-center mt-4">
                <p>
                  Don't have an account?{" "}
                  <span className="text-blue-500">Sign up now</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-90">
        <p>NPTEL HELPLINE: (044) 2257 5905 | (044) 2257 5908</p>
        <p>email: support@nptel.iitm.ac.in</p>
      </div>
    </>
  );
};

export default LoginPage;
