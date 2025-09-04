// Safe Trend Radar — zero external deps, never crashes
exports.handler = async function() {
  const today = new Date().toISOString().slice(0, 10);
  const items = [
    { platform: "TikTok",        title: "#gymtok hook edit",         hint: "10–13s, chorus up front" },
    { platform: "TikTok",        title: "POV dating skit → chorus",  hint: "relatable + lyric overlay" },
    { platform: "IG Reels",      title: "Streetwear fit + beat drop",hint: "caption asks a Q" },
    { platform: "IG Reels",      title: "Open-verse challenge",      hint: "leave 8 bars, pin best" },
    { platform: "YouTube Shorts",title: "BTS studio + one-liner",     hint: "hook within 2s" },
    { platform: "GoogleTrends",  title: "UK trending searches",       hint: "tie-in copy, avoid newsy" }
  ];

  return {
    statusCode: 200,
    headers: { "content-type": "application/json", "cache-control": "public, max-age=300" },
    body: JSON.stringify({ date: today, items })
  };
};
