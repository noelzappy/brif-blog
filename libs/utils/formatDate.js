export const formatDate = (a) => {
  if (!a) return null;

  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const date = new Date(a);
  return longEnUSFormatter.format(date);
};
