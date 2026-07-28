interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

export function useHttp() {
  const config = useRuntimeConfig()

  async function request<T = unknown>(
    url: string,
    options: RequestInit & { params?: Record<string, unknown> },
  ): Promise<T> {
    const token = useCookie('token').value

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${config.public.apiBase}${url}`, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<T> = await response.json()

    if (result.code !== 0 && result.code !== 200) {
      throw new Error(result.message || '请求失败')
    }

    return result.data
  }

  return {
    get: <T>(url: string, params?: Record<string, unknown>) =>
      request<T>(url, { method: 'GET', params }),
    post: <T>(url: string, data?: unknown) =>
      request<T>(url, { method: 'POST', body: data ? JSON.stringify(data) : undefined }),
    put: <T>(url: string, data?: unknown) =>
      request<T>(url, { method: 'PUT', body: data ? JSON.stringify(data) : undefined }),
    delete: <T>(url: string) => request<T>(url, { method: 'DELETE' }),
  }
}
