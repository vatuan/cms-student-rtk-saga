export const getMarkColor = (mark: number) => {
  if (mark >= 8) return "text-green-500";
  if (mark >= 4) return "text-yellow-500";
  return "text-red-500";
};
