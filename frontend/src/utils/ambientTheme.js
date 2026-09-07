/**
 * Computes dynamic atmospheric ambient theming for HEATGUARD.
 * When in heatwave emergency -> Crimson Red emergency aura.
 * When raining -> Ocean / Slate Blue rain aura.
 * When safe -> Emerald Green.
 * When moderate -> Warm Amber / Yellow.
 */

export function getAmbientTheme(statusTier, isRaining = false) {
  if (isRaining || statusTier === 'BLUE') {
    return {
      tier: 'BLUE',
      bgGradient: 'bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950',
      radialAura: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.25) 0%, transparent 70%)',
      borderColor: 'border-sky-500/40',
      textColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      glowClass: 'shadow-[0_0_50px_-12px_rgba(2,132,199,0.3)]',
      accentColor: '#0284c7',
      isRain: true,
      label: 'MONSOON RAIN RELIEF'
    };
  }

  switch (statusTier) {
    case 'RED':
      return {
        tier: 'RED',
        bgGradient: 'bg-gradient-to-br from-red-950 via-slate-950 to-rose-950',
        radialAura: 'radial-gradient(ellipse at 50% 0%, rgba(220, 38, 38, 0.35) 0%, transparent 75%)',
        borderColor: 'border-red-600/60',
        textColor: 'text-red-400',
        badgeBg: 'bg-red-600/30 text-red-200 border-red-500/50',
        glowClass: 'shadow-[0_0_60px_-10px_rgba(220,38,38,0.5)] animate-glow-red',
        accentColor: '#dc2626',
        isRain: false,
        label: 'CRITICAL RED EMERGENCY'
      };

    case 'ORANGE':
      return {
        tier: 'ORANGE',
        bgGradient: 'bg-gradient-to-br from-orange-950 via-slate-950 to-amber-950',
        radialAura: 'radial-gradient(ellipse at 50% 0%, rgba(234, 88, 12, 0.25) 0%, transparent 70%)',
        borderColor: 'border-orange-500/40',
        textColor: 'text-orange-400',
        badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
        glowClass: 'shadow-[0_0_45px_-12px_rgba(234,88,12,0.35)]',
        accentColor: '#ea580c',
        isRain: false,
        label: 'HIGH HEAT WARNING'
      };

    case 'YELLOW':
      return {
        tier: 'YELLOW',
        bgGradient: 'bg-gradient-to-br from-amber-950 via-slate-950 to-yellow-950',
        radialAura: 'radial-gradient(ellipse at 50% 0%, rgba(202, 138, 4, 0.20) 0%, transparent 70%)',
        borderColor: 'border-amber-500/40',
        textColor: 'text-amber-400',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        glowClass: 'shadow-[0_0_40px_-12px_rgba(202,138,4,0.3)]',
        accentColor: '#ca8a04',
        isRain: false,
        label: 'MODERATE HEAT ADVISORY'
      };

    case 'GREEN':
    default:
      return {
        tier: 'GREEN',
        bgGradient: 'bg-gradient-to-br from-emerald-950 via-slate-950 to-green-950',
        radialAura: 'radial-gradient(ellipse at 50% 0%, rgba(22, 163, 74, 0.20) 0%, transparent 70%)',
        borderColor: 'border-emerald-500/40',
        textColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        glowClass: 'shadow-[0_0_40px_-12px_rgba(22,163,74,0.25)]',
        accentColor: '#16a34a',
        isRain: false,
        label: 'NORMAL / SAFE'
      };
  }
}
