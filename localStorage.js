export function getFromStorage(key) {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
}

export function setToStorage(key, value) {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
}
