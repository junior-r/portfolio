import type { Certificate } from "@/types/certificate";

export const sortCerts = (certsArray: Certificate[]) => {
  return [...certsArray].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
