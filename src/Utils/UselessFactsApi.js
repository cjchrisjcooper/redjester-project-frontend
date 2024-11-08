export const getUselessFact = () => {
  const uselessFactApi = fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
    {
      method: "GET",
      Accept: "text/plain",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return uselessFactApi;
};

export const parseUselessFact = (data) => {
  const uselessFact = data.text;
  return uselessFact;
};
