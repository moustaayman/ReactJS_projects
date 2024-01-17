import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person}></Person>;
      })}
    </section>
  );
};
export default List;
