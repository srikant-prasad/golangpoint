import Layout from '../components/Layout';
// import Link from 'next/link';
const go_web_server = () => (
<Layout>
<div>
<div className="container">
    <div className="row">
        <div className="col">
            <h1></h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 order-md-2 mb-4" id="boxBorder">
    <table>
        <thead>
            <tr>
                <td>
                <span>Name of the Post :-</span>
                </td>
                <td>
                IBPS Clerk IX ONLINE From 2019
                </td>
            </tr>
            <tr>
                <td><span>Post Date:-</span></td>
                <td>12 September 2019 | 12:52 PM</td>
            </tr>
            <tr>
                <td><span>Last Date:-</span></td>
                <td>10 November 2019 </td>
            </tr>
        </thead>
    </table>
        </div>
        <div className="col-md-8 order-md-1" id="boxBorder">
        <table>
        <thead>
            <tr>
                <td>
                <span>Name of the Post :-</span>
                </td>
                <td>
                IBPS Clerk IX ONLINE From 2019
                </td>
            </tr>
            <tr>
                <td><span>Post Date:-</span></td>
                <td>12 September 2019 | 12:52 PM</td>
            </tr>
            <tr>
                <td><span>Last Date:-</span></td>
                <td>10 November 2019 </td>
            </tr>
        </thead>
    </table>
        </div>
        
    </div>
</div>


</div>

<style jsx>{`
    ul {
        list-style: none;
    }

    ul li {
        font-size: 18px;
    }

    ul li a {
        font-family: sans-serif; 
        text: bold;
    }
    ul li a:link {
        color: deeppink;
        text-decoration: none;
    }
    ul li a:visited {
        color: black;
        text-decoration: none;
    }
    ul li a:hover {
        color: deeppink;
        text-decoration: underline;
    }
    ul li a:active {
        color: deeppink;
        text-decoration: darkcyan;
    }
    #boxBorder {
        border-style: solid;
        border-color: #bbbbaa #111111 #ee3e80 #0088dd;
        border-radius: 10px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
    }
    #boxBorder p {
        text-align: center;
        font-size: 24px;
        text-size: bold:
        color: #ee3e80:
    }

        `}
    </style>

</Layout>



);

export default go_web_server;

