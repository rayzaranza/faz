import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { Plus } from "lucide-react";
import { Text } from "./components/Text";
import { Input } from "./components/Input";
import { Card } from "./components/Card";

export function App() {
  return (
    <div className="grid h-dvh place-content-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Text variant="h1">título 1</Text>
          <Text variant="h2">título 2</Text>
          <Text variant="h3">título 3</Text>
          <Text variant="body">corpo</Text>
          <Text variant="caption">legenda</Text>
        </div>

        <div className="flex place-items-center gap-5">
          <Icon icon={Plus} size="large" />
          <Icon icon={Plus} />
          <Icon icon={Plus} size="small" />
        </div>

        <Input label="email" />
      </div>

      <div className="flex gap-4">
        <Button icon={Plus}></Button>
        <Button variant="accent">botão</Button>
        <Button variant="danger">botão</Button>
      </div>

      <Card title="asdadsad" />
    </div>
  );
}
