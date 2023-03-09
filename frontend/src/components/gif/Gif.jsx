import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import Button from "../common/Button";
// import { AllGift } from "../../services/sessions";
const GifContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: #fff;
  gap:2px;
  width: 96%;
  min-hight: 50vh;
  margin:8px;
`;

const EachGif = styled.div`
  color: #333;
  background-color: #fff;
  height: 300px;
  padding: 15px;
  margin:5px;
`;

const Img = styled.img`
height:200px;
width:200px;
`;


const Gif = () => {
  let [gifs, setGifs] = useState([]);
  const { token } = useContext(AuthContext);
  const allGift = async () => {

    const gifs = await axios.get(
      `http://127.0.0.1:3000/gifs?access_token=${token}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setGifs(gifs.data);
  };

  useEffect(() => {
    allGift();
  }, []);

  const saveGift = (id) => {
    alert("Do you want to save!")
  };
  
  const gifsList = gifs.map((ele) => {
    return (
      <EachGif key={ele.id}>
        <Button onClick={saveGift(ele.id)}>Save Gif</Button>
        <h1>{ele.title}</h1>
        <Img src={ele.url} />
      </EachGif>
    );
    
  })
  return (
    <>
      <GifContainer>{gifsList}</GifContainer>
    </>
  );
};

export default Gif;
