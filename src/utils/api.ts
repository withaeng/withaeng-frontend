import { ApiResponse } from '@/types/api';

export async function apiPost<T, R>(
  url: string | URL | Request,
  body: T
): Promise<ApiResponse<R>> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

export function apiGet() {}
