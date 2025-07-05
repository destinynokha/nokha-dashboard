function decodePassword(encoded, key = 7) {
  return encoded.split('').map(char =>
    String.fromCharCode(char.charCodeAt(0) ^ key)
  ).join('');
}

const BRANCH_CONFIG = {
  nokha: {
    name: "NOKHA TYRES",
    username: "naresh",
    password: decodePassword("ihlof654"), // "nokha123"
    apiUrl: "https://script.google.com/macros/s/AKfycbym7YGcofE9savrP00LEpehuGSZPlGwM5tHd7kucL_HPiwZI6F_YXOLx2I_YtvT5IJUUg/exec"
  },
  honda: {
    name: "HONDA",
    username: "radheshyam",
    password: decodePassword("idkda654"), // "honda123"
    apiUrl: "https://script.google.com/macros/s/AKfycbw-YClOVhPyxUp0AQM3m7261embbCmO-BeM-ZGQmSewC2qvLN8i8yvZGU5Aeg7HONcs/exec"
  },
  bikaner: {
    name: "BIKANER MAIN",
    username: "sishpal",
    password: decodePassword("cildkhld654"), // "bikaner123"
    apiUrl: "https://script.google.com/macros/s/AKfycbwJlH4BxuDKmyJndQzWXW65Ik7DuYdJvyFPzFishfvOZz76-kok6MAupf2wZazlh_CO/exec"
  }
};
