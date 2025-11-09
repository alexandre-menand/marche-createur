import Wrapper from '@workspace/ui/components/wrapper'
import {Button} from "@workspace/ui/components/button";

export default async function MarchePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <Wrapper asChild>
      <main className="mt-20">
        <section className="grid grid-cols-2 gap-16">
          <div className="h-full w-full bg-violet-100"></div>
          <div className="grid gap-8">
            <div className="grid gap-1">
              <h1 className="font-semibold text-3xl mb-4">Marché des fleurs de printemps</h1>
              <p className="text-lg">12 février 2025 à Angers</p>
              <p className="text-lg">7h00 à 17h00</p>
              <p className="text-lg">Gratuit</p>
            </div>
            <div className="flex gap-4">
              <Button>Ajouter à l’agenda</Button>
              <Button variant="secondary">Partager</Button>
            </div>
            <div>
              <p className="text-shadow-violet-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

          </div>
        </section>
      </main>
    </Wrapper>
  )
}
