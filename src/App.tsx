import { Button } from "./components/Button";

export function App() {
  return (
    <div className="h-dvh grid place-content-center gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">cabeçalho 1</h1>
        <h2 className="text-5xl">cabeçalho 2</h2>
        <h2 className="text-4xl">cabeçalho 3</h2>
        <p className="text-xl max-w-2xl">
          sdhai ygsdo haodhy ophs odgasd iogasdh asd gaosfc asdaisdais naaois7
          aosasdiasdaggadga asdgaysdgai agsdaisg gs sdgaa aidad agsda s
        </p>
      </div>
      <div className="flex gap-4">
        <Button>botão</Button>
        <Button variant="accent">botão</Button>
        <Button variant="danger">botão</Button>
      </div>
    </div>
  );
}
