import { Button } from '@workspace/ui/components/button'
import '@workspace/ui/lib/fonts'
import * as domain from 'node:domain'
import Wrapper from '@workspace/ui/components/wrapper'
import MainHeader from '@/app/components/MainHeader'

export default function Page() {
  return (
    <Wrapper asChild>
      <main>
        <MainHeader></MainHeader>
      </main>
    </Wrapper>
  )
}
