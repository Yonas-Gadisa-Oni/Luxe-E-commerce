import {
  Truck,
  RotateCcw,
  LockKeyhole,
  Trophy,
} from "lucide-react";

function BenefitsBar() {
  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $75",
    },
    {
      icon: RotateCcw,
      title: "Free Returns",
      description: "30-day return policy",
    },
    {
      icon: LockKeyhole,
      title: "Secure Payments",
      description: "SSL encrypted checkout",
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Authenticity guaranteed",
    },
  ];

  return (
    <section className="relative top-[50px] w-full border-b border-[#eef1f5] bg-white max-[520px]:top-0">
      <div className="mx-auto grid min-h-[72px] w-[calc(100%_-_40px)] max-w-[1235px] grid-cols-4 items-center gap-[35px] max-[900px]:grid-cols-2 max-[900px]:gap-x-[30px] max-[900px]:gap-y-[18px] max-[900px]:py-[15px] max-[520px]:w-[calc(100%_-_30px)] max-[520px]:gap-x-2.5 max-[520px]:gap-y-[18px] max-[360px]:grid-cols-1">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className="flex items-center gap-3 max-[520px]:gap-1.5 max-[360px]:justify-center" key={benefit.title}>
              <div className="flex size-7 shrink-0 items-center justify-center text-[#f2a53b] max-[520px]:w-[23px]">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="m-0 mb-[3px] text-[13px] font-bold text-[#13223a] max-[520px]:text-[10px]">{benefit.title}</h3>
                <p className="m-0 text-[11px] text-[#718097] max-[520px]:text-[8px]">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BenefitsBar;