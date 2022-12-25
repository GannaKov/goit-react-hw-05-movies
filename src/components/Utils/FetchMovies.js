
export function fetchFilms(page, trendUrl) {
    return fetch(buildUrl(page, trendUrl)).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  export function buildUrl(pageNumber, trendUrl) {
    // const mediaType = `movie`;
    // const time_window = `day`;
    //trend Url -->https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=
    return `${trendUrl}${pageNumber}`;
  }