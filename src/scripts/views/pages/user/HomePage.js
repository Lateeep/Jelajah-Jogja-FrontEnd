class HomePage extends HTMLElement {
    constructor () {
        super();
    }
  
    connectedCallback () {
        this.render();
    }
  
    render () {
        this.innerHTML = `

        <div class="hero">
                <div class="hero_inner">
                <h1 tabindex="0" class="hero_title">
                    Jelajah<span class="span_title">Jogja</span>
                </h1>
                <p tabindex="0" class="hero_tagline">
                    Jelajahi Jogja,<span class="span_tagline">
                    Pesona Setiap Sudut</span>
                </p>
                </div>
            </div>
            <div class="container-xl py-5 overflow-hidden">
                <h2 class="w-100 mt-5 title"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Destinasi Populer
                </h2>
                <hr class="hr" 
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                />
                <p class="subtitle"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
                <br />
                dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
                </p>
                <div class="row align-items-center justify-content-center destination-container">
                <div class="col-lg-6 mb-3 mb-md-0">
                    <div class="card_items" id="container-destinasi-populer-left">
                    <div class="card card-wrapper card-destination-left">
                        <div class="skeleton img-left"></div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row align-items-center justify-content-center" id="container-destinasi-populer-right">
                    <div class="col-sm-6 py-2">
                        <div class="card_items">
                        <div class="card card-destination-right">
                            <div class="skeleton img-right"></div>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 py-2">
                        <div class="card_items">
                        <div class="card card-destination-right">
                            <div class="skeleton img-right"></div>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 py-2">
                        <div class="card_items">
                        <div class="card card-destination-right">
                            <div class="skeleton img-right"></div>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 py-2">
                        <div class="card_items">
                        <div class="card card-destination-right">
                            <div class="skeleton img-right"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            <div class="container-fluid category">
                <h2 class="w-100 title"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Kategori Wisata
                </h2>
                <hr class="hr"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                />
                <div
                class="d-flex align-items-center justify-content-center gap-5 w-100 mt-5 flex-wrap"
                >
                <div class="kategori_items"
                    data-aos="fade-up-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <div class="card kategori_card">
                    <a href="#/kategorialam" class="nav-link d-flex justify-content-center flex-column align-items-center">
                    <img src="../public/icons/Alam.png"  />
                    <h5>Alam</h5>
                    </a> 
                    </div>
                </div>
                <div class="kategori_items"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <div class="card kategori_card">
                    <a href="#/kategoribudaya" class="nav-link d-flex justify-content-center flex-column align-items-center">
                    <img src="../public/icons/Pagoda.png"/>
                    <h5>Budaya</h5>
                    </a>
                    </div>
                </div>
                <div class="kategori_items"
                    data-aos="fade-up-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <div class="card kategori_card">
                    <a href="#/hotellandingpage" class="nav-link d-flex justify-content-center flex-column align-items-center">
                    <img src="../public/icons/Penginapan.png" />
                    <h5>Penginapan</h5>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
                <h2 class="w-100 mt-5 title"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Top Penginapan
                </h2>
                <hr class="hr"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                />
                <p class="subtitle"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Tempat Penginapan Populer di daerah Yogyakarta yang menjadi pilihan
                utama <br />dan terbaik di kalangan wisatawan dari luar ataupun dalam
                negeri.
                </p>
                <div class="swiper mySwiper"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                <div class="topPenginapanContainer swiper-wrapper">
                <div
                class="swiper-slide item-wisata-lainnya"
                style="background-color:#f1ede2"
                >
                <div class="card_item">
                    <div class="card card-penginapan">
                        <div class="skeleton img-hotel-homepage"></div>
                    </div>
                </div>
                </div>
                </div>
                <div class="swiper-pagination hidden"></div>
                </div>
            </div>
            <div class="container-fluid service p-3 mt-5">
            <div class="row justify-content-center align-items-center text-center">
                <div class="col-md-8">
                    <h2 class="w-100 mt-5 title"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">Layanan yang kami berikan</h2>
                    <hr
                        class="hr"
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    />
                </div>
            </div>
                <div
                class="row align-items-center justify-content-center  mt-5 gy-5 gy-sm-0"
                >
                <div
                    class="col-md-3 d-flex justify-content-center align-items-center"
                >
                    <div class="text-center"
                    data-aos="zoom-out-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                    <di class="img-cover">
                    <img src="../public/icons/Location.png" class="icon-service" />
                    </di>
                    <h5 style="color: #3F4E4F" class="service-title">Strategis</h5>
                    <p style="color: #2C3639 fw-medium" class="service-subtitle">
                        Lokasi hotel yang strategis memudahkan untuk berpergian ke
                        tempat wisata
                    </p>
                    </div>
                </div>
                <div
                    class=" col-md-3 d-flex justify-content-center align-items-center"
                >
                    <div class="text-center"
                    data-aos="zoom-in-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                    <div class="img-cover"> 
                    <img src="../public/icons/Dollar.png" class="icon-service" />
                    </div>
                    <h5 style="color: #3F4E4F" class="service-title">Terjangkau</h5>
                    <p style="color: #2C3639" class="service-subtitle fw-medium">
                        Lokasi hotel yang strategis memudahkan untuk berpergian ke
                        tempat wisata
                    </p>
                    </div>
                </div>
                <div
                    class="col-md-3 d-flex justify-content-center align-items-center"
                >
                    <div class="text-center"
                    data-aos="zoom-out-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                    <div class="img-cover"> 
                    <img src="../public/icons/Access.png" class="icon-service" />
                    </div>
        
                    <h5 style="color: #3F4E4F" class="service-title">
                        Mudah diakses
                    </h5>
                    <p style="color: #2C3639" class="service-subtitle fw-medium">
                        Lokasi hotel yang strategis memudahkan untuk berpergian ke
                        tempat wisata
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
                <h2 class="w-100 mt-5 title"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Wisata Lainnya
                </h2>
                <hr class="hr"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                />
                <p class="subtitle"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                Tempat Wisata Populer di daerah Yogyakarta yang menjadi pilihan utama
                <br />
                dan terbaik di kalangan wisatawan dari luar ataupun dalam negeri.
                </p>
                <div class="container-fluid justify-content-center"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                <div class="swiper mySwipers">
                    <div class="swiper-wrapper" id="wisata-lainnya">
                    <div class="swiper-slide item-wisata-lainnya">
                        <div class="card_items">
                        <div class="card card-wisata-lainnya">
                            <div class="skeleton img-wisata-lainnya"></div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide item-wisata-lainnya">
                        <div class="card_items">
                        <div class="card card-wisata-lainnya">
                            <div class="skeleton img-wisata-lainnya"></div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide item-wisata-lainnya">
                        <div class="card_items">
                        <div class="card card-wisata-lainnya">
                            <div class="skeleton img-wisata-lainnya"></div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide item-wisata-lainnya">
                        <div class="card_items">
                        <div class="card card-wisata-lainnya">
                            <div class="skeleton img-wisata-lainnya"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </div>
            </div>
        `;
  }
}

customElements.define('home-element', HomePage);