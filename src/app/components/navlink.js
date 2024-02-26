import Link from 'next/link';

function NavLink(props){
    return (
        <Link href={props.href} className="block py-2 pl-3 pr-4">{props.title}</Link>
    )
}

export default NavLink;