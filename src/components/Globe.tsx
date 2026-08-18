/**
 * Decorative rotating world globe — pure CSS/SVG, no runtime deps.
 * Used as the atmospheric backdrop of the bottom rail: the platform is global,
 * the astronaut is out of this world.
 */
export function Globe({ className = "" }: { className?: string }) {
  const meridians = [0, 22, 45, 68, 90, 112, 135, 158];

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="relative aspect-square w-full [perspective:900px]">
        {/* orbit rings */}
        <div className="absolute inset-[-14%] animate-globe-orbit rounded-full border border-primary/25 [transform:rotateX(74deg)]" />
        <div className="absolute inset-[-24%] animate-globe-orbit-slow rounded-full border border-white/8 [transform:rotateX(78deg)_rotateZ(18deg)]" />

        {/* sphere */}
        <div className="absolute inset-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_32%_28%,oklch(0.34_0.02_60),oklch(0.13_0.008_60)_62%,oklch(0.1_0.006_60))] shadow-[inset_0_0_60px_oklch(0_0_0/0.7),0_30px_80px_-40px_oklch(0.72_0.19_45/0.5)]">
          {/* latitudes */}
          <div className="absolute inset-0">
            {[16, 30, 44, 50, 56, 70, 84].map((t) => (
              <span
                key={t}
                className="absolute left-0 h-px w-full bg-white/14"
                style={{ top: `${t}%` }}
              />
            ))}
          </div>

          {/* rotating meridians */}
          <div className="absolute inset-0 animate-globe-spin">
            {meridians.map((deg) => (
              <span
                key={deg}
                className="absolute left-1/2 top-0 h-full w-1/2 origin-left rounded-[50%] border border-primary/25"
                style={{ transform: `translateX(-50%) rotateY(${deg}deg)` }}
              />
            ))}
          </div>

          {/* signal pings across the world */}
          {[
            { top: "34%", left: "28%" },
            { top: "52%", left: "62%" },
            { top: "24%", left: "68%" },
            { top: "68%", left: "40%" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 animate-globe-ping rounded-full bg-primary shadow-glow"
              style={{ ...p, animationDelay: `${i * 1.1}s` }}
            />
          ))}

          {/* terminator / atmosphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/70" />
        </div>

        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        <div className="absolute inset-[-6%] rounded-full bg-[radial-gradient(circle,transparent_58%,oklch(0.72_0.19_45/0.12)_66%,transparent_72%)]" />
      </div>
    </div>
  );
}
