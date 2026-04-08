import "@/components/css/inline-loader.css";

export default function InlineLoader({ size = "medium" }) {
  return (
    <div className={`inline-loader inline-loader-${size}`}>
      <div className="inline-spinner"></div>
    </div>
  );
}