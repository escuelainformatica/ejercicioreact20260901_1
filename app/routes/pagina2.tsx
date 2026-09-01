import Componente1 from "~/components/Componente1";
import ComponenteRef2 from "~/components/ComponenteRef2";
import type { Route } from "./+types/home";
import { useAppDispatch, useAppSelector } from '../store/store';
import { increment, incrementByAmount } from '../slice/counterSlice';
import { Link } from "react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const texto = useAppSelector((state) => state.texto.value);
  const numero = useAppSelector((state) => state.texto.numero);
  const booleano = useAppSelector((state) => state.texto.booleano);
  const dispatch = useAppDispatch();
  return <>
    <h1>Pagina 2</h1>
    <p>Count: {count}</p>
    <p>texto: {texto}</p>
    <p>numero: {numero}</p>
    <p>booleano: {booleano.toString()}</p>
    <button onClick={() => dispatch(increment())}>Increment by 1</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    <Link to="/pagina1">Ir a Pagina 1</Link>

  </>
}
