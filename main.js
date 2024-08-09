const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const nightMode = document.querySelector(".night_mode");
const morningMode = document.querySelector(".morning_mode");
const search = document.querySelector("#search");
const button = document.querySelector("button");
const cardContainer = document.querySelector(".card-container");
const cardList = document.querySelector(".card-list");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const getFetchData = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDEzZjU3NjZiNjE5OTVlZDcxMDQ2MmJhY2ExNTMyYyIsIm5iZiI6MTcyMzA2MTE0MS43MzI4NDEsInN1YiI6IjY2YjJiZGQwYTg0MDk3ZjBmMWI5NjBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2MConabKQ2R_VtJxVGTCuRqqo5VYQqIuJ2m4R_wDBK0",
      },
    };

    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.error(err);
  }
};

const createHtml = async (data) => {
  cardList.innerHTML = "";

  let searchValue = search.value.trim();
  if (searchValue === "") {
    return alert("fill out search box!");
  }

  let regex = new RegExp(searchValue, "i");

  data.forEach((movie) => {
    if (regex.exec(movie.title)) {
      console.log(movie.title);
      let li = document.createElement("li");
      li.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
          <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="img">
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
        </div>
        `
      );
      cardList.append(li);
    }
  });
};

sun.addEventListener("click", function () {
  header.classList.toggle("night_mode");
  header.classList.toggle("morning_mode");
  footer.classList.toggle("night_mode");
  footer.classList.toggle("morning_mode");
});

button.addEventListener("click", async function () {
  try {
    const movieData = await getFetchData();
    createHtml(movieData);
  } catch (err) {
    console.error(err);
  }
});
