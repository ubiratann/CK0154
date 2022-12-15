import { useEffect, useState } from "react";
import { Paper, Tab, Tabs, Typography, Box, Input, Snackbar } from "@material-ui/core/";
import Button from "@mui/material/Button"
import { Device, DeviceList } from "../../proto/compiled";
import { Table } from "../../components/Table";
import api from "../../services/api";
import Switch from "react-switch";
import { textAlign } from "@mui/system";


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
    
    const [openSnack, setOpenSnack] = useState(false);
    const [value, setValue] = useState(0);

    const [editingDevice, setEditingDevice] = useState<any>({});
    
    const [lights, setLights] = useState([] as any);
    const [presenceSensors, setPresenceSensors] = useState([] as any);

    const [airConditioners, setAirConditioners] = useState([] as any);
    const [heaters, setHeaters] = useState([] as any);
    const [temperatureSensors, setTemperatureSensors] = useState([] as any);
    
    const [fireSupressors, setFireSupressors] = useState([] as any);
    const [smokeSensors, setSmokeSensors] = useState([] as any);
    
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };

    const handleClose = (event: any, reason: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
    }

    const handleOpen = () => {
        setOpenSnack(true);
    }

    const snackAction = (
        <>
          <Button onClick={() =>{console.log(1)}}>
            UNDO
          </Button>
        </>
      );
    
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
    
    function editDeviceFields(device: any, devices: any){
        return [
            device.id,
            ...devices.fi
        ]
    }
    
    function updateDevices(device: any){
        setEditingDevice(device);
    }

    function save() {
        const device = editingDevice;
        const message = Device.create({ ...device });
        console.log(device)
        const encodedMessage = Device.encode(message).finish();
        api.put(`/objects/${device.id}`, encodedMessage.slice(0, encodedMessage.length), {
            headers: {
                'content-type': 'application/x-protobuf'
            }
        }).then(() => {
            setEditingDevice({})
            setRefresh(!refresh);
        })
    }

    function getData() {
        api.get('/device/', { responseType: 'arraybuffer', responseEncoding: "binary" }).then(response => {
            
            const devices = DeviceList.decode(new Uint8Array(response.data)).devices;
           
            const lightsData: any[] = [];
            const presenceSensorData: any[] = [];

            const airConditionersData: any[] = [];
            const heatersData: any[] = []; 
            const temperatureSensorsData: any[] = []
           
            const fireSupressorsData: any[] = []
            const smokeSensorData: any[] = []
            console.log(devices)
            devices.forEach((device: any) => {
                
                if (device.light)
                    return (lightsData.push([device.id, 
                                             device.ip, 
                                             device.port, 
                                             device.id == editingDevice.id ? <Input defaultValue={device.light.location} onChange={e => { editingDevice.light.location = e.target.value; updateDevices(editingDevice) }}/>  : device.light.location, 
                                             device.id == editingDevice.id ? <Input defaultValue={device.light.color} onChange={e => { editingDevice.light.color = e.target.value; updateDevices(editingDevice) }}/>  : device.light.color, 
                                             handleStatus(device),
                                             <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                    alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                    return;
                                                }
                                                setRefresh(!refresh);
                                                setEditingDevice(device);
                                             }}>
                                                {editingDevice.id === device.id ? "Save" : "Edit"}
                                             </Button>]));
                if (device.presencesensor)
                    return (presenceSensorData.push([device.id, 
                                                     device.ip, 
                                                     device.port, 
                                                     device.id == editingDevice.id ? <Input defaultValue={device.presencesensor.location} onChange={e => { editingDevice.presencesensor.location = e.target.value; updateDevices(editingDevice) }}/>  : device.presencesensor.location, 
                                                     handleStatus(device),
                                                     <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                        setRefresh(!refresh);
                                                        setEditingDevice(device);
                                                     }}>
                                                        {editingDevice.id === device.id ? "Save" : "Edit"}
                                                     </Button>]));
                
                if (device.heater)
                    return (heatersData.push([device.id, 
                                              device.ip, 
                                              device.port, 
                                              device.id == editingDevice.id ? <Input defaultValue={device.heater.temperature} onChange={e => { editingDevice.heater.temperature = e.target.value; updateDevices(editingDevice) }}/>  : device.heater.temperature, 
                                              handleStatus(device),
                                              <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                    alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                    return;
                                                }
                                                setRefresh(!refresh);
                                                setEditingDevice(device);
                                              }}>
                                                {editingDevice.id === device.id ? "Save" : "Edit"}
                                              </Button>
                                            ]));
                if (device.airconditioner)
                    return (airConditionersData.push([device.id, 
                                                      device.ip, 
                                                      device.port, 
                                                      device.id == editingDevice.id ? <Input defaultValue={device.airconditioner.temperature} onChange={e => { editingDevice.airconditioner.temperature = e.target.value; updateDevices(editingDevice) }}/>  : device.airconditioner.temperature,
                                                      handleStatus(device),
                                                      <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                        if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                            alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                            return;
                                                        }
                                                        setRefresh(!refresh);
                                                        setEditingDevice(device);
                                                      }}>
                                                        {editingDevice.id === device.id ? "Save" : "Edit"}
                                                      </Button>
                                                    ]));
                if (device.temperaturesensor)
                    return (temperatureSensorsData.push([device.id, 
                                                         device.ip, 
                                                         device.port, 
                                                         device.id == editingDevice.id ?<Input defaultValue={device.temperatureSensor.temperature} onChange={e => { editingDevice.temperatureSensor.temperature = e.target.value; updateDevices(editingDevice) }}/>  : device.temperatureSensor.temperature,
                                                         handleStatus(device),
                                                         <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                            if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                                alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                                return;
                                                            }
                                                            setRefresh(!refresh);
                                                            setEditingDevice(device);
                                                         }}>
                                                            {editingDevice.id === device.id ? "Save" : "Edit"}
                                                         </Button>]));

                if (device.firesupressor)
                    return (fireSupressorsData.push([device.id, 
                                                     device.ip, 
                                                     device.port, 
                                                     device.id == editingDevice.id ? <Input defaultValue={device.fireSupressor.location} onChange={e => { editingDevice.fireSupressor.location = e.target.value; updateDevices(editingDevice) }}/>  : device.fireSupressor.location,
                                                     handleStatus(device),
                                                     <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                        if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                            alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                            return;
                                                        }
                                                        setRefresh(!refresh);
                                                        setEditingDevice(device);
                                                      }}>
                                                      {editingDevice.id === device.id ? "Save" : "Edit"}
                                                      </Button>]));
                if (device.smokesensor)
                    return (smokeSensorData.push([device.id, 
                                                  device.ip, 
                                                  device.port, 
                                                  device.id == editingDevice.id ? <Input defaultValue={device.smokeSensor.location} onChange={e => { editingDevice.smokeSensor.location = e.target.value; updateDevices(editingDevice) }}/>  : device.smokeSensor.location,
                                                  handleStatus(device),
                                                  <Button onClick={editingDevice.id === device.id ? () => save() : () => {
                                                    if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                                                        alert("Finalize a edição do outro dispositivo antes de editar outro")
                                                        return;
                                                    }
                                                    setRefresh(!refresh);
                                                    setEditingDevice(device);
                                                  }}>
                                                  {editingDevice.id === device.id ? "Save" : "Edit"}
                                                  </Button>]));
            })

            setLights(lightsData);
            setPresenceSensors(presenceSensorData);


            setAirConditioners(airConditionersData)
            setHeaters(heatersData);
            setTemperatureSensors(temperatureSensorsData);
            
            setFireSupressors(fireSupressorsData);
            setSmokeSensors(smokeSensorData);
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
                    <Tab label="Luminosidade" {...a11yProps(1)} />
                    <Tab label="Temperatura" {...a11yProps(0)} />
                    <Tab label="Incêndio" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <h3 style={{ textAlign: "center"}}>Luzes</h3>
                <Table data={ lights } headers={["ID", "IP","Porta", "Local", "Cor", "Status"]} />
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{ textAlign: "center"}}>Sensores de Presença</h3>
                <Table data={ presenceSensors } headers={["ID", "IP","Porta", "Local", "Status"]} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3 style={{ textAlign: "center"}}>Ares-condicionados</h3>
                <Table data={ airConditioners } headers={["ID", "IP","Porta", "Temperatura", "Status"]} />
                <br></br>
                <br></br>
                <br></br>

                <h3 style={{ textAlign: "center"}}>Aquecedores</h3>
                <Table data={ heaters } headers={["ID", "IP","Porta", "Temperatura", "Status"]} />
                <br></br>
                <br></br>
                <br></br>

                <h3 style={{ textAlign: "center"}}>Sensores de temperatura</h3>
                <Table data={ temperatureSensors } headers={["ID", "IP","Porta", "Temperatura", "Status"]} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3 style={{ textAlign: "center"}}>Extintores de incêndio</h3>
                <Table data={ fireSupressors } headers={["ID", "IP","Porta", "Local", "Status"]} />
                <br></br>
                <br></br>
                <br></br>

                <h3 style={{ textAlign: "center"}}>Sensores de Fumaça</h3>
                <Table data={ smokeSensors } headers={["ID", "IP","Porta", "Local", "Status"]} />
            </TabPanel>
        </Box>
    )
}