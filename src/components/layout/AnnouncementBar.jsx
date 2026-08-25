function AnnouncementBar() {
  return (
    <div className="fixed top-0 right-0 left-0 z-[1000] flex min-h-[30px] w-full items-center justify-center bg-[#0d172b] px-4 text-[13px] font-medium tracking-[0.1px] text-white max-[600px]:min-h-[22px] max-[600px]:px-2.5 max-[600px]:text-[12px]">
      <p className="m-0 text-center leading-[1.4]">
        Free shipping on orders over $75 · Use code <strong>SAVE20</strong> for
        20% off
      </p>
    </div>
  );
}

export default AnnouncementBar;