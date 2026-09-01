import React, { useRef, useState, useEffect } from 'react';
import SieteRestAPI from '../services/SieteRestAPI';
import { 
  Chart, 
  Title, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  type ChartOptions, 
  type HighchartsReactRefObject 
} from '@highcharts/react';
import { LineSeries } from '@highcharts/react/series/Line';

export default function TimeSeriesChart() {
  const graficoRef = useRef<HighchartsReactRefObject>(null);

  // 1. Configuramos el tipo de eje X como 'datetime'
  const [chartOptions] = useState<ChartOptions>({
    chart: {
      type: 'line',
      backgroundColor: '#fafafa'
    }
  });

  // 2. Definimos los datos como tuplas [timestamp_en_milisegundos, valor]
  // Date.UTC(año, mes_index, día) genera el formato exacto que Highcharts necesita
  // Nota: El mes en JavaScript es de base 0 (0 = Enero, 1 = Febrero, etc.)

    function parseDDMMYYYY(dateString: string): Date {
    // 1. Split the string into ["dd", "mm", "yyyy"]
    const [day, month, year] = dateString.split('-').map(Number);

    // 2. JavaScript months are 0-indexed (0 = Jan, 11 = Dec)
    // Subtraction automatically handles the conversion to integer
    return new Date(year, month - 1, day);
    }
    const [revenueData, setRevenueData] = useState<[number, number][]>([]);

    useEffect(() => {   
        SieteRestAPI().then((data) => {
            const parsedData = data.Series.Obs
                .filter(obs => obs.statusCode === "OK")
                .map(obs => {
                    const date = parseDDMMYYYY(obs.indexDateString);
                    return [date.getTime(), parseFloat(obs.value)] as [number, number];
                });
            setRevenueData(parsedData);
        });

 
    }, []); 


  



  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto' }}>
      <Chart options={chartOptions} ref={graficoRef}>
        <Title>Evolución Financiera Mensual (2026)</Title>
        
        {/* 3. Indicamos explícitamente que el eje X procesa fechas */}
        <XAxis 
          type="datetime" 
          dateTimeLabelFormats={{
            month: '%b %Y' // Formato visual de las etiquetas del eje (ej: "Jan 2026")
          }}
        />
        
        <YAxis>
          <Title>Valor (USD en Millones)</Title>
        </YAxis>

        {/* 4. El tooltip formateará automáticamente la fecha en la cabecera */}
        <Tooltip 
          shared={true} 
          xDateFormat="%B %Y" // Formato completo al pasar el cursor (ej: "January 2026")
          valuePrefix="$" 
          valueSuffix="" 
        />
        
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />

        {/* Pasamos los arreglos de tuplas directamente a las series */}
        <LineSeries name="Ingresos Reales" data={revenueData} color="#00aa66" />
        
      </Chart>
    </div>
  );
}
