export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl bg-[#D4C4B0] animate-pulse"
        />
      ))}
    </div>
  );
}
