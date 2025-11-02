import LOGO_IMG from "@/assets/img/logo.svg"
import Image from "next/image"
import Wrapper from "@workspace/ui/components/wrapper";

export default function Nav() {
    return(
        <Wrapper asChild>
            <nav className="flex items-center gap-10 p-4">
                <div><Image src={LOGO_IMG} alt="Marché créateur" width={120} /></div>
                <ul className="flex gap-6">
                    <li>prochains marchés</li>
                    <li>prochains marchés</li>
                    <li>prochains marchés</li>
                </ul>
            </nav>
        </Wrapper>
    )
}