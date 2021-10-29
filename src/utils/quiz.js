const obj = { name: 'Bilal', age: 69, cities: { current: 'isl', primary: 'rsl' } };

const { cities } = obj;

const { current, primary } = cities;

const currentCity = "rsl";
if (primary === currentCity) {
    console.log("true");
} else {
    console.log("false");
}
//register
//login
//home