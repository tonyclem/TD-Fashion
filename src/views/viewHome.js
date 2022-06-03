const createHomeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = String.raw`
        <header class="header>
            <nav class="navbar">
                
                <div class="nav-container">


                    <div>
                        <ul class="nav-links">
                            <li>
                                <a class="nav-link">Home</a>
                            </li>
                            <li>
                                <a class="nav-link">Product</a>
                            </li>
                            <li>
                                <a class="nav-link">About</a>
                            </li>
                        </ul>
                    </div>

                    <div class="toggle-div-container">
                        <button class="toggle-btn">
                            <i class="fas fa-shopping-cart"></i> 
                        </button>
                    </div>
                </div>
            </nav>
        </header>

        <section class="hero-section">
            <div class="hero-container">
                <h1 class="hero-text">Fashion</h1>
                <h3>Look lorem</h3>
                <a class="hero-btn">Show Now!</a>
            </div>
        </section>
    
    `;
  return divElement;
};

export default createHomeView;
