import '@workspace/ui/lib/fonts'
import Wrapper from '@workspace/ui/components/wrapper'
import MainHeader from '@/app/components/MainHeader'
import MainSectionMarche from '@/app/components/MainSectionMarche'

export default function Page() {
  return (
    <Wrapper asChild>
      <main>
        <MainHeader />
        <MainSectionMarche />
      </main>
    </Wrapper>
  )
}
