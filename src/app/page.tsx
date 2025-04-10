import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Percent } from "lucide-react";



export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total Vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Total de vendas no mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 45.000,00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Novos clientes em 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">234</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de pedidos hoje
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">65</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de Pedidos
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
              </div>
              <CardDescription>
                Total de pedidos em 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">1000</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview/>
          <Sales/>
        </section>
    </main>
  );
}
