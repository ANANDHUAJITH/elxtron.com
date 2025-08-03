"use client"
import { useState } from "react"

const blogSections = [
  {
    id: 3,
    title: "UNIQUE PRODUCT",
    cardTitle: "UNIQUE PRODUCT",
    description:
      "Revolutionary IoT sensors and cutting-edge electronic components that push the boundaries of innovation.",
    backgroundImage: "url(/placeholder.svg?height=400&width=300&query=IoT+sensors+electronics+circuit+board)",
    gridArea: "div3",
  },
  {
    id: 4,
    title: "NOTICE",
    cardTitle: "NOTICE",
    description:
      "Important updates, announcements, and news from ELXTRON LABS. Stay informed about our latest developments.",
    backgroundImage: "url(/placeholder.svg?height=600&width=300&query=electronics+workshop+laboratory+equipment)",
    gridArea: "div4",
  },
  {
    id: 6,
    title: "NOTICE",
    cardTitle: "NOTICE",
    description: "Latest announcements, events, and important information from our electronics community.",
    backgroundImage: "url(/placeholder.svg?height=600&width=300&query=electronics+news+announcements+bulletin)",
    gridArea: "div6",
  },
  {
    id: 7,
    title: "BEST DIY",
    cardTitle: "BEST DIY",
    description: "Step-by-step tutorials and projects for electronics enthusiasts. Build amazing circuits and devices.",
    backgroundImage: "url(/placeholder.svg?height=400&width=600&query=DIY+electronics+Arduino+breadboard+components)",
    gridArea: "div7",
  },
  {
    id: 8,
    title: "OUR PRODUCT",
    cardTitle: "OUR PRODUCT",
    description: "Discover our flagship products and innovative solutions designed for the future of electronics.",
    backgroundImage: "url(/placeholder.svg?height=400&width=600&query=electronic+products+devices+technology+showcase)",
    gridArea: "div8",
  },
]

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="blog" className="min-h-screen">
      <div className="blog-parent">
        {/* Margin divs */}
        <div className="blog-div1"></div>
        <div className="blog-div2"></div>

        {/* Blog Heading */}
        <div className="blog-div5">
          <h2 className="simple-blog-title">BLOG</h2>
        </div>

        {/* Blog Cards */}
        {blogSections.map((section) => (
          <div
            key={section.id}
            className={`blog-${section.gridArea} blog-card`}
            style={{
              backgroundImage: section.backgroundImage,
            }}
            onMouseEnter={() => setHoveredCard(section.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Title in Top Corner */}
            <div className="card-title-corner">{section.cardTitle}</div>

            <div className={`card-overlay ${hoveredCard === section.id ? "active" : ""}`}>
              <div className="card-content">
                <h3 className="card-title">{section.title}</h3>
                <p className="card-description">{section.description}</p>
                <button className="card-button">
                  {section.title === "UNIQUE PRODUCT" && "Explore Products →"}
                  {section.title === "NOTICE" && "Read Notices →"}
                  {section.title === "BEST DIY" && "Start Building →"}
                  {section.title === "OUR PRODUCT" && "View Products →"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
