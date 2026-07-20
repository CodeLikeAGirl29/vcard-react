export default function CropMarks() {
  const base = "absolute w-[22px] h-[22px] border-[1.4px] border-ink-soft/55";
  return (
    <>
      <span className={`${base} top-[18px] left-[18px] border-r-0 border-b-0`} />
      <span className={`${base} top-[18px] right-[18px] border-l-0 border-b-0`} />
      <span className={`${base} bottom-[18px] left-[18px] border-r-0 border-t-0`} />
      <span className={`${base} bottom-[18px] right-[18px] border-l-0 border-t-0`} />
    </>
  );
}
