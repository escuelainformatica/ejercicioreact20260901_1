import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("pagina1","routes/pagina1.tsx"),
    route("pagina2", "routes/pagina2.tsx"),
] satisfies RouteConfig;
