import Image from "next/image";

export default function CustomSection() {
  const recent_news = [
    {
      title: "How do you buy an NFT?",
      content:
        "Quick-start guide to nabbing the digital collectible of your dreams",
      tag: "Cryptocurrency",
    },
    {
      title:
        "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained",
      content:
        "From diamond hands to the flippening, we break down 11 of the most popular pieces of crypto lingo",
      tag: "Cryptocurrency",
    },
    {
      title: "How to set up a crypto wallet",
      content: "Learn how to setup and get started with a crypto wallet.",
      tag: "Cryptocurrency",
    },
    {
      title: "How to earn crypto rewards",
      content:
        "From staking to lending, five of the best ways to grow your crypto",
      tag: "Cryptocurrency",
    },
    {
      title: "What are Initial Coin Offerings (ICOs) and how do they work?",
      content:
        "TL;DR: Initial Coin Offerings (ICOs) are a method of gathering resources for cryptocurrency-related projects.",
      tag: "Cryptocurrency",
    },
    {
      title: "What is a crypto whitelist?",
      content:
        "A crypto whitelist is a list of approved participants for a specific event in the cryptocurrency world.",
      tag: "Cryptocurrency",
    },
  ];

  const Tag = ({ className, topic }: { className?: string; topic: string }) => {
    return (
      <span className="px-4 py-1 md:py-2 text-[8px] md:text-[12px] font-medium border-[1px] border-black rounded-full">
        {topic}
      </span>
    );
  };

  return (
    <section className="relative flex justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10 main-container px-4">
        <div className="mt-8">
          <div className="flex items-center gap-2 py-6">
            <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
            <h3>Tips and tutorials</h3>
          </div>
          <div className="md:max-w-[85%] mx-auto grid sm:grid-cols-2 gap-8">
            {recent_news.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className="gap-6 bg-white rounded-lg border dark:border-gray-800 dark:bg-[#18181B]"
                >
                  <Image
                    className="w-full rounded-t-lg"
                    src={`/topics/recent${index + 1}.png`}
                    width={500}
                    height={300}
                    unoptimized
                    alt="Photo"
                  />
                  <div className="px-3 pt-4 sm:min-h-[100px]">
                    <p className="medium-content">{item.title}</p>
                    <p className="pl-1 hidden md:block news-content mt-2">
                      {item.content}
                    </p>
                  </div>
                  <div className="px-3 py-4 flex justify-end">
                    <button className="border rounded-full py-1 px-2">
                      See More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
