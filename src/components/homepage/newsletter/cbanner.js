export default function Cbanner(){
    return(
        <div className="nlmain">
            <div>
                <h1>Want to know more about us?</h1>
                <h3>Subscribe to our weekly newsletter</h3>
                <input type={"email"} placeholder="Enter your Email"/>
                <button>Subscribe</button>
            </div>
            <table>
                <tr>
                    <th>Pages</th>
                    <th>Components</th>
                </tr>
                <tr>
                    <td>Login</td>
                    <td>Navbar</td>
                </tr>
                <tr>
                    <td>Register</td>
                    <td>Cards</td>
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>Search</td>
                </tr>
                <tr>
                    <td>HomePage</td>
                    <td>Newsletter</td>
                </tr>
            </table>
        </div>
    )
}