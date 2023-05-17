import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] bg-[#E2E7EC]">
      <section className="container w-[50%] mx-auto p-4 flex  flex-col items-center bg-white rounded-md min-h-[20vh]">
        <Image src={"/../public/logo.png"} width={500} height={500} />
        <h1 className="font-sans text-[#073E6C] text-2xl mt-5">
          Jan-Apr 2023 NPTEL Exams
        </h1>
        <Link href="/login" className="mt-10 text-xl text-blue-600">
          {" "}
          👉 Click Here !!
        </Link>
      </section>
    </div>
  );
}
