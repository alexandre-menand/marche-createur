import { IMarche } from '@workspace/domaines'
import Image from 'next/image'
import Link from 'next/link'

interface PropsCardMarche extends IMarche {}
export default function CardMarche(props: PropsCardMarche) {
  return (
    <Link href={`/marche/${props.id}`} className="group">
      <article>
        <div className="aspect-3/2 w-full overflow-hidden rounded-2xl bg-violet-100">
          <Image
            src={props.image}
            alt=""
            className="object-cover transition-all duration-150 ease-in-out group-hover:scale-125"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-2 text-sm">
          <h3 className="font-medium text-lg">{props.title}</h3>
          <p>{props.date.toDateString()}</p>
          <p>{props.adresse.city}</p>
        </div>
      </article>
    </Link>
  )
}
