// Standalone educational example; not application source or an API contract.
const visibleStates = new Set(["queued", "working", "review", "done"]);

export function publicStatus(record) {
  const input = record && typeof record === "object" ? record : {};
  const progress = Number.isFinite(input.progress) ? input.progress : 0;
  return {
    state: visibleStates.has(input.state) ? input.state : "unknown",
    progress: Math.round(Math.min(100, Math.max(0, progress))),
  };
}

const syntheticRecord = {
  state: "review",
  progress: 75,
  internalNote: "Fictional detail excluded from the public projection",
};

console.log(JSON.stringify(publicStatus(syntheticRecord)));
