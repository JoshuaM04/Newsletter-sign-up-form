export default function Newsletter() {
    return (
        <fragment className="flex flex-col justify-center items-center min-h-screen p-5 gap-5 w-xs">
            <header className="flex flex-col w-full">
                <div className="img-container">
                    <img src="assets/images/illustration-sign-up-mobile.svg" alt="" aria-hidden="true"/>
                </div>
                <h1 className="text-left text-4xl font-bold">Stay updated!</h1>
            </header>

            <main className="flex flex-col gap-5">
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <div>
                    <label htmlFor="email" className="font-medium">Email address</label>
                    <input id="email" className="w-full border-1 rounded-md pl-5 py-4" type="text" placeholder="email@company.com" aria-required="true" />
                    <br />
                </div>

                <button type="submit" 
                        className="w-full bg-slate-800 rounded-md py-4 text-white font-medium hover:cursor-pointer hover:bg-slate-700" 
                        aria-haspopup="dialog"
                >
                    Subscribe to monthly newsletter
                </button>

                <div className="pop-up" aria-hidden="true" hidden>
                    <h1>Thanks for subscribing!</h1>

                    <p>
                        A confirmation email has been sent to ash@loremcompany.com.
                        Please open it and click the button inside to confirm your subscription.
                    </p>

                    <button>Dismiss message</button>
                </div>
            </main>

            <footer className="absolute bottom-0">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </footer>
        </fragment>
    );
}