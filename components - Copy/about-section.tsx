

export default function AboutSection() {
  
  return (
    <section id="about" className="min-h-screen">
       <div className="min-h-screen bg-white ">
      <div
        className="grid h-full w-full
                      grid-cols-[.25fr_repeat(4,1fr)_.25fr]
                      grid-rows-5
                      gap-px
                      bg-gray-300
                      text-neutral-800
                      font-mono
                      text-base
                      md:text-lg
                      lg:text-xl
                      xl:text-2xl
                      "
      >
        {/* Left Gutter */}
        <div className="bg-neutral-100" style={{ gridArea: "1 / 1 / 6 / 2" }}></div>

        {/* Right Gutter */}
        <div className="bg-neutral-100" style={{ gridArea: "1 / 6 / 6 / 7" }}></div>

        {/* Top Row */}
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 2 / 2 / 3" }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Elxtron</h2>
        </div>
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 3 / 2 / 5" }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Us: Driving the Future of Tech</h1>
        </div>
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 5 / 2 / 6" }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Our Mission</h2>
        </div>

        {/* Middle Row - Content from image and new content */}
        <div className="flex flex-col justify-center bg-neutral-100 p-4" style={{ gridArea: "2 / 2 / 4 / 3" }}>
          <div className="flex items-center mb-2">
            <span className="text-current text-2xl md:text-3xl lg:text-4xl mr-2">&#9632;</span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Unique Approach</h3>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-neutral-500">Beyond Capital</p>
        </div>
        <div className="flex flex-col justify-center bg-neutral-100 p-4" style={{ gridArea: "2 / 3 / 4 / 4" }}>
          <div className="flex items-center mb-2">
            <span className="text-current text-2xl md:text-3xl lg:text-4xl mr-2">&#9632;</span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Cutting-Edge Technology</h3>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-neutral-500">Advanced R&D</p>
        </div>
        <div className="flex items-center bg-neutral-100 p-4" style={{ gridArea: "2 / 4 / 4 / 6" }}>
          <p className="leading-relaxed">
            {
              "We do the impossible. In web3, it takes an entire ecosystem to transform ideas into industry leaders. With strategic funding, GTM support, and top-tier partnerships - we set you up for unparalleled growth."
            }
          </p>
        </div>

        {/* Bottom Row - New content */}
        <div className="flex flex-col justify-center bg-neutral-100 p-4" style={{ gridArea: "4 / 2 / 6 / 3" }}>
          <div className="flex items-center mb-2">
            <span className="text-current text-2xl md:text-3xl lg:text-4xl mr-2">&#9632;</span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Precision Manufacturing</h3>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-neutral-500">High-Quality PCBs</p>
        </div>
        <div className="flex flex-col justify-center bg-neutral-100 p-4" style={{ gridArea: "4 / 3 / 6 / 4" }}>
          <div className="flex items-center mb-2">
            <span className="text-current text-2xl md:text-3xl lg:text-4xl mr-2">&#9632;</span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Accelerated Development</h3>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-neutral-500">Rapid Prototyping</p>
        </div>
        <div className="flex items-center bg-neutral-100 p-4" style={{ gridArea: "4 / 4 / 6 / 6" }}>
          <p className="leading-relaxed">
            {
              "At Elxtron, we are dedicated to pushing the boundaries of what's possible in electronics. From concept to production, our integrated solutions ensure superior quality, speed, and reliability, empowering your innovations to thrive in a competitive market."
            }
          </p>
        </div>
      </div>
    </div>
  </section>
)}