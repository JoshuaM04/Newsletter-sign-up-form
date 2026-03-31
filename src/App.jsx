import mobileIllustration from './assets/images/illustration-sign-up-mobile.svg';

export default function Newsletter() {
    function handleSubmit() {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailVal = document.querySelector(".emailInput");
        const emailString = String(emailVal.value);

        console.log("Input Value: " + emailString);

        const validateEmail = (emailString) => {
            return emailString.match(emailRegex);
        };

   
        if (validateEmail(emailString)) {
            emailVal.classList.add("bg-sky-500");
            console.log("Correct Format!");
        } else {
            emailVal.style.backgroundColor = "red"; 
            console.log("Incorrect Format!");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-5 gap-5 w-xs">
            <div className="img-container w-screen sm:w-full">
                    <img src={mobileIllustration} alt="" aria-hidden="true" className="w-full"/>
            </div>
            <header className="w-full">
                <h1 className="text-left text-4xl font-bold">Stay updated!</h1>
            </header>

            <main className="flex flex-col gap-5">
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">Product discovery and building what matters</span></li>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">Measuring to ensure updates are a success</span></li>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">And much more!</span></li>
                </ul>

                <form action="" className="flex flex-col gap-4">
                    <label htmlFor="email" className="font-medium">Email address</label>
                    <input id="email" className="emailInput w-full border-1 rounded-md pl-5 py-4" name="email" placeholder="email@company.com" aria-required="true" />
                    
                    <button type="button"
                            className="w-full bg-slate-800 rounded-md py-4 text-white font-medium hover:cursor-pointer hover:bg-slate-700"
                            aria-haspopup="dialog"
                            onClick={handleSubmit}
                    >
                        Subscribe to monthly newsletter
                    </button>
                </form>

                <div className="pop-up" aria-hidden="true" hidden>
                    <h1>Thanks for subscribing!</h1>

                    <p>
                        A confirmation email has been sent to ash@loremcompany.com.
                        Please open it and click the button inside to confirm your subscription.
                    </p>

                    <button>Dismiss message</button>
                </div>
            </main>

            <footer className="relative bottom-0 w-xs text-center">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#"></a>.
            </footer>
        </div>
    );
}