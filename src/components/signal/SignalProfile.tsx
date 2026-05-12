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
    <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
          Live profile
        </p>

        <h3 className="mt-5 text-4xl font-black tracking-tight">
          @{profile?.username ?? "chilean.innerfire"}
        </h3>

        <p className="mt-5 text-sm leading-7 text-slate-400">
          Personal Instagram signal: movement, mountain, memory, discipline and
          atmosphere.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Followers
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.followers_count)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Following
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.follows_count)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Media
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNumber(profile?.media_count)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Account
          </p>
          <p className="mt-2 text-sm font-semibold">
            {profile?.account_type ?? "Creator"}
          </p>
        </div>
      </div>
    </div>
  );
}