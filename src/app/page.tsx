import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroImage from "@/components/heroImage";
import HeroSectionWithImage from "@/components/HeroSectionWithImage";
import HeroSectionWithImageRotatedText from "@/components/HeroSectionWithImageRotatedText";
import ImageWithOverlay from "@/components/ImageWithOverlay";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroImage
        imageUrl="images/Blue Modern Welcome to My Page Facebook Fundraiser Cover Photo (2).svg"
        height="600px"
        altText="Custom Alt Text for Hero Image"
      />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          style={{ cursor: "pointer" }}
        >
          Explore Workshop
        </button>
      </div>

      <div>
        <HeroSectionWithImageRotatedText
          imageUrl="images/Blue Modern Welcome to My Page Facebook Fundraiser Cover Photo (5) 1.png"
          textContent="We believe that a comprehensive and holistic early learning program gives your child the best start in life and learning. We pack our children’s days with educational, fun and innovative play and learning experiences to nurture their physical, emotional, social, and intellectual development."
          buttonText="Learn More"
          buttonLink="#learn-more"
        />
      </div>

      <div>
        <HeroSectionWithImage
          imageUrl="images/unleas (1) 1.png"
          textContent="We believe that a comprehensive and holistic early learning program gives your child the best start in life and learning. We pack our children’s days with educational, fun and innovative play and learning experiences to nurture their physical, emotional, social, and intellectual development."
          buttonText="Learn More"
          buttonLink="#learn-more"
        />
      </div>

      <div
        className="relative w- h-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Yellow And Black Modern Company Business Zoom Virtual Background (1) 1.jpg')",
        }}
      >
        <div className="absolute inset-0 "></div> {/* Overlay for background */}
        <div className="relative z-10 text-black text-center py-20">
          <h1 className="text-4xl sm:text-5xl text-pink-500 font-bold mb-8">
            Why People Loves Creative Hubs?
          </h1>

          <div className="flex justify-center mt-20 gap-10">
            {/* Person 1 */}
            <div className="max-w-xs text-center">
              <Image
                src="/images/p3.jpg"
                alt="Person 1"
                width={250}
                height={250}
                className="rounded-full mx-auto"
              />
              <h2 className="text-2xl mt-4">Emily R., Parent of Sophia (7 years old)</h2>
              
              <p className="mt-4">
              Sophia loves Creative Cubs! The art workshops are her favorite, and I’ve seen her confidence soar.
              </p>
            </div>

            {/* Person 2 */}
            <div className="max-w-xs text-center">
              <Image
                src="/images/p1.jpg"
                alt="Person 2"
                width={250}
                height={250}
                className="rounded-full mx-auto"
              />
              <h2 className="text-2xl mt-4">Mark D., Parent of Ethan (9 years old) </h2>
             
              <p className="mt-4">
              Ethan is hooked on the STEM workshops! Fun, educational, and so well-organized.
              </p>
            </div>

            {/* Person 3 */}
            <div className="max-w-xs text-center">
              <Image
                src="/images/p2.jpg"
                alt="Person 3"
                width={250}
                height={250}
                className="rounded-full mx-auto"
              />
              <h2 className="text-2xl mt-4">Sarah L., Parent of Lily (5 years old)</h2>
              
              <p className="mt-4">
              Creative Cubs keeps Lily engaged and learning. The perfect platform for busy parents like me!
              </p>
            </div>
          </div>
          <button className="mt-10 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            Add Your Feedback
          </button>
        </div>
      </div>

      <div>
      <ImageWithOverlay
        mainImage="images/Card3.png"
        smallImage="images/discount tag and megaphone.png"
        largeImage="images/Purple White Modern Gradient Register Form Website Desktop Prototype 1.png"
      />
    </div>

      <Footer />
    </div>
  );
}
