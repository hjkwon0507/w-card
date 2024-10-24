export const emailToBase64 = async (email: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(email);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashBase64 = btoa(String.fromCharCode(...hashArray));

  // Base64 문자열에서 불필요한 기호 제거하고 12자리만 반환
  return hashBase64.replace(/[^a-zA-Z0-9]/g, '').substring(0, 12);
};