import { Input } from '@workspace/ui/components/input'
import {Label} from "@workspace/ui/components/label";
import {Button} from "@workspace/ui/components/button";

export default function LoginPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-6">Connexion</h1>
      <form action="" className="grid gap-4">
          <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jean@mail.com" />
          </div>
          <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="********" />
          </div>
          <div className="grid gap-4 mt-6">
              <Button>Connexion</Button>
              <Button variant="link">Mots de passe oublié</Button>
          </div>
      </form>
    </section>
  )
}
