'use client'

import {Button} from "@workspace/ui/components/button";

export default function MainHeaderSearch(){
    return(
        <form className="flex flex-col relative max-w-80 w-full ">
            <input type="text" placeholder="Ma ville" className="bg-white rounded-full p-4" />

            <div className="absolute bottom-0 top-0 right-3 flex flex-col items-center justify-center">
                <Button>cherche</Button>
            </div>
        </form>
    )
}