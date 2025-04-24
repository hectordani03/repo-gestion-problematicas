const API_URL = import.meta.env.VITE_API_URL;

export async function getCSRFToken() {
  const res = await fetch(`${API_URL}/csrf-token`, {
    credentials: "include",
  });

  const { csrfToken } = await res.json();

  return csrfToken;
}

export async function register(data) {
  const csrfToken = await getCSRFToken();

  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorRes = await res.json();
    const msg =
      res.status !== "422" ? errorRes.err : "Hubo un problema en el registro";

    return { success: false, err: msg };
  }

  const dataRes = await res.json();
  return { success: true, data: dataRes };
}
