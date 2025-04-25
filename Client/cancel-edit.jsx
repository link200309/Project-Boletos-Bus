import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Home, ClipboardList } from "lucide-react";

const trips = [
    {
        from: "Cochabamba",
        to: "La Paz",
        date: "18 de Abril - 07:30",
        agency: "El Dorado",
        type: "CAMA",
        seats: 2,
        total: "Bs. 190"
    },
    {
        from: "Cochabamba",
        to: "La Paz",
        date: "18 de Abril - 07:30",
        agency: "El Dorado",
        type: "CAMA",
        seats: 2,
        total: "Bs. 190"
    },
    {
        from: "Santa Cruz",
        to: "Cochabamba",
        date: "20 de Abril - 11:00",
        agency: "El Dorado",
        type: "SEMI-CAMA",
        seats: 1,
        total: "Bs. 95"
    }
];

export default function CancelEditReservation() {
    return (
        <div className="min-h-screen bg-black text-white p-4">
            <h1 className="text-lg font-semibold mb-4">CANCELAR O MODIFICAR RESERVA</h1>
            <div className="bg-[#7A5BEB] rounded-t-2xl p-4">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🚌</span>
                    <h2 className="text-white text-xl font-bold">RataBus</h2>
                </div>
                <div className="space-y-4">
                    {trips.map((trip, index) => (
                        <Card key={index} className="bg-white text-black rounded-xl">
                            <CardContent className="p-4">
                                <div className="text-indigo-700 font-bold text-lg">
                                    {trip.from} → {trip.to}
                                </div>
                                <div className="text-sm text-gray-600 mb-2">{trip.date}</div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        Agencia: <span className="font-semibold">{trip.agency}</span>
                                    </div>
                                    <div>
                                        Tipo: <span className="font-semibold">{trip.type}</span>
                                    </div>
                                    <div>
                                        Asientos: <span className="font-semibold">{trip.seats}</span>
                                    </div>
                                    <div>
                                        Total: <span className="font-semibold">{trip.total}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <Button className="w-[45%]">Editar</Button>
                                    <Button variant="outline" className="w-[45%] border-indigo-600 text-indigo-600">
                                        Cancelar
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Tabs defaultValue="reservas" className="fixed bottom-0 left-0 w-full bg-white p-2 flex justify-around border-t">
                <TabsList className="flex w-full justify-around">
                    <TabsTrigger value="reservar" className="flex flex-col items-center">
                        <Home className="w-5 h-5" />
                        <span className="text-xs">Reservar</span>
                    </TabsTrigger>
                    <TabsTrigger value="reservas" className="flex flex-col items-center text-blue-600">
                        <ClipboardList className="w-5 h-5" />
                        <span className="text-xs">Mis reservas</span>
                    </TabsTrigger>
                    <TabsTrigger value="ajustes" className="flex flex-col items-center">
                        <Settings className="w-5 h-5" />
                        <span className="text-xs">Ajustes</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}
