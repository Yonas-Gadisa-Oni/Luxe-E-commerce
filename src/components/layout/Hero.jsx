import HeroStats from "./HeroStates";
import TrendingProduct from "./TrendingProduct";

function Hero() {
  return (
    <main className="relative top-[55px] h-[calc(100vh_-_56px)] min-h-[450px] w-full overflow-hidden bg-[linear-gradient(115deg,#172238_0%,#253149_48%,#4b5360_100%)] max-[700px]:h-[calc(100vh_-_76px)] max-[700px]:min-h-[650px] max-[481px]:top-[-10px] max-[481px]:h-[70vh] max-[394px]:h-[50px] max-[394px]:min-h-[620px]">

      {/* Background shoe */}
      <div className="absolute w-[min(1200px)] opacity-60 max-[900px]:right-[-80px] max-[900px]:w-[75%] max-[900px]:opacity-90 max-[700px]:top-[140px] max-[700px]:right-[-100px] max-[700px]:h-[55%] max-[700px]:w-full max-[700px]:opacity-10">
        <img
          src="https://images.unsplash.com/photo-1625860191460-10a66c7384fb?w=1400&h=700&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(17,29,50,0.98)_0%,rgba(20,34,58,0.9)_35%,rgba(30,42,63,0.55)_68%,rgba(30,40,55,0.25)_100%)] max-[700px]:hidden"></div>

      {/* Hero content */}
      <div className="relative z-[2] mx-auto flex h-full w-[1200px] items-center max-[900px]:w-[calc(100%_-_60px)] max-[700px]:w-[calc(100%_-_40px)] max-[700px]:items-start max-[700px]:pt-[90px] max-[394px]:w-[calc(100%_-_30px)] max-[394px]:pt-[65px]">

        <div className="mt-[100px] w-[600px] max-[700px]:mt-0 max-[700px]:w-full max-[700px]:max-w-[500px]">
 
          <div className="mb-[17px] inline-flex items-center rounded-[20px] border border-blue-400/25 bg-blue-600/20 px-2 py-1 text-xl font-semibold text-blue-300 max-[700px]:mb-[18px] max-[700px]:text-[8px]">
            ✦ New Season Collection - SS26
          </div>

          <h1 className="m-0 text-[80px] font-bold leading-[1.05] tracking-[-1.2px] text-white max-[700px]:text-[clamp(38px,10vw,52px)] max-[700px]:tracking-[-1.8px] max-[394px]:text-4xl">
            Wear What
            <span className="block bg-[linear-gradient(90deg,#55a5ff,#00c9bd)] bg-clip-text text-transparent">Defines You</span>
          </h1>

          <p className="my-[14px] mx-0 text-[27px] font-normal leading-[1.7] text-[#c4ccd9] max-[700px]:mt-[18px] max-[700px]:text-[11px] max-[700px]:leading-[1.65] max-[394px]:text-[10px]">
            Curated premium products from the world's best
            <br className="desktop-break" />
            brands. Discover new arrivals and timeless classics.
          </p>

          <div className="flex items-center gap-2.5 max-[700px]:flex-wrap max-[700px]:gap-2">
            <a href="#" className="inline-flex h-[50px] w-[250px] items-center justify-center rounded-[10px] bg-[#1769ed] px-[13px] text-xl font-bold text-white no-underline shadow-[0_4px_12px_rgba(23,105,237,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2879f5] max-[700px]:h-[38px] max-[700px]:w-auto max-[700px]:px-4 max-[700px]:text-[10px]">
              Shop Collection <span>→</span>
            </a>

            <a href="#" className="inline-flex h-[50px] w-[250px] items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.14] px-[13px] text-xl font-bold text-white no-underline transition hover:-translate-y-0.5 max-[700px]:h-[38px] max-[700px]:w-auto max-[700px]:px-4 max-[700px]:text-[10px]">
              View Lookbook
            </a>
          </div>

          <div className="mt-5 h-px w-full bg-white/[0.08] max-[700px]:mt-[25px]"></div>

          <HeroStats />

        </div>
      </div>

      <TrendingProduct />

    </main>
  );
}

export default Hero;