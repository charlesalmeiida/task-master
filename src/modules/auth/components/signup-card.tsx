import z from "zod";
import { RegisterSchema } from "../schemas/register";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SignupForm = z.infer<typeof RegisterSchema>;

export function SignupCard() {
  const form = useForm<SignupForm>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }, 

    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  }

  return (
    <Card className="w-full h-full md:w-[487px] rounded-none">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-2xl">Crie sua conta</CardTitle>

        <CardDescription className="text-center">
          Ao criar sua conta, você concorda com nossa {' '} 
          <Link className="text-yellow-500" href="/politica-de-privacidade">
          Política de Privacidade
          </Link>{' '}
          <Link className="text-yellow-500" href="/termos-de-servico">
            Termos de serviço
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent className="px-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Digite seu nome" 
                    type="text" 
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />      

            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Digite seu email" 
                    type="email" 
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} /> 



            <FormField name="password" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Digite sua senha" 
                    type="password" 
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} /> 

            <Button size='lg' className="w-full">Criar Conta</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}