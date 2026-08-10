import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/musicosy-logo.png.asset.json";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Musicosy home">
      <img
        src={logoAsset.url}
        alt="Musicosy"
        className={`${className} w-auto object-contain`}
        loading="lazy"
      />
    </Link>
  );
}
