import Image from "next/image";
import profile from "../../public/owen_craston_profile.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16">
        <div className="max-w-5xl text-center">
          <Image
            src={profile}
            alt="Owen Craston"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold">Owen Craston</h1>
          <p className="text-2xl mt-4">
            I'm Owen Craston, a senior software engineer with 10+ years of
            experience. I specialize in cutting edge technologies like Web3 and
            artificial intelligence. I have experience working for some of the
            largest tech companies on the planet and am proficient in bringing
            ideas to life on the web or mobile devices.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="flex flex-col items-center justify-center min-h-scree px-4 md:px-16">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-gray-300 h-64">
            <span>Project 1</span>
          </div>
          <div className="flex items-center justify-center bg-gray-300 h-64">
            <span>Project 2</span>
          </div>
          <div className="flex items-center justify-center bg-gray-300 h-64">
            <span>Project 3</span>
          </div>
          <div className="flex items-center justify-center bg-gray-300 h-64">
            <span>Project 4</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center min-h-scree px-4 md:px-16">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-4">
            Interested in working together? Feel free to reach out!
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-md">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}
