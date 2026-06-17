export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className || ""}`}
      style={{ width: size, height: size }}
    >
      {name}
    </span>
  );
}
