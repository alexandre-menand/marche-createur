import Wrapper from '@workspace/ui/components/wrapper'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <div className="flex w-full items-center justify-center">
        {/** biome-ignore lint/nursery/useSortedClasses: <explanation> */}
        <div className="w-full max-w-xl p-8 bg-white rounded-2xl border border-violet-100/20">
          {children}
        </div>
      </div>
    </Wrapper>
  )
}
