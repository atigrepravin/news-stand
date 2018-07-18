export function truncate(str, length) {
  const suffix = '...';
  return str.length < length
    ? str
    : str.substring(0, length - suffix.length) + suffix;
}
