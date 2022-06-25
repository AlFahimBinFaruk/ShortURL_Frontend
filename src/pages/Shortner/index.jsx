import { TextInput, Button, Group } from "@mantine/core";
const Shortner = () => {
  return (
    <>
      <TextInput label="Your shorten URL" placeholder="Enter URL" disabled />
      <Group mt="md">
        <Button fullWidth>Copy URL</Button>
      </Group>
    </>
  );
};

export default Shortner;
