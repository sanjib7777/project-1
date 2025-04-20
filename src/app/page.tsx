import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative w-full h-[300px] bg-cover bg-center z-0 mt-[60px]">
        <img
          src="images/Blue Modern Welcome to My Page Facebook Fundraiser Cover Photo (2).svg"
          className="w-full h-[600px] object-cover"
          alt="images"
        />
      </div>

      <div className="w-full h-[800px] bg-cover bg-center z-0 mt-[200px]"
        style={{ backgroundImage: "url('images/Blue Modern Welcome to My Page Facebook Fundraiser Cover Photo (5) 1.png')" }}>
        <div className="w-full sm:w-[90%] md:w-[700px] p-8 rounded-lg transform -rotate-10 mt-[100px] mx-auto">
          <h1 className="mt-40 text-3xl sm:text-4xl font-bold text-pink-500 text-center">
            ‘’LEARNING IN CREATIVE CUBS’’
          </h1>
          <p className="mt-4 text-blue-400 text-base sm:text-lg text-center">
            We believe that a comprehensive and holistic early learning program gives your child the best start in life and learning.
            We pack our children’s days with educational, fun and innovative play and learning experiences to nurture their physical, emotional, social, and intellectual development.
          </p>
        </div>
      </div>


      <div className="w-full h-[500px] bg-cover bg-center z-0 mt-1"
        style={{ backgroundImage: "url('images/unleas (1) 1.png')" }}>
        <div className="flex justify-center items-center w-full h-full text-center text-white">
          <div className="w-full sm:w-[90%] md:w-[700px] p-8 rounded-lg">
            <p className="mt-4 text-blue-400 text-xl sm:text-2xl md:text-3xl">
              We believe that a comprehensive and holistic early learning program gives your child the best start in life and learning.
              We pack our children’s days with educational, fun and innovative play and learning experiences to nurture their physical, emotional, social, and intellectual development.
            </p>
            <div className="flex justify-end mt-4">
              <button className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-600 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="relative w- h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/Yellow And Black Modern Company Business Zoom Virtual Background (1) 1.jpg')" }}>
        <div className="absolute inset-0 "></div> {/* Overlay for background */}

        <div className="relative z-10 text-black text-center py-20">
          <h1 className="text-4xl sm:text-5xl text-pink-500 font-bold mb-8">Why People Loves Creative Hubs?</h1>
          
          <div className="flex justify-center gap-10">
            {/* Person 1 */}
            <div className="max-w-xs text-center">
              <Image src="/images/person.jpeg" alt="Person 1" width={250} height={250} className="rounded-full mx-auto" />
              <h2 className="text-2xl mt-4">John Doe</h2>
              <p className="text-lg mt-2">Founder & CEO</p>
              <p className="mt-4">John has over 10 years of experience in leading teams and driving innovative strategies in the tech industry.</p>
            </div>

            {/* Person 2 */}
            <div className="max-w-xs text-center">
              <Image src="/images/person.jpeg" alt="Person 2" width={250} height={250} className="rounded-full mx-auto" />
              <h2 className="text-2xl mt-4">Jane Smith</h2>
              <p className="text-lg mt-2">Marketing Director</p>
              <p className="mt-4">Jane brings creativity and strategy to our marketing efforts, ensuring we reach new heights in customer engagement.</p>
            </div>

            {/* Person 3 */}
            <div className="max-w-xs text-center">
              <Image src="/images/person.jpeg" alt="Person 3" width={250} height={250} className="rounded-full mx-auto" />
              <h2 className="text-2xl mt-4">Robert Brown</h2>
              <p className="text-lg mt-2">CTO</p>
              <p className="mt-4">Robert leads our technical team with expertise in software development and product innovation, ensuring high performance and reliability.</p>
            </div>
          </div>
          <button className="mt-10 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            Add Your Feedback
          </button>

        </div>
      </div>






    <Footer/>

    </div>
  );
}
