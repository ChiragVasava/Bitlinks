import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (<>
  
    <Navbar />
    <main>
      <section className="grid grid-cols-2">
        <div className="bg-green-50">
          <p>
            The best URL shortener in the Market
          </p>
          <p>
            We are the most straightfoward URL Shortener in the world
          </p>
        </div>
        <div className="bg-red-500">
          <Image src={"/vector.jpg"} width={300} height={300} />
        </div>
      </section>
    </main>
    </>
  );
}