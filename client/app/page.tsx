import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <main>
      <section className="relative h-[400px] md:h-[600px] lg:h-[400px] w-scren overflow-hidden flex justify-center align-center ">
        <div className="w-8/12">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight shadow-lg lg:text-5xl">
            Comprice
          </h1>
        </div>
        <video src="/videos/hero.mp4" autoPlay muted loop className="absolute top-0 w-full h-full object-cover brightness-[0.35] -z-10" />
      </section>
    </main>
  );
}

export default Home;
