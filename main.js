const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDEzZjU3NjZiNjE5OTVlZDcxMDQ2MmJhY2ExNTMyYyIsIm5iZiI6MTcyMzA2MTE0MS43MzI4NDEsInN1YiI6IjY2YjJiZGQwYTg0MDk3ZjBmMWI5NjBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2MConabKQ2R_VtJxVGTCuRqqo5VYQqIuJ2m4R_wDBK0",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
