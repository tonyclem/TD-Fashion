const createHomeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = String.raw`
        <header class="header>
            <nav class="navbar">
                <div class="nav-center">
                    <div>
                        <button class="toggle-nav">
                            <i class="fas fa-bars"></i>
                        </button>
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
                    <div class="toggle-div">
                        <button>
                            <i class="fas fa-shopping-cart"></i> 
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    
    `;
  return divElement;
};

export default createHomeView;
