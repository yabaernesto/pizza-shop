import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInFom = z.infer<typeof signInForm>;

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInFom>();

  async function handleSignIn(data: SignInFom) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Enviamos um link de autenticacao para o seu e-mail!', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error('Credenciais invalidas!');
    }
  }

  return (
    <>
      <Helmet title="login" /> 
      <div className="p-8">
        <div className="w-[350px] flex flex-col text-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
