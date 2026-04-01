import mobileIllustration from './assets/images/illustration-sign-up-mobile.svg';

export default function Newsletter() {
    let count = 0;

    function handleSubmit() {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailVal = document.querySelector(".emailInput");
        const inputHeading = document.querySelector(".input-heading");
        const subscribtBtn = document.querySelector(".subscribe-button");
        const emailString = String(emailVal.value);

        console.log("Input Value: " + emailString);

        const validateEmail = (emailString) => {
            return emailString.match(emailRegex);
        };

        const para = document.createElement("p");
        const element = document.createTextNode("Valid email required");

        if (validateEmail(emailString)) {
            console.log("Correct Format!");

            const imgContainer = document.querySelector(".img-container");
            const mainContainer = document.querySelector("main");
            const dialogMsg = document.querySelector(".pop-up");

            imgContainer.setAttribute("hidden", true);
            mainContainer.setAttribute("hidden", true);
            dialogMsg.removeAttribute("hidden");


            if (count > 0) {
                emailVal.classList.remove("bg-red-100", "text-red-600");
                
                // Unable to remove 'para' and 'element'
            }
        } else {
            if (count === 0) {
                emailVal.classList.add("bg-red-100", "text-red-600");
                para.appendChild(element);
                inputHeading.appendChild(para);
                para.classList.add("text-red-600", "font-medium");

                console.log("Incorrect Format!");
                console.log("Count: " + count);

                count++;
            }
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 w-xs">
            <div className="img-container w-screen">
                    <img src={mobileIllustration} alt="" aria-hidden="true" className="w-full"/>
            </div>

            <main className="flex flex-col gap-5">
                <h1 className="text-left text-4xl font-bold">Stay updated!</h1>

                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">Product discovery and building what matters</span></li>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">Measuring to ensure updates are a success</span></li>
                    <li className="list-inside list-image-[url(assets/images/icon-list.svg)]"><span className="align-top">And much more!</span></li>
                </ul>

                <form action="" className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between input-heading">
                        <label htmlFor="email" className="font-medium">Email address</label>
                    </div>
                    <input id="email" className="emailInput w-full border-1 rounded-md pl-5 py-4" name="email" placeholder="email@company.com" aria-required="true" />
                    
                    <button type="button"
                            className="subscribe-button w-full bg-slate-800 rounded-md py-4 text-white font-medium hover:cursor-pointer hover:bg-slate-700"
                            aria-haspopup="dialog"
                            onClick={handleSubmit}
                    >
                        Subscribe to monthly newsletter
                    </button>
                </form>
            </main>

            <div className="pop-up min-h-screen flex flex-col justify-center gap-5" aria-hidden="true" hidden>
                <h1>Thanks for subscribing!</h1>

                <p>
                    A confirmation email has been sent to ash@loremcompany.com.
                    Please open it and click the button inside to confirm your subscription.
                </p>

                <button className="flex-start w-full bg-slate-800 rounded-md py-4 text-white font-medium hover:cursor-pointer hover:bg-slate-700">Dismiss message</button>
            </div>

            <footer className="fixed bottom-0 w-xs text-center">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#"></a>.
            </footer>
        </div>
    );
}