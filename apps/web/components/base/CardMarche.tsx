import { IMarche } from '@workspace/domaines'
import Link from 'next/link'

interface PropsCardMarche extends IMarche {}
export default function CardMarche(props: PropsCardMarche) {
  return (
    <Link href={`/marche/${props.id}`}>
      <article>
        <div className="aspect-3/2 w-full rounded-2xl bg-violet-100"></div>
        <div className="mt-2 text-sm">
          <h3 className="font-medium text-lg">{props.title}</h3>
          <p>{props.date.toDateString()}</p>
          <p>{props.adresse.city}</p>
        </div>
      </article>
    </Link>
  )
}
