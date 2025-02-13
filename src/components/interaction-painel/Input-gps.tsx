import { Button, Flex, Radio, Select, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";


const routeSchema = z.object({
  originAddress: z.string(),
  destinAddress: z.string(),
  TravelMode: z.enum(["DRIVE", "WALK", "TRANSIT", "BICYCLE"]),
  haveCar: z.boolean()
})

type RouteFormResponse = z.infer<typeof routeSchema>

export interface dataRouteResponse {
  originAddress: string,
  destinAddress: string
}

interface sendDataRouteFn {
  onSubmit: (data: dataRouteResponse) => void;
}


export function InputGps(  { onSubmit } : sendDataRouteFn) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<RouteFormResponse>()

  function handleRoute(data: dataRouteResponse) {
    onSubmit(data);
  }


  return (
    <div className="flex bg-[#253974] border border-[#3A4F97] gap-5 p-5 rounded-lg">
      <form action="" onSubmit={handleSubmit(handleRoute)} >
        <Flex direction='column' justify={"center"} gap={'2'} >

          <Flex direction='column' className="gap-3">

            <div className="flex items-center gap-2 ">
              <Text as="label" className="w-full">From
                <TextField.Root placeholder="City Or Station" className="flex items-center" {...register('originAddress')} />
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <Text as="label" className="w-full">To
                <TextField.Root placeholder="City Or Station" className="flex items-center" {...register('destinAddress')} />
              </Text>
            </div>

          </Flex>

          <Flex gap={"7"} justify={"center"} align={'center'}>

            <Text as="label">Have Car?
              <Flex gap={'3'} pt={'1'}>
                <Flex asChild gap="2">
                  <Text as="label" size="2">
                    <Radio name="haveCar" value="yes" defaultChecked />
                    Yes
                  </Text>
                </Flex>

                <Flex asChild gap="2">
                  <Text as="label" size="2">
                    <Radio name="haveCar" value="No" defaultChecked />
                    No
                  </Text>
                </Flex>
              </Flex>
            </Text>



            <Flex>
              <Select.Root defaultValue="save">
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="save" disabled>Saving</Select.Item>
                    <Select.Item value="money">Money</Select.Item>
                    <Select.Item value="time">Time</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>


          </Flex>

          <Flex pt={'3'}>
            <Button size={'3'} type="submit" disabled={isSubmitting}>
              Calculate
            </Button>
          </Flex>
        </Flex>


      </form>
    </div>
  )
}