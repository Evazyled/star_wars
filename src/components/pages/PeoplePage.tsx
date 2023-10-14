import React, { useEffect, useState } from "react";
import People from "../../API/PeopleService";
import { IPeople } from "../../types/types";
import { Link } from "react-router-dom";
const PeoplePage = () => {
  const [people, setPeople] = useState<any>(null);
  const fetch = async () => {
    const res = await People.getAll();
    setPeople(res.results);
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
        people.map((el: IPeople) => {
          return (
            <>
              <h2 key={el.name}>{el.name}</h2>
              <Link to={el.url}>
                <h3>{el.url}</h3>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};

export default PeoplePage;
