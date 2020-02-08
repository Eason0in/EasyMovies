export const getContent = () =>
  fetch('https://httpbin.org/get').then(res => res.json());
