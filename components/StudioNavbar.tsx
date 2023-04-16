import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-main flex items-center">
                <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-main"/>
                Zurück zur Webseite
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar