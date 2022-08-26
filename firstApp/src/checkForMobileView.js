export default function isMobileView() {
  const userAgent = navigator.userAgent || navigator.vendor;
  if (userAgent.includes("Mobile")) {
    return true;
  }
  return false;
}
