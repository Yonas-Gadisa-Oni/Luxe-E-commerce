import { ShoppingCart } from "lucide-react";

function Footer() {
  const footerColumns = [
    {
      title: "Shop",
      links: [
        "New Arrivals",
        "Best Sellers",
        "Sale",
        "Brands",
        "Gift Cards",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Order Status",
        "Returns",
        "Size Guide",
        "Contact Us",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Sustainability",
        "Affiliates",
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#0d172c] text-white">
      <div className="mx-auto grid min-h-[275px] w-[calc(100%_-_40px)] max-w-[1190px] grid-cols-[235px_1fr] gap-x-2.5 py-[61px] pb-[30px] max-[950px]:grid-cols-[200px_1fr] max-[950px]:gap-x-[35px] max-[700px]:grid-cols-1 max-[700px]:gap-y-10 max-[700px]:py-[45px] max-[700px]:pb-[35px] max-[480px]:w-[calc(100%_-_30px)] max-[480px]:gap-y-[38px] max-[480px]:py-[42px]">

        {/* Brand */}
        <div className="flex flex-col items-start max-[700px]:items-center max-[700px]:text-center">

          <a href="/" className="flex items-center gap-[9px] text-lg font-bold text-white no-underline max-[480px]:text-[17px]">
            <span className="flex size-[31px] items-center justify-center rounded-[7px] bg-[#1767f3] text-white">
              <ShoppingCart
                size={16}
                strokeWidth={2.5}
              />
            </span>

            <span>Luxe</span>
          </a>

          <p className="my-[17px] w-[205px] text-[13px] leading-[1.7] text-[#91a6c3] max-[700px]:w-[min(100%,300px)] max-[480px]:mt-3.5 max-[480px]:text-[11px] max-[480px]:leading-[1.6]">
            Premium lifestyle products curated for the
            discerning shopper. Quality guaranteed.
          </p>

          {/* Social Links */}
          <div className="flex gap-[11px]">

            <a
              href="#"
              className="flex size-[31px] items-center justify-center rounded-[7px] bg-[#17243b] text-[#91a3bc] no-underline transition hover:-translate-y-0.5 hover:bg-[#1767f3] hover:text-white"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="#"
              className="flex size-[31px] items-center justify-center rounded-[7px] bg-[#17243b] text-[#91a3bc] no-underline transition hover:-translate-y-0.5 hover:bg-[#1767f3] hover:text-white"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="flex size-[31px] items-center justify-center rounded-[7px] bg-[#17243b] text-[#91a3bc] no-underline transition hover:-translate-y-0.5 hover:bg-[#1767f3] hover:text-white"
              aria-label="Twitter"
            >
              𝕏
            </a>

          </div>

        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-3 gap-x-[60px] max-[950px]:gap-x-[30px] max-[700px]:w-full max-[700px]:gap-x-[15px] max-[700px]:text-center max-[480px]:grid-cols-1 max-[480px]:gap-y-[30px]">

          {footerColumns.map((column) => (
            <div
              className="max-[480px]:w-full max-[480px]:border-b max-[480px]:border-[#1b2941] max-[480px]:pb-[25px] last:max-[480px]:border-b-0 last:max-[480px]:pb-0"
              key={column.title}
            >
              <h3 className="m-[1px_0_19px] text-[13px] font-bold text-white max-[480px]:mb-3.5">{column.title}</h3>

              <nav className="flex flex-col gap-[13px] max-[700px]:items-center max-[480px]:gap-[11px]">
                {column.links.map((link) => (
                  <a className="text-[13px] leading-[1.3] text-[#91a6c3] no-underline transition-colors hover:text-white max-[480px]:text-[11px]" href="#" key={link}>
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}

        </div>

      </div>

      <div className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1190px] items-center justify-center gap-1.5 border-t border-[#1b2941] py-[18px] pb-[22px] text-[11px] tracking-[0.04em] text-[#71839d] max-[480px]:w-[calc(100%_-_30px)] max-[480px]:py-[17px] max-[480px]:pb-5 max-[480px]:text-[10px]">
        <span>Powered by</span>
        <strong className="font-bold text-[#d8f36c]">Yonas Gadisa</strong>
      </div>
    </footer>
  );
}

export default Footer;