"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { twMerge } from "tailwind-merge";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const topics = [
  "Breaking News",
  "Science and Technology",
  "Business and Finance",
  "Health and Wellness",
  "Entertainment",
  "Sports",
  "Politics",
  "Environment and Sustainability",
  "Lifestyle and Fashion",
  "Travel and Leisure",
  "Education",
  "Food",
];

export const top_reads = [
  {
    content:
      "Research Unveils Consumer Trends Shaping the Future: Discover the Most Impactful Changes",
  },
  {
    content:
      "Exclusive Interview: Innovative Entrepreneur Shares Secrets of Success in the Business World",
  },
  {
    content:
      "Explore Emerging Technologies That Are Revolutionizing the Industry and Changing Our Daily Lives",
  },
  {
    content: "How AI is Redefining Everyday Tasks and Enhancing Efficiency",
  },
];

export const Tag = ({
  className,
  topic,
}: {
  className?: string;
  topic: string;
}) => {
  return (
    <span
      className={twMerge(
        "px-4 py-2 text-[12px] font-medium border-[1px] border-black rounded-full",
        className
      )}
    >
      {topic}
    </span>
  );
};

export default function RelevantSection() {
  const news_contents = [
    "AI Advancements in Healthcare: A Glimpse into the Future",
    "Space Exploration Milestone: New Discoveries Beyond Our Solar System",
    "Next-Gen Robotics: Transformative Innovations Reshaping Industries",
    "Tech Giants' Latest Endeavors: Unveiling Future Innovations",
    "Sustainable Business Practices: Companies Leading the Way",
    "Cryptocurrency Revolution: Exploring the Future of Digital Finance",
    "Emerging Talents in the Music Industry: Artists on the Rise",
    "Artistic Expressions in the Digital Age: The Intersection of Technology and Creativity",
    "Literary Marvels: New Books Redefining the Written Word",
  ];

  const card_contents = [
    {
      title: "Breakthrough in Renewable Energy Sources",
      text: "Scientists unveil a game-changing discovery in renewable energy technology",
      imgUrl: "/energy.png",
    },
    {
      title: "Global Market Trends: Navigating the Economic La...",
      text: "An in-depth analysis of current market trends and their impact on the global economy.",
      imgUrl: "/market.png",
    },
    {
      title: "Cinematic Masterpieces: Must-Watch Films of the Ye...",
      text: "A curated list of outstanding films that have captivated audiences and critics alike.",
      imgUrl: "/popcorn.png",
    },
  ];

  return (
    <section className="flex justify-end max-w-[100vw] overflow-hidden">
      <div className="main-container">
        <div className="flex">
          <div className="w-full mt-8 px-4">
            <div className="flex items-center gap-2 py-4">
              <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
              <h3>RELEVANT NEWS</h3>
            </div>
            <div className=" overflow-x-auto overflow-y-hidden">
              <div className="flex gap-2 py-3 ">
                {card_contents.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex-1 min-w-[300px] md:min-w-[200px] max-w-[400px]"
                    >
                      <NewsCard
                        id={index + 1}
                        title={item.title}
                        text={item.text}
                        imgUrl={item.imgUrl}
                      />
                      <div className="px-4 mt-6 flex flex-col gap-4 max-w-[350px]">
                        {news_contents
                          .slice(index * 3, (index + 1) * 3)
                          .map((item) => {
                            return (
                              <p
                                key={item}
                                className="news-title hover:cursor-pointer hover:text-gray-500"
                              >
                                {item}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.25": {
                    slidesPerView: 4,
                    spaceBetween: 60,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {card_contents.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="min-w-[350px] max-w-[400px]">
                        <NewsCard
                          title={item.title}
                          text={item.text}
                          imgUrl={item.imgUrl}
                        />
                        <div className="px-4 mt-6 flex flex-col gap-4 max-w-[350px]">
                          {news_contents
                            .slice(index * 3, (index + 1) * 3)
                            .map((item) => {
                              return (
                                <p
                                  key={item}
                                  className="news-title hover:cursor-pointer hover:text-gray-500"
                                >
                                  {item}
                                </p>
                              );
                            })}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper> */}
            </div>
          </div>
          <div className="sidebar-news lg:block hidden">
            <div className="pt-8 border-l-[1px] border-border-gray">
              <div className="flex items-center gap-2 py-4">
                <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
                <h3 className="">MOST READ THIS WEEK</h3>
              </div>
              <div className="flex flex-col gap-4 pr-16">
                {top_reads.map((item, index) => {
                  return (
                    <TopReadCard
                      key={index}
                      content={item.content}
                      imgUrl={`/topread${index + 1}.png`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
