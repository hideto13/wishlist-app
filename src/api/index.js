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

export async function getUserWishesById(userId) {
  return await fetch(`${API_HOST}/wishes/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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

export async function addWish(token, wish) {
  const json = { name: wish.name }
  if (wish.link) json.link = wish.link
  if (wish.image) json.image = wish.image
  if (wish.description) json.description = wish.description
  if (wish.price) json.price = wish.price

  return await fetch(`${API_HOST}/wishes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(json),
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
