import Link from 'next/link';

const Navbar = () => (
<div className="nav">
    <ul>
        <li><Link href="/"><a>golangPoint.com</a></Link></li>
        {/* <li><Link href="/about"><a>About</a></Link></li> */}
    </ul>
    <style jsx>{`
    .nav {
        background: #043353;        
    }
    ul {
        list-style: none;
    }

    ul li {
        font-size: 36px;
        text-align: center;   
    }

    ul li a {
        color: #fff;
        text-decoration: none;
    }


        `}
    </style>
</div>
 );

 export default Navbar;