function TrendingProduct() {
  return (
    <div className="absolute right-5 bottom-[9px] z-[5] flex h-[100px] w-[250px] items-center gap-1.5 rounded-[10px] bg-white px-2 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.15)] max-[600px]:hidden">
      <div className="h-[70px] w-[85px] shrink-0 overflow-hidden rounded-[5px]">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80"
          alt="Chronos Elite shoe"
        />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="mb-0.5 text-[15px] font-extrabold tracking-[0.3px] text-[#f15a3c]">TRENDING NOW</span>

        <h3 className="m-0 mb-0.5 whitespace-nowrap text-[15px] font-bold text-[#1d2939]">Chronos Elite</h3>

        <strong className="text-base font-bold text-[#1769ed]">$389</strong>
      </div>
    </div>
  );
}

export default TrendingProduct;