import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] bg-[#E2E7EC]">
      <Head>
        <title>NPTEL</title>
      </Head>
      <section className="container w-[70%] mx-auto p-4 flex  flex-col items-center bg-white rounded-br-md rounded-bl-md min-h-[20vh] drop-shadow-lg">
        <Image src={logo} width={500} height={500} layout="responsive" />
        <h1 className="font-sans text-[#073E6C] md:text-3xl xm:text-lg mt-5 text-center">
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
