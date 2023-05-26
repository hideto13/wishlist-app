import { API_HOST } from '../constants'

export async function register(email, password) {
  return await fetch(`${API_HOST}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response
      }
      throw new Error(`Error: ${response.status}`)
    })
    .then(response => response.json())
    .catch(err => {
      throw new Error(err)
    })
}

export async function login(email, password) {
  return await fetch(`${API_HOST}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response
      }
      throw new Error(`Error: ${response.status}`)
    })
    .then(response => response.json())
    .catch(err => {
      throw new Error(err)
    })
}

export async function getUser(token) {
  return await fetch(`${API_HOST}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      if (response.ok) {
        return response
      }
      throw new Error(`Error: ${response.status}`)
    })
    .then(response => response.json())
    .catch(err => {
      throw new Error(err)
    })
}

export async function getUserWishes(token) {
  return await fetch(`${API_HOST}/wishes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      if (response.ok) {
        return response
      }
      throw new Error(`Error: ${response.status}`)
    })
    .then(response => response.json())
    .catch(err => {
      throw new Error(err)
    })
}
