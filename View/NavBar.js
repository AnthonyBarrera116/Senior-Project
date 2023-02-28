const NavBar = `<nav class="container-fluid" style = "font-size:50px; text-align: left;">
<div class="row" style = "border-bottom-style:solid; border-width: 5px; border-color: #000000; background-color: #a349a4;">
    <div class="col-12 col-xs-12 col-md-12 col-lg-12">
        <a href="About.html" style = "margin-right: 40px;"> FI320 Calculator </a>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Time Value of Money</button>
            <div class="dropdown-content" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                <a href="PresentValue.html">Present Value</a>
                <a href="FutureValue.html">Future Value</a>
                <a href="PaymentsNeeded.html">Payments needed</a>
                <a href="YearsNeeded.html">Years needed</a>
                <a href="NPV.html">Net Present Value</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Stocks</button>
            <div class="dropdown-content" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                <a href="AnnualGrowthDividends.html">Annual Growth of Dividends</a>
                <a href="AnnualGrowthStock.html">Annual Growth of a Stock</a>
                <a href="ExpectedDividends.html">Expected Dividends</a>
                <a href="PresentStockPrice.html">Present Stock Price</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Bonds</button>
            <div class="dropdown-content" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                <a href="BondPrice.html">Price of a Bond</a>
                <a href="YTM.html">Yield to Maturity</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Capital Budgeting</button>
            <div class="dropdown-content" style = "border-style: solid; border-top-style: none; border-width: 5px; border-color: #000000;">
                <a href="EAA.html">Equivalent Annual Annuity</a>
                <a href="IRR.html">Internal Rate of Return</a>
                <a href="WACC.html">Weighted Average Cost of Capital</a>
                <a href="CAPM.html">Capital Asset Pricing Model</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Car Payments</button>
        </div>
        <div class="dropdown">
            <button class="dropbtn" style= "text-decoration: underline;">Amortization</button>
        </div>
        <a href="AccountPage.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16" style="margin:0; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </a>
    </div>
</div>
</nav>`;
document.getElementById('NavBar').innerHTML = NavBar;