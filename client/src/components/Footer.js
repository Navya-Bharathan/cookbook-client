export default function Footer(){
    return(<div>
        <div className="intro">
            <p>Cookbook is a recipe and cookbook site where for the first time in Germany you can create your own personalised digital cookbooks using recipes from top food brands and chefs, combined with your own ideas.
            Learn more about what makes us different from other recipe sites and cookbook products here.
            </p>
            <div  className="signUp">
                <h4>Sign up for the latest recipes and news</h4>
                <input className="signUp-text" type="text" placeholder='email address'/>
                <button className="signUp-btn">Sign Up</button>
            </div>

        </div>
        <ul className="social">
            <li>About Us</li>
            <li>Contact Us </li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
        </ul>
    </div>)
}