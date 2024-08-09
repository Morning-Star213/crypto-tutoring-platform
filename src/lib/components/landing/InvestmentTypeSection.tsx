import Link from "next/link";

export default function InvestmentTypeSection() {
  return (
    <div className="flex flex-col z-10 flex-wrap bg-white pt-[90px] pb-[90px]">
      <div className="grid-x flex flex-col mx-auto">
        <h3 className="text-center">Investment types</h3>
        <div className="max-w-[200px] mx-auto mt-6">
          <button
            className="w-full border border-black p-2.5 my-12 hover:bg-[#E9B737]"
            style={{ fontFamily: "IBM Plex Mono" }}
          >
            <Link href={"dd"}>VIEW THE FUNDS</Link>
          </button>
        </div>
        <div className="flex flex-col md:flex-row outpadding justify-between">
          <div className="px-2">
            <div className=" md:h-[200px] md:w-[350px] border-t border-b border-black pt-[25px] pb-[35px]">
              <div className="">
                <h5>Venture Equity</h5>
              </div>
              <div className="mt-[30px]">
                <p
                  className="text-[15px] font-medium"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Exposure to equity in companies building products and services
                  in the nascent blockchain ecosystem. Our long standing
                  reputation and technical edge allows us to see virtually every
                  deal in the market, and lead about half of our portfolio
                  company investments.
                </p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className=" md:h-[200px] md:w-[350px] border-t border-b border-black pt-[25px] pb-[35px]">
              <div>
                <h5>Early-Stage Tokens</h5>
              </div>
              <div className="mt-[30px]">
                <p
                  className="text-[15px] font-medium"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Exposure to new, efficient, and scalable protocols. Similar to
                  venture capital equity, but investing in tokens (not
                  companies) during the private stage at a discount to the
                  listing price.
                </p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className=" md:h-[200px] md:w-[350px] border-t border-b border-black pt-[25px] pb-[35px]">
              <div>
                <h5>Liquid Tokens</h5>
              </div>
              <div className="mt-[30px]">
                <p
                  className="text-[15px] font-medium"
                  style={{
                    fontFamily: "NeoGramCondensed",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Exposure to the largest and most liquid digital assets. We use
                  our deep market and technical expertise to trade tokens while
                  exploiting market inefficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
