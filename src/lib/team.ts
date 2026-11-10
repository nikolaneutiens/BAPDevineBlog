/** The team. The id is what posts and hour entries use to refer to someone. */
export const TEAM = [
  { id: 'lomme', name: 'Lomme Tack', role: 'Main developer & 2D designer', color: '#7db3e3' },
  { id: 'ximen', name: 'Ximen Dubois', role: 'Main 3D designer', color: '#e8665a' },
  { id: 'nikola', name: 'Nikola Neutiens', role: 'Main UX & 2D designer', color: '#95c78c' },
] as const;

export const MEMBER_IDS = ['lomme', 'ximen', 'nikola'] as const;
export type MemberId = (typeof MEMBER_IDS)[number];

export function member(id: MemberId) {
  return TEAM.find((m) => m.id === id)!;
}

export function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
