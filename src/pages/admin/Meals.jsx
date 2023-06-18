import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { postAdminMeals } from "../../store/admin/adminMealsThunk";
import { TextField } from "@mui/material";
import { MyButton } from "../../components/UI/button/Button";
import styled from "@emotion/styled";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    title: "",
    description: "",
    price: "",
  });

  const titleChangeHandler = (event) => {
    setValue({
      ...value,
      title: event.target.value,
    });
  };

  const descriptionChangeHandler = (event) => {
    setValue({
      ...value,
      description: event.target.value,
    });
  };

  const priceChangeHandler = (event) => {
    setValue({
      ...value,
      price: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: value.title,
      description: value.description,
      price: +value.price,
    };

    dispatch(postAdminMeals(data));

    setValue({
      title: "",
      description: "",
      price: "",
    });
  };

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <label>
          title
          <input
            type="text"
            value={value.title}
            onChange={titleChangeHandler}
          />
        </label>
        <label>
          description
          <input
            type="text"
            value={value.description}
            onChange={descriptionChangeHandler}
          />
        </label>
        <label>
          price
          <input
            type="number"
            value={value.price}
            onChange={priceChangeHandler}
          />
        </label>
        <div>
          <button>Add </button>
        </div>
      </form> */}
      <ContainerInput>
        <form onSubmit={submitHandler}>
          <div>
            <TextField
              type="text"
              label="Name food"
              value={value.title}
              onChange={titleChangeHandler}
            />
            <TextField
              type="number"
              label="Price food"
              value={value.price}
              onChange={priceChangeHandler}
            />
            <TextField
              type="text"
              label="Desciption food"
              value={value.description}
              onChange={descriptionChangeHandler}
            />
          </div>
          <MyButton
            type={"submit"}
            variant={"contained"}
            propswidth={"110px"}
            propsheight={"44px"}
            background={"#8A2B06"}
            propsborderradius={"20px"}
            hoverbackgroundcolor={"#7E2A0A"}
          >
            ADD
          </MyButton>
        </form>
      </ContainerInput>
      <ContainerItem>
        {meals.map((item) => (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <i>{item.description}</i>
            <h3>$ {item.price}</h3>
          </div>
        ))}
      </ContainerItem>
    </div>
  );
};
const ContainerInput = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  width: 400px;
  margin: 20px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 100%;
    }
  }
  button {
    margin: 30px;
  }
`;
const ContainerItem = styled("div")`
  div {
    margin: 20px auto;
    background-color: #fff;
    border-radius: 12px;
    width: 500px;
    text-align: center;
  }
`;
