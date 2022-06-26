import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
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
      <Link to="/">ShortURL</Link>
    </Text>
  );
}

export default Heading;
