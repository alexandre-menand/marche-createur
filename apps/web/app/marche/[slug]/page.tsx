import Wrapper from '@workspace/ui/components/wrapper'

export default async function MarchePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <Wrapper asChild>
      <main>
        <section className="grid grid-cols-2 gap-8">
          <div className="h-full w-full bg-violet-100"></div>
          <div>
            <h1>Marche</h1>
            <p>lorem</p>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}
