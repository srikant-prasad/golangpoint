import Layout from '../components/Layout';
import Link from 'next/link';
const Index = () => (
    <Layout>


        <div className="container">
            <div className="box-contain">
                <Link href="./go_web_server" as="/go_web_server">
                    <a>
                        <h1>Web server in Go.</h1>
                        <p>Create a simple web server using Golang.</p>
                    </a>
                </Link>


            </div>
            <div className="box-contain">
            <Link href="../contains/go_web_server" as="/contains/go_web_server">
                    <a>
                        <h1>Error Handing in Go.</h1>
                        <p>Create a simple web server using Golang.</p>
                    </a>
                </Link>
            </div>
            <div className="box-contain">
            <Link href="./framework_for_golang" as="/framework_for_golang">
                    <a>
                        <h1>Framework for Go.</h1>
                        <p>Create a simple web server using Golang.</p>
                    </a>
                </Link>
            </div>
            <div className="box-contain">
            <Link href="./about_printout_function" as="/about_printout_function">
                    <a>
                        <h1>about printout function</h1>
                        <p>Create a simple web server using Golang.</p>
                    </a>
                </Link>
            </div>
            <div className="box-contain">
            <Link href="./predev" as="/predev">
                    <a>
                        <h1>about printout function</h1>
                        <p>Create a simple web server using Golang.</p>
                    </a>
                </Link>
            </div>

        </div>

        <style jsx>{`

.box-contain {
    margin:4% 15% 4% 15%;
    padding:10px;
    background: #fff;
    color: #111;
}
@media (max-width:600px) {
    .box-contain {
        margin:3% 3% 3% 3%;
        padding:10px;
        background: #fff;
        color: #111;
    }   
}
.box-contain p {
    font-size: 18px;
}

.box-contain  a:link {
    color: deeppink;
    text-decoration: none;
}
.box-contain a:visited {
    color: black;
    text-decoration: none;
    }
.box-contain a:hover {
    color: deeppink;
    text-decoration: underline;
}
.box-contain a:active {
    color: deeppink;
    text-decoration: darkcyan;
}

    // ul {
    //     list-style: none;
    // }

    // ul li {
    //     font-size: 18px;
    // }

    // ul li a {
    //     font-family: sans-serif; 
    //     text: bold;
    // }
    // ul li a:link {
    //     color: deeppink;
    //     text-decoration: none;
    // }
    // ul li a:visited {
    //     color: black;
    //     text-decoration: none;
    // }
    // ul li a:hover {
    //     color: deeppink;
    //     text-decoration: underline;
    // }
    // ul li a:active {
    //     color: deeppink;
    //     text-decoration: darkcyan;
    // }
    // #boxBorder {
    //     border-style: solid;
    //     border-color: #bbbbaa #111111 #ee3e80 #0088dd;
    //     border-radius: 10px;
    //     -moz-border-radius: 10px;
    //     -webkit-border-radius: 10px;
    // }
    // #boxBorder p {
    //     text-align: center;
    //     font-size: 24px;
    //     text-size: bold:
    //     color: #ee3e80:
    // }

        `}
        </style>
    </Layout>
);

export default Index;

