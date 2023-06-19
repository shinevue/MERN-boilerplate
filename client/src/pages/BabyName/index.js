import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { getNameData } from "../../api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Name } from "../../components/Name";
import { GenderRadio } from "../../components/GenderRadio";

const BabyName = () => {
  const [names, setNames] = useState([]);
  const [handleSearch, setHandleSearch] = useState("");
  const [gender, setGender] = useState("");
  const [randName, setRandName] = useState({});

  const getData = async () => {
    if (localStorage.getItem("names")) {
      const storedNames = JSON.parse(localStorage.getItem("names"));
      setNames(storedNames);
    } else {
      const data = await getNameData();
      const sortData = data.data.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setNames(sortData);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const changeFavorite = (nameId) => {
    const tmpNames = [...names];
    tmpNames.find((baby) => baby.id === nameId).favorite ^= 1;
    setNames(tmpNames);
    localStorage.setItem("names", JSON.stringify(names));
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const stuffle = () => {
    const data = [...names];
    const sortData = data.sort((a, b) => {
      return Math.random() - 0.5;
    });
    setNames(sortData);
  };

  const SortName = () => {
    const data = [...names];
    const sortData = data.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setNames(sortData);
  };

  const randomName = () => {
    const randomId = Math.round(Math.random() * names.length - 1);
    const name = names[randomId];
    setRandName(name);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 8 }}>
      <div className="flex justify-center gap-10">
        <TextField
          value={handleSearch}
          onChange={(e) => {
            setHandleSearch(e.target.value.toLowerCase());
          }}
          label="Search"
          variant="outlined"
        />
        <GenderRadio handleChange = {handleChange} gender={gender} />
        <div>
          <Button variant="contained" onClick={SortName}>
            Sort
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={stuffle}>
            Shuffle
          </Button>
        </div>
        <div>
          <div>
            <Button variant="outlined" onClick={randomName}>
              Random Name
            </Button>
            <Name baby={randName} changeFavorite={changeFavorite} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap border my-5 p-5">
        <p className="text-2xl">Favorite: </p>
        {names
          .filter((baby) => baby.favorite)
          .map((baby) => (
            <Name baby={baby} changeFavorite={changeFavorite} />
          ))}
      </div>
      <div className="flex flex-wrap justify-center border p-3">
        {names
          .filter(
            (baby) =>
              baby.name.toLowerCase().includes(handleSearch) && !baby.favorite
          )
          .filter((baby) => baby.gender.includes(gender))
          .map((baby) => (
            <Name baby={baby} changeFavorite={changeFavorite} />
          ))}
      </div>
    </Container>
  );
};

export default BabyName;
