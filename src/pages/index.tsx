import Image from "next/image";
import profile from "../../public/owen_craston_profile.jpg";
import shopify from "../../public/shopify/shopify_pos_tap.webp";
import metamask from "../../public/metamask/metamask_mobile_ledger.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 md:px-16">
        <div className="max-w-4xl text-center">
          <Image
            src={profile}
            alt="Owen Craston"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold">Owen Craston</h1>
          <p className="text-xl md:text-2xl mt-3">
            I'm Owen Craston, a senior software engineer with 10+ years of
            experience. I specialize in cutting edge technologies like Web3 and
            artificial intelligence. I have experience working for some of the
            largest tech companies on the planet and am proficient in bringing
            ideas to life on the web or mobile devices.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 md:px-16">
        <div className="max-w-5xl space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src={shopify}
              alt="Shopify"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-3xl font-bold">Shopify Point of Sale</h3>
              <p className="mt-2 text-xl">
                This is a brief description of Project 1. It includes details
                about the technologies used and the goals of the project.
              </p>
              <Link href="/shopify">
                <p className="text-blue-500 mt-4 inline-block">
                  View Project Details
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src={metamask}
              alt="metamask"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-3xl font-bold">Metamask</h3>
              <p className="mt-2 text-xl">
                This is a brief description of Project 2. It includes details
                about the technologies used and the goals of the project.
              </p>
              <Link href="/project2">
                <p className="text-blue-500 mt-4 inline-block">
                  View Project Details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 md:px-16">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-4">
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
