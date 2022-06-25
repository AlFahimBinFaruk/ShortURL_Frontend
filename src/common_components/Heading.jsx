import { Text } from "@mantine/core";
function Heading() {
  return (
    <Text
      component="h1"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
    >
      ShortURL
    </Text>
  );
}

export default Heading;
