import { Flex } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Column } from "./components/Column";

export const App = () => {
  return (
    <Flex gap={3} p={6} justify="center">
      <Column title="Now">
        <Card
          title="Card 1"
          tag={{ label: "Tag 1", color: "red" }}
          subtasks={[
            { label: "Subtask 1", color: "green" },
            { label: "Subtask 2", color: "blue" },
            { label: "Subtask 3", color: "purple" },
          ]} />
        <Card
          title="Card 2"
          tag={{ label: "Tag 2", color: "green" }}
          subtasks={[
            { label: "Subtask 1", color: "green" },
            { label: "Subtask 2", color: "blue" },
            { label: "Subtask 3", color: "purple" },
          ]} />
        <Card
          title="Card 3"
          tag={{ label: "Tag 3", color: "blue" }}
          subtasks={[
            { label: "Subtask 1", color: "green" },
            { label: "Subtask 2", color: "blue" },
            { label: "Subtask 3", color: "purple" },
          ]} />
      </Column>
      <Column title="Next">
        <Card title="Card 4" tag={{ label: "Tag 4" }} />
        <Card title="Card 5" tag={{ label: "Tag 5", color: "purple" }} />
        <Card title="Card 6" tag={{ label: "Tag 6", color: "red" }} />
      </Column>
      <Column title="Later">
        <Card title="Card 7" tag={{ label: "Tag 7", color: "green" }} />
        <Card title="Card 8" tag={{ label: "Tag 8", color: "blue" }} />
        <Card title="Card 9" tag={{ label: "Tag 9", }} />
      </Column>
    </Flex>
  )
}

