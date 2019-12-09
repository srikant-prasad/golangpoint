import Layout from '../components/Layout';
// import Link from 'next/link';
const About = () => (
<Layout>

<div className="main">
        <h1>About Print out Function Print, Printf, Println.</h1>
        <div className="contains">
            IN this topic we learn about Print(), Printf(), and Println() function.
            This Print function is generally used to Print. But This function is different 
            from each other. We have to understand how this function is different
            from each other.
            <br></br>            
            <br></br>

            For understanding it. Let's first understand by example.
        {/* <div className="codeborder"> */}
<pre className="prettyprint">
package main

import (
    "fmt"
)

func main() {
 }
    var1 := "ABC"
    var2 := "123"
    var3 := 1234567
    var4 := "XYZ"
fmt.Print(var1, var2, var3, var4)
fmt.Println()
fmt.Printf("%s %s %d %s", var1, var2, var3, var4)
fmt.Println()
fmt.Println(var1, var2, var3, var4)
fmt.Print(var1," ", var2, " ", var3, " ", var4, "\n")


</pre>
        {/* </div> */}
<pre className="output">
ABC1231234567XYZ
ABC 123 1234567 XYZ
ABC 123 1234567 XYZ
ABC 123 1234567 XYZ
</pre>
        as you can see in the output section, 
        In the first line, there is no space between the two variables.
        For this point of view we can say that <code>Print()</code> function space not
        automatic take  but In case of <code>Println()</code>
        function space  automaticly take.
        <div className="why">
            Printf() function
        </div>
        But in case of <code>Printf()</code>function you have to defind
        format specifier Such like C programming.
        <br></br>
        <br></br>
        
        This <code>Printf()</code> Function when you should use.   
        Such imagine that you have a number of different type of 
        variables. then, in that case you have to use and you can also
        see in the example. There is also a different type of variables.
        <div className="why">
            Print() & Println() function
        </div>
        <ul>
            <li>
        In this <code>Print()</code> function, You have to give space between two 
        variables but In case of <code>Println()</code> function
        You don't need to give space.
            </li>
            <li>
                In this <code>Print()</code> function, You have to give new line stetment <code>("\n")</code> .  But              
                In case of <code>Println()</code> function, you don't need.
            </li>
        </ul>
    </div> 
    </div>  



</Layout>



);

export default About;

