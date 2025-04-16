"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { loginSchema } from "../schemas/login"

type SignInform = z.infer<typeof loginSchema>

export function SignInCard() {
  const form = useForm<SignInform>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: SignInform) => {
    console.log(data)
  }

  return (
    <Card className="w-full h-full md:w-[487px] rounded-none">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="text-2xl">Faça o seu login</CardTitle>
      </CardHeader>

      <CardContent className="px-7">
        <Form {...form}>
          <form
            action=""
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
          Entrar com o Google
        </Button>
      </CardContent>

      <CardContent className="px-7 flex items-center justify-center">
        <p className="text-center">
          Ainda nao possui uma conta?
          <Link className="text-yellow-500" href="/register">
            {" "}
            Crie uma conta
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
