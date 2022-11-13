import { useEffect, useState } from "react";
import { Paper, Tab, Tabs, Typography, Box } from "@material-ui/core/";
import { Device, DeviceList } from "../../messages/compiled";
import { Table } from "../../components/Table";
import api from "../../services/api";
import Switch from "react-switch";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {
            value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )
        }
        </div>
    );
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
export default function Home() {
   
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };
  
    const [lights, setLights] = useState([] as any);
    const [tvs, setTvs] = useState([] as any);
    const [freezers, setFreezers] = useState([] as any);
    const [temperatureSensors, setTemperatureSensors] = useState([] as any);
    const [refresh, setRefresh] = useState<boolean>(false)

    function changeStatus(device: any) {
        const message = Device.create({ ...device, status: !device.status });
        const encodedMessage = Device.encode(message).finish();
        api.patch(`/device/${device.id}`, encodedMessage.slice(0, encodedMessage.length), {
            headers: {
                'content-type': 'application/x-protobuf'
            }
        }).then(() => {
            setRefresh(!refresh);
        })
    }

    function handleStatus(device: any) {
        console.log(device)
        return (
            <>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <Switch onChange={() => changeStatus(device)} checked={Boolean(device.status) }></Switch>
                </div>
            </>
        );
    }

    function getData() {
        api.get('/device/', { responseType: 'arraybuffer', responseEncoding: "binary" }).then(response => {
            
            const devices = DeviceList.decode(new Uint8Array(response.data)).devices;
            const lightsData: any = [];
            const tvsData: any = [];
            const freezersData: any = [];
            const temperatureSensorsData: any = [];

            devices.forEach((device: any) => {
                if (device.light)
                    return (lightsData.push([device.id, device.ip, device.port, device.light.name, device.light.color,  handleStatus(device)]));
                if (device.tv)
                    return (tvsData.push([device.id, device.ip, device.port, device.tv.channel, device.tv.volume, handleStatus(device)]));
                if (device.freezer)
                    return (freezersData.push([device.id, device.ip, device.port, device.freezer.temperature, device.freezer.power, handleStatus(device)]));
                if (device.temperatureSensor)
                    return (temperatureSensorsData.push([device.id, device.ip, device.port, device.temperatureSensor.temperature, handleStatus(device)]));

            })

            setLights(lightsData);
            setTvs(tvsData);
            setFreezers(freezersData);
            setTemperatureSensors(temperatureSensorsData);
        
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setRefresh(!refresh);
        }, 10000);
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [refresh])
   

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Freezers" {...a11yProps(0)} />
                    <Tab label="Luzes" {...a11yProps(1)} />
                    <Tab label="Sensores de Temperatura" {...a11yProps(2)} />
                    <Tab label="Tvs" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Table data={ freezers } headers={["ID", "IP","Porta", "Temperatura", "Modo", "Status"]} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Table data={ lights } headers={["ID", "IP","Porta", "Local", "Cor", "Status"]} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Table data={ temperatureSensors } headers={["ID", "IP","Porta", "Temperatura", "Status"]} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Table data={ tvs } headers={["ID", "IP","Porta", "Canal", "Volume", "Status", ]} />
            </TabPanel>
        </Box>
    )
}