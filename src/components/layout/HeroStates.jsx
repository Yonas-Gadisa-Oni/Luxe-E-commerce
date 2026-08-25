function Hero() {
  const stats = [
    {
      value: "50K+",
      label: "Happy Customers",
    },
    {
      value: "4.9★",
      label: "Average Rating",
    },
    {
      value: "Free",
      label: "Returns Always",
    },
  ];

  return (
    <div className="mt-[22px] flex items-start gap-7 max-[600px]:mt-5 max-[600px]:gap-[22px] max-[380px]:gap-[15px]">
      {stats.map((stat) => (
        <div className="flex flex-col gap-0.5" key={stat.label}>
          <strong className="text-[30px] font-bold leading-none text-white max-[600px]:text-xs">{stat.value}</strong>
          <span className="text-[25px] font-normal leading-[1.3] text-[#9da9bb] max-[600px]:text-[7px]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Hero;