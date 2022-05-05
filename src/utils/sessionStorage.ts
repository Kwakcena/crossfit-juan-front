export function getItem(key: string) {
  const result = window.sessionStorage.getItem(key);

  return result !== null ? JSON.parse(result) : '';
}

export function saveItem<T = string>(key: string, value: T) {
  window.sessionStorage.setItem(key, JSON.stringify(value));

  return getItem(key);
}

export function deleteItem(key: string) {
  window.sessionStorage.removeItem(key);
}
