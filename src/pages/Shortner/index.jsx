import { TextInput, Button, Group } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../contexts/appContext";
const Shortner = () => {
  //app context
  const { shortURL, setShowAlert } = useGlobalAppContext();
  //navigate
  let navigate = useNavigate();

  //copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortURL);
    setShowAlert({ msg: "Copied to clipboad!", color: "teal" });
  };

  //if shortURL state is empty redirect it to homepage.
  useEffect(() => {
    if (!shortURL) {
      navigate("/");
    }
  }, [navigate, shortURL]);

  return (
    <>
      <TextInput label="Your shorten URL" placeholder={shortURL} disabled />
      <Group mt="md">
        <Button fullWidth onClick={copyToClipboard}>
          Copy URL
        </Button>
      </Group>
    </>
  );
};

export default Shortner;
