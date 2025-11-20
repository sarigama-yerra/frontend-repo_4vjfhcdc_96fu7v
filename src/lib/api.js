export const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function getToken() {
  return localStorage.getItem('token') || ''
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export async function api(path, { method = 'GET', body, formData } = {}) {
  const headers = {}
  const token = getToken()
  if (!formData) headers['Content-Type'] = 'application/json'
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: formData ? formData : body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    let errMsg = `${res.status} ${res.statusText}`
    try {
      const data = await res.json()
      errMsg = data.detail || data.error || errMsg
    } catch {}
    throw new Error(errMsg)
  }
  const ct = res.headers.get('content-type') || ''
  if (ct.includes('application/json')) return res.json()
  return res.text()
}
