import React, { useEffect, useState } from "react";
import GetPeople from "../../API/PeopleService";

const PeoplePage = () => {
  const [people, setPeople] = useState<any>(null);
  const fetch = async () => {
    const res = await GetPeople.getById();
    setPeople(res);
    console.log(res);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {!people ? (
        <h1>loading</h1>
      ) : (
        <h2>
          {people.name} : {people.height}
        </h2>
      )}
    </>
  );
};

export default PeoplePage;
