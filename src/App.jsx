export default function Newsletter() {
    return (
        <fragment className="bg-red-100">
            <header>
                <h1>Stay updated!</h1>
            </header>

            <main>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>

            <label htmlFor="">Email address</label>
            <br />
            <input type="text" placeholder="email@company.com"></input>
            <br />

            <button>Subscribe to monthly newsletter</button>

            <div className="pop-up" aria-hidden="true" hidden>
                Thanks for subscribing!

                A confirmation email has been sent to ash@loremcompany.com. 
                Please open it and click the button inside to confirm your subscription.

                Dismiss message
            </div>

            </main>
            <footer>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </footer>
        </fragment>
    );
}