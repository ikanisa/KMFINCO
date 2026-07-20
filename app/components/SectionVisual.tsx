type SectionVisualProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function SectionVisual({ src, alt, className = "", eager = false }: SectionVisualProps) {
  return (
    <figure className={`section-visual ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
      />
    </figure>
  );
}
