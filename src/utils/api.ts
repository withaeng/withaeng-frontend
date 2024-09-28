import { getCookie } from 'cookies-next';
import { ApiResponse } from '@/types/api';

export async function apiPost<T, R>(
  url: string | URL | Request,
  body: T
): Promise<ApiResponse<R>> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: getCookie('accessToken') ?? '',
    },
  }).then((res) => res.json());
}

export function apiGet<R>(url: string | URL | Request): Promise<ApiResponse<R>> {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

export async function apiPut<T, R>(
  url: string | URL | Request,
  body: T
): Promise<ApiResponse<R>> {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: getCookie('accessToken') ?? '',
    },
  }).then((res) => res.json());
}

export async function apiPatch<T, R>(
  url: string | URL | Request,
  body: T
): Promise<ApiResponse<R>> {
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: getCookie('accessToken') ?? '',
    },
  }).then((res) => res.json());
}
