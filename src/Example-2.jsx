export const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function List() {
  const chemist = people.filter((person) => person.profession === "chemist");

  const listItems = chemist.map((person) => (
    <li>
      <p>
        <b>{person.name}: </b>
        {person.profession}
      </p>
    </li>
  ));

  return (
    <>
      <h1>Chemists: </h1>
      <ul>{listItems}</ul>
    </>
  );
}
