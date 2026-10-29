// Contract: docs/contract.md. Pure function; do not mutate claims.
function normalizeId(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

export function getClaim(claims, viewerId, claimId) {
  if (!Array.isArray(claims)) return null;
  const target = normalizeId(claimId);
  const viewer = normalizeId(viewerId);
  if (target === null || viewer === null) return null;
  return claims.find(claim =>
    claim !== null && typeof claim === 'object' &&
    normalizeId(claim.id) === target &&
    normalizeId(claim.ownerId) === viewer
  ) ?? null;
}
