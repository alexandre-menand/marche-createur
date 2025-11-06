import { IMarche, mockMarches } from '@workspace/domaines'
import { Button } from '@workspace/ui/components/button'
import CardMarche from '@/components/base/CardMarche'

export default function MainSectionMarche() {
  const marches: IMarche[] = mockMarches
  return (
    <section className="py-18">
      <header className="flex items-center justify-between">
        <h2 className="mb-8 font-semibold text-2xl">
          Les prochains marchés dans le Maine et Loire
        </h2>
        <Button>Voire tous les marchés </Button>
      </header>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {marches.map((marche) => (
          <CardMarche key={marche.id} {...marche} />
        ))}
      </div>
    </section>
  )
}
