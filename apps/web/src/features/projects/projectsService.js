import { fetchWithAuthAndAutoRefresh } from "../../lib/api/client";

const API_URL = import.meta.env.VITE_API_URL;

export async function getCSRFToken() {
  const res = await fetch(`${API_URL}/csrf-token`, {
    credentials: "include",
  });

  const { csrfToken } = await res.json();

  return csrfToken;
}

export async function create(data) {
  const csrfToken = await getCSRFToken();

  const res = await fetchWithAuthAndAutoRefresh(`${API_URL}/project/create`, {
    method: "POST",
    headers: {
      "X-CSRF-Token": csrfToken,
    },
    body: JSON.stringify(data),
  });

  const bodyRes = await res.json();

  if (!res.ok) {
    if (res.status === 403)
      return { success: false, err: bodyRes.err, logout: true };

    return { success: false, err: bodyRes.err, logout: false };
  }

  return { success: true, data: bodyRes.data.application };
}
