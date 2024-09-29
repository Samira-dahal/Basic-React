
import { Link } from 'react-router-dom'
import './Home.css'


function Home(){
    return(
        <>
        <header>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="#">MoneySaver</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><Link to href="/about">About</Link></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    
    <section className="saving-section">
        <div className="container">
            <h1>Simple Tips to Save Money</h1>
            <p>Saving money is essential to secure your future financial stability. Here are some simple yet effective tips to help you save more and spend less.</p>

            <div className="tips-grid">
                <div className="tip-card">
                    <h3>Create a Budget</h3>
                    <p>Make a list of your monthly income and expenses. This will help you identify where your money is going and how you can save more.</p>
                </div>
                <div className="tip-card">
                    <h3>Track Your Expenses</h3>
                    <p>Use apps or spreadsheets to track every penny you spend. This will make you more mindful of unnecessary spending.</p>
                </div>
                <div className="tip-card">
                    <h3>Automate Savings</h3>
                    <p>Set up automatic transfers to your savings account every time you receive your paycheck, ensuring you save consistently.</p>
                </div>
                <div className="tip-card">
                    <h3>Cut Unnecessary Subscriptions</h3>
                    <p>Review your subscriptions (streaming, magazines, gym, etc.) and cancel any that are not essential or unused.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2024 MoneySaver | All Rights Reserved</p>
        </div>
    </footer>
        </>
    )
}

export default Home