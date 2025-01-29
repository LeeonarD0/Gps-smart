import { Table } from "@radix-ui/themes";
import { getGeocodePlace } from "../../app/api/get-geocode-place";
import { getRoute } from "../../app/api/get-routes";
import { useEffect, useState } from "react";

export function OutputGps() {
  const [routes, setRoutes] = useState<any[]>([]);


  useEffect(() => {
    const fetchRoutes = async () => {
      const originAddressString = localStorage.getItem('originAddres') ?? '';
      const destinAddressString = localStorage.getItem('destinAddress') ?? '';

      const { latitude: originLat, longitude: originLng } = await getGeocodePlace(originAddressString);
      const { latitude: destinLat, longitude: destinLng } = await getGeocodePlace(destinAddressString);

      const dataRoutes = await getRoute({
        originLat,
        originLng,
        destinLat,
        destinLng,
        travelMode: "WALK"
      });

      setRoutes(dataRoutes.routes);
    };

    fetchRoutes();
  }, []);

  return (
    <div className="bg-[#253974] border border-[#304384] rounded-lg">
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell align="center">Routes</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">Time</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center"> to travel</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">Cost</Table.ColumnHeaderCell>
        </Table.Header>

        <Table.Body>
          {routes.map((route, index) => (
            <Table.Row key={index}>
              <Table.Cell align="center">Drive</Table.Cell>
              <Table.Cell align="center"></Table.Cell>
              <Table.Cell align="center">{(route.duration)} minutes</Table.Cell>
              <Table.Cell align="center">$20</Table.Cell>
            </Table.Row>
          ))}

          <Table.Row>
            <Table.Cell align="center">Bus</Table.Cell>
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
