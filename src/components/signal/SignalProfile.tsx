import type { InstagramProfile } from "@/lib/instagram";

type SignalProfileProps = {
  profile: InstagramProfile | null;
};

function formatNumber(value?: number) {
  if (typeof value !== "number") return "—";

  return new Intl.NumberFormat("en", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

export function SignalProfile({ profile }: SignalProfileProps) {
  return (
    <div className="flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.28em] text-violet-300 sm:text-xs sm:tracking-[0.35em]">
          Live profile
        </p>

        <h3 className="mt-5 min-w-0 break-all text-[2rem] font-black leading-none tracking-tight sm:text-[2.6rem] md:text-5xl">
          @{profile?.username ?? "chilean.innerfire"}
        </h3>

        <p className="mt-5 text-sm leading-7 text-slate-400">
          Personal Instagram signal: movement, mountain, memory, discipline and
          atmosphere.
        </p>
      </div>

      <div className="mt-8 grid w-full min-w-0 grid-cols-2 gap-3">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="truncate text-[10px] uppercase tracking-[0.22em] text-slate-500">
            Followers
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.followers_count)}
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="truncate text-[10px] uppercase tracking-[0.22em] text-slate-500">
            Following
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.follows_count)}
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="truncate text-[10px] uppercase tracking-[0.22em] text-slate-500">
            Media
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.media_count)}
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="truncate text-[10px] uppercase tracking-[0.22em] text-slate-500">
            Account
          </p>
          <p className="mt-2 truncate text-sm font-semibold">
            {profile?.account_type ?? "Creator"}
          </p>
        </div>
      </div>
    </div>
  );
}