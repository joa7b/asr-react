import { useAuth } from "../context/AuthContext"

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import { useEffect } from "react";

export const Login = () => {
  const { signin, isAuthenticated } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const email = form.querySelector<HTMLInputElement>("#email")!.value;
    const password = form.querySelector<HTMLInputElement>("#password")!.value;
    signin({ email, password });
  };

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/";
    }
  }, [isAuthenticated]);
  return (
    <>
      <main className="flex justify-center items-center h-dvh">
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="password">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Entre com uma conta existente</CardTitle>
                  <CardDescription>
                    Entre com sua conta para continuar ou crie uma nova conta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Entrar</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </main>
    </>
  )
};