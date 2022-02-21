const data = [
  {
    name: "Wempy Virgana",
    phoneNumber: "62877127323",
  },
  {
    name: "Cristiano Ronaldo",
    phoneNumber: "62812388833",
  },
  {
    name: "John Petrucci",
    phoneNumber: "62998109223",
  },
  {
    name: "Jokowi Dodo",
    phoneNumber: "62817443623",
  },
  {
    name: "Agnez Monica",
    phoneNumber: "62877246363",
  },
  {
    name: "Marion Jola",
    phoneNumber: "62812124412",
  },
];

const inputSearch = document.querySelector(".search-input");
const contactList = document.querySelector(".contact-list");

let search_term = "";

const showList = () => {
  contactList.innerHTML = "";

  data
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(search_term) ||
        item.phoneNumber.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const divContact = document.createElement("div");
      divContact.className = "flex my-2";
      divContact.innerHTML = `
      <div class="avatar bg-gray-100 p-2 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>
    <div class="mx-2 contact-list">
      <p class="name text-gray-700">${e.name}</p>
      <p class="phone-number text-xs text-gray-400">${e.phoneNumber}</p>
    </div>`;

      contactList.appendChild(divContact);
    });
};
showList();

inputSearch.addEventListener("input", (e) => {
  search_term = e.target.value.toLowerCase();
  showList();
});
