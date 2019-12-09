import Head from 'next/head';
import Navbar from './Navbar';
import  '../style/style.css';

const Layout = (props) => (
    <div>
    <Head>
        <title>golangPOint.com</title>
        <script>
        https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=ruby&amp;skin=sunburst
        </script>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
        {/* <link href="Layout.css"></link> */}
    </Head>
    <Navbar />
    {props.children}

        {/* <style jsx global>{`
    body {
        background: #98b7d7;
        color: #f3f3f3;
    }

        `}
    </style>     */}
    </div>

);

export default Layout;