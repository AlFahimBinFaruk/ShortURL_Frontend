import { TextInput, Button, Group } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../contexts/appContext";
import Loading from "../../common_components/Loading";

const Home = () => {
  //app context
  const { setShortURL, setShowAlert } = useGlobalAppContext();
  //navigate
  let navigate = useNavigate();
  //long url state
  const [longURL, setLongURL] = useState("");
  //loading state
  const [loading, setLoading] = useState(false);

  //handle submit
  const handleSubmit = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    if (longURL) {
      //set loading true at beginning
      setLoading(true);
      try {
        const res = await axios.post(API_URL, { longURL });
        setShortURL(res.data.shortURL);
        navigate("/shortner");
      } catch (error) {
        setShowAlert({ msg: error.message, color: "red" });
      }
      //set loading false after at the end
      setLoading(false);
    } else {
      setShowAlert({ msg: "Provide URL", color: "red" });
    }
  };

  //if loading is true show spinner
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <TextInput
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        required
        label="Paste the URL to be shortened"
        placeholder="Enter URL"
      />

      <Group mt="md">
        <Button fullWidth onClick={handleSubmit}>
          Shorten URL
        </Button>
      </Group>
    </>
  );
};

export default Home;
