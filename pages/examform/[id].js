import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import logo from "../../public/logo.png";
import { details } from "../../utils/CertificateDetails";

export default function () {
  const router = useRouter();
  const [info, setInfo] = useState({});

  useEffect(() => {
    details.map((detail) => {
      if (detail.id == router.query.id) {
        setInfo(detail);
        console.log(detail);
      }
    });
  }, []);

  return (
    <div className=" mt-8 bg-white rounded-lg shadow-lg w-screen mx-10 md:w-[80%] md:mx-auto">
      <div className="font-serif bg-[#4E8399] flex justify-evenly items-center h-[10vh]">
        <Image src={logo} alt="Logo" className="w-[10%] h-[30%]" />
        <h2 className="text-2xl sm:text-lg md:text-3xl text-white text-center">
          Exam Details Form for {info.table2 && info.table2.timeline}
        </h2>
        <button className="bg-[#D9534E] text-white p-2 rounded-sm">
          Logout
        </button>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto my-10">
          <div className="flex flex-col gap-2 font-serif">
            <h2 className="font-bold">Name:</h2>
            <h2 className="font-bold">Email Id:</h2>
            <h2 className="font-bold">DOB:</h2>
            <h2 className="font-bold">
              No. of courses registered for Mar exams:
            </h2>
            <h2 className="font-bold">
              No. of courses registered for Apr exams:
            </h2>
          </div>

          <div className="flex flex-col gap-2 font-serif">
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.dob}</p>
            <p>{info.marExams}</p>
            <p>{info.aprExams}</p>
          </div>
        </div>
        <div className="font-serif flex flex-col justify-center items-center">
          <h2 className="text-[#5C5D9A] font-bold text-center text-xl md:text-2xl">
            Exams
          </h2>
          <Link
            className="hover:underline text-red-600 text-center text-lg md:text-xl my-4 cursor-pointer"
            href={info.file ? info.file : ""}
          >
            Click to view Results
          </Link>
        </div>
        <table className="w-full">
          <thead className="bg-green-200">
            <tr>
              <th className="p-2">Sno</th>
              <th className="p-2">Course Name</th>
              <th className="p-2">Exam Date</th>
              <th className="p-2">Session</th>
              <th className="p-2">Exam Type</th>
              <th className="p-2">Centre Name</th>
              <th className="p-2">Centre Address</th>
              <th className="p-2">Exam Feedback</th>
              <th className="p-2">Score Feedback</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {info.table1 && (
              <tr>
                <td className="p-2">{info.table1.sno}</td>
                <td className="p-2">{info.table1.courseName}</td>
                <td className="p-2">{info.table1.examDate}</td>
                <td className="p-2">{info.table1.session}</td>
                <td className="p-2">{info.table1.examType}</td>
                <td className="p-2">{info.table1.centreName}</td>
                <td className="p-2">{info.table1.centreAddress}</td>
                <td className="p-2">{info.table1.examFeedback}</td>
                <td className="p-2">{info.table1.scoreFeedback}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
