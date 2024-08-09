const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const nightMode = document.querySelector(".night_mode");
const morningMode = document.querySelector(".morning_mode");
const search = document.querySelector("#search");
const button = document.querySelector("button");
const cardContainer = document.querySelector(".card-container");
const cardList = document.querySelector(".card-list");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const card = document.querySelector(".card");

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
    data.results.forEach((el) => console.log(el.title));
    return data.results;
  } catch (err) {
    console.error(err);
  }
};

const createHtml = async (data) => {
  cardList.innerHTML = "";

  let searchValue = search.value.trim();
  let regex = new RegExp(searchValue, "i");

  if (searchValue === "") {
    return alert("fill out search box!");
  } else if (regex.test(data.title) === false) {
    let li = document.createElement("li");
    li.insertAdjacentHTML(
      "afterbegin",
      `
        <h3 class="not_found">Your input title couldn't match any movies...</h3>
      `
    );
    cardList.append(li);
  }

  data.forEach((movie) => {
    if (regex.test(movie.title)) {
      console.log(movie.title);
      let li = document.createElement("li");
      li.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card night_card">
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
  main.classList.toggle("night_main_bg");
  main.classList.toggle("morning_main_bg");
  // card.classList.toggle("night_card");
  // card.classList.toggle("morning_card");
  footer.classList.toggle("night_mode");
  footer.classList.toggle("morning_mode");
});

button.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    const movieData = await getFetchData();
    createHtml(movieData);
  } catch (err) {
    console.error(err);
  }
});
