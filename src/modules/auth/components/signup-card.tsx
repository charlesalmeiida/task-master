"use client"

import { z } from "zod"
import { registerSchema } from "../schemas/register"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type SignUpForm = z.infer<typeof registerSchema>

export function SignUpCard() {
  const form = useForm<SignUpForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: SignUpForm) => {
    console.log(data)
  }

  return (
    <Card className="w-full h-full md:w-[487px] rounded-none">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="text-2xl">Crie sua conta</CardTitle>

        <CardDescription className="text-center">
          Ao criar sua conta, você concoda com nossa {""}
          <Link className="text-yellow-500" href={"/politica-de-privacidade"}>
            Política de privacidade <br />
          </Link>{" "}
          e{" "}
          <Link className="text-yellow-500" href={"/termos-de-servico"}>
            Termos de serviço
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent className="px-7">
        <Form {...form}>
          <form
            action=""
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Digite seu nome"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Digite seu email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Digite sua senha"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" className="w-full">
              Criar conta
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <Separator />
      </div>

      <CardContent className="px-7 flex flex-col gap-y-4">
        <Button className="w-full" variant="secondary" size="lg">
          Criar conta com o Google
        </Button>
      </CardContent>

      <CardContent className="px-7 flex items-center justify-center">
        <p className="text-center">
          Ja possui uma conta?{" "}
          <Link className="text-yellow-500" href="/login">
            Faça login
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
