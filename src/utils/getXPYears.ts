export function getXPYears(startYear: number): number {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years > 0 ? years : 1;
}
