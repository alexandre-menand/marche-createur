import MainHeaderSearch from '@/app/components/MainHeaderSearch'

export default function MainHeader() {
  return (
    <header className="flex flex-col items-center justify-center gap-10 rounded-2xl bg-violet-100/30 py-20">
      <h1 className="max-w-180 text-center font-bold text-4xl">
        Trouver les marchés créateurs <br /> proche de chez vous
      </h1>
      <MainHeaderSearch></MainHeaderSearch>
    </header>
  )
}
