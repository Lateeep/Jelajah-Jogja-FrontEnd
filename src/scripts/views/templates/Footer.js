class Footer extends HTMLElement {
  constructor () {
      super();
  }

  connectedCallback () {
      this.render();
  }

  render () {
      this.innerHTML = `
        <div class="container-fluid mt-5" style="background-color:#3F4E4F">
          <div class="row d-flex align-items-center justify-content-between py-4 flex-row">

            <!-- Logo -->
            <div class="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <img src="../public/images/Logo-Jelajah-Jogja.png" style="width:150px" />
            </div>

            <!-- Text Middle -->
            <div class="col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center">
              <div class="mt-4 d-flex align-items-center justify-content-center gap-4">
                <!-- Tambahkan konten tambahan di sini jika diperlukan -->
              </div>
              <div>
                <p class="text-center" style="font-size:15px; color:#DCD7C9">
                  &copy 2023 | Projek Capstone
                </p>
              </div>
            </div>

            <!-- Tagline -->
            <div class="col-md-3 col-6 d-flex align-items-center justify-content-center">
              <p
                style="font-weight:600; font-size:20px; color:#DCD7C9"
              >
                Jelajahi Jogja,<br />Pesona Setiap Sudut
              </p>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define('footer-element', Footer);
