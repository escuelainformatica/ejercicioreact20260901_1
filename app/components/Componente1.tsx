import { useEffect, useState } from "react";
import type { SieteRest } from "../models/interfaces";
import LeerSieteRestAPI from "../services/SieteRestAPI";

export default function Componente1() {
    const [datos, setDatos] = useState<SieteRest | null>(null);
    useEffect(() => {
        LeerSieteRestAPI()
            .then((data) => {
                setDatos(data);
            });
    }, []);
    const obsJSX= datos?.Series.Obs.filter(obs => obs.statusCode == "OK").map((obs, index) => (
        <div key={index}>
            <span>IndexDateString: {obs.indexDateString}</span><br/>
            <span>Value: {obs.value}</span><br/>
        </div>
    )); 

    return (
        <div>
            <h1>Componente 1</h1>
            <hr></hr>
            <span>Codigo: {datos?.Codigo}</span><br/>
            <span>Descripcion: {datos?.Descripcion}</span><br/>
            <span>Series: {datos?.Series.descripEsp}</span><br/>
            <span>Series: {datos?.Series.descripEsp}</span><br/>
            <span>SeriesId: {datos?.Series.seriesId}</span><br/>
            

            {obsJSX}
        </div>
    );
}
