import Componente1 from "~/components/Componente1";
import ComponenteRef2 from "~/components/ComponenteRef2";
import type { Route } from "./+types/home";
import TimeSeriesChart from "~/components/Chart2";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <ComponenteRef2 />
    
  </>
}
