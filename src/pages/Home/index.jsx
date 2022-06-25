import { TextInput, Button, Group } from "@mantine/core";
const Home = () => {
  return (
    <>
      <TextInput
        required
        label="Paste the URL to be shortened"
        placeholder="Enter URL"
      />

      <Group mt="md">
        <Button fullWidth>Shorten URL</Button>
      </Group>
    </>
  );
};

export default Home;
