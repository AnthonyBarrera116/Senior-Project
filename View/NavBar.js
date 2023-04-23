async function getUsers(){
    let response = await fetch('http://localhost:4000/loggedUser');
        //If this page is running on the same server, then just fetch('/user') would also work

        let navbar = `<nav class="container-fluid" style = "font-size:50px; text-align: left;">
        <div class="row" style = "border-bottom-style:solid; border-width: 5px; border-color: #000000; background-color: #a349a4;">
            <div class="col-12 col-xs-12 col-md-12 col-lg-12">
                <a href="About.html" style = "margin-right: 40px;"> FI320 Calculator </a>
                <div class="dropdownNav">
                    <button class="dropbtnNav" style= "text-decoration: underline;">Time Value of Money</button>
                    <div class="dropdown-contentNav" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                        <a href="PV.html">Present Value (PV)</a>
                        <a href="FV.html">Future Value (FV)</a>
                        <a href="PMT.html">Payments (PMT)</a>
                        <a href="NPER.html">Payment Periods (NPER)</a>
                        <a href="NPV.html">Net Present Value (NPV)</a>
                    </div>
                </div>
                <div class="dropdownNav">
                    <button class="dropbtnNav" style= "text-decoration: underline;">Stocks Calculators</button>
                    <div class="dropdown-contentNav" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                        <a href="AnnualGrowthDividends.html">Annual Growth of Dividends</a>
                        <a href="ExpectedDividends.html">Expected Dividends</a>
                        <a href="PresentStockPrice.html">Stock Price</a>
                    </div>
                </div>
                <div class="dropdownNav">
                    <button class="dropbtnNav" style= "text-decoration: underline;">Bonds</button>
                    <div class="dropdown-contentNav" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                        <a href="BondPrice.html">Price of a Bond</a>
                        <a href="YTM.html">Yield to Maturity</a>
                    </div>
                </div>
                <div class="dropdownNav">
                    <button class="dropbtnNav" style= "text-decoration: underline;">Capital Budgeting</button>
                    <div class="dropdown-contentNav" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                        <a href="EAA.html">Equivalent Annual Annuity</a>
                        <a href="IRR.html">Internal Rate of Return</a>
                        <a href="WACC.html">Weighted Average Cost of Capital</a>
                        <a href="CAPM.html">Capital Asset Pricing Model</a>
                    </div>
                </div>
                <div class="dropdownNav">
                    <a href="LoanPayments.html" class="dropbtnNav"><u>Loan Payments<u></button>
                </div>
                <a href="profile.html" style="text-align: right;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-top:40px; margin-left:60px; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </a>
            </div>
        </div>
        </nav>`;

    try{
        users = await response.json();

        if (response != null) {
            document.getElementById('NavBar').innerHTML = navbar
        } 
    } 

    catch{
            document.getElementById('NavBar').innerHTML = navbar;
        
    }
}
getUsers();