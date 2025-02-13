import { Table } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { dataRouteResponse } from "./Input-gps";
import { getGeocodePlace } from "../../app/api/get-geocode-place";
import { getRoute, GetRouteResponse } from "../../app/api/get-routes";

export interface routesResultProps {
  mode: 'Bus' | 'Train' | 'Walk' | 'Cycling';
  timeToTravel: string;
  distance: string;
  cost: string;
}

export interface latitudeLongitudeSchema {
  origin: {
    latitude: number,
    longitude: number
  },
  destin: {
    latitude: number,
    longitude: number
  }
}

export function OutputGps({ originAddress, destinAddress }: dataRouteResponse) {
  const [latLng, setLatLng] = useState<latitudeLongitudeSchema>();
  const [routesResult, setRoutesResult] = useState<GetRouteResponse>();

  useEffect(() => {
    async function convertToLatLngFn(){ 
      const responseOrigin = await getGeocodePlace(originAddress)
      const responseDestin = await getGeocodePlace(destinAddress)

      setLatLng({
        destin: responseOrigin,
        origin: responseDestin
      })

      console.log(latLng)
    }    

    convertToLatLngFn()
  }, [originAddress, destinAddress])
 

  return (
    <div className="bg-[#253974] border border-[#304384] rounded-lg">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell align="center">Mode</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">time to travel</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">Distance</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">Cost</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell align="center"></Table.Cell>
            <Table.Cell align="center">13 Minutes.</Table.Cell>
            <Table.Cell align="center">5km</Table.Cell>
            <Table.Cell align="center">$50</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell align="center">Train</Table.Cell>
            <Table.Cell align="center">22 Minutes.</Table.Cell>
            <Table.Cell align="center">4km</Table.Cell>
            <Table.Cell align="center">$31</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell align="center">Walk</Table.Cell>
            <Table.Cell align="center">22 Minutes.</Table.Cell>
            <Table.Cell align="center">4km</Table.Cell>
            <Table.Cell align="center">$31</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell align="center">Cycling</Table.Cell>
            <Table.Cell align="center">22 Minutes.</Table.Cell>
            <Table.Cell align="center">4km</Table.Cell>
            <Table.Cell align="center">$31</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
