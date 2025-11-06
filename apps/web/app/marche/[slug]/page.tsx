export default async function PageMarche({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>coucou {slug}</div>
}
