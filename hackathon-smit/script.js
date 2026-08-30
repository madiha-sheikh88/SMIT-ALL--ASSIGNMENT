const providers = [

    {
        id: 1,
        name: "Ahmed Khan",
        service: "Electrician",
        rating: 4.9,
        reviews: 128,
        experience: "8 years",
        location: "Gulshan, Karachi",
        price: 2500,
        image: "./asset/electrician.png",
        about:
            "Professional electrician specializing in residential wiring, electrical repairs and installations.",
        availability: "Available today"
    },

    {
        id: 2,
        name: "Ali Raza",
        service: "Plumber",
        rating: 4.8,
        reviews: 96,
        experience: "7 years",
        location: "North Nazimabad, Karachi",
        price: 2000,
        image: "./asset/plumber.avif",
        about:
            "Experienced plumber offering pipe repairs, bathroom fittings and water system maintenance.",
        availability: "Available tomorrow"
    },

    {
        id: 3,
        name: "Sarah Ahmed",
        service: "Beauty",
        rating: 4.9,
        reviews: 145,
        experience: "6 years",
        location: "DHA, Karachi",
        price: 3500,
        image: "./asset/female-beautician.webp",
        about:
            "Professional beauty specialist providing makeup, hairstyling and home salon services.",
        availability: "Available today"
    },

    {
        id: 4,
        name: "Usman Malik",
        service: "AC Repair",
        rating: 4.7,
        reviews: 82,
        experience: "9 years",
        location: "PECHS, Karachi",
        price: 3000,
        image: "./asset/ac-repair.jfif",
        about:
            "AC repair specialist experienced in maintenance, gas refilling and troubleshooting.",
        availability: "Available today"
    },

    {
        id: 5,
        name: "Fatima Noor",
        service: "Cleaning",
        rating: 4.8,
        reviews: 112,
        experience: "5 years",
        location: "Clifton, Karachi",
        price: 1800,
        image: "./asset/Cleaners.jpg",
        about:
            "Reliable home cleaning professional offering deep cleaning and regular home maintenance.",
        availability: "Available tomorrow"
    },

    {
        id: 6,
        name: "Hassan Ali",
        service: "Tutor",
        rating: 4.9,
        reviews: 74,
        experience: "6 years",
        location: "Johar, Karachi",
        price: 2500,
        image: "./asset/tutor.jfif",
        about:
            "Experienced mathematics tutor helping students understand difficult concepts with ease.",
        availability: "Available today"
    }

];
document.addEventListener("DOMContentLoaded", () => {

    const providersContainer =
        document.getElementById("providersContainer");

    const topProviders =
        document.getElementById("topProviders");


    // HOME PAGE
    if (topProviders) {

        const top = [...providers]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);

        topProviders.innerHTML =
            top.map(createProviderCard).join("");
    }


    // SERVICES PAGE
    if (providersContainer) {

        renderProviders();

        const searchInput =
            document.getElementById("searchInput");

        const categoryFilter =
            document.getElementById("categoryFilter");

        const ratingFilter =
            document.getElementById("ratingFilter");

        const priceFilter =
            document.getElementById("priceFilter");

        const sortFilter =
            document.getElementById("sortFilter");


        searchInput.addEventListener(
            "input",
            renderProviders
        );

        categoryFilter.addEventListener(
            "change",
            renderProviders
        );

        ratingFilter.addEventListener(
            "change",
            renderProviders
        );

        priceFilter.addEventListener(
            "input",
            () => {

                document.getElementById(
                    "priceValue"
                ).textContent =
                    Number(priceFilter.value)
                        .toLocaleString();

                renderProviders();

            }
        );

        sortFilter.addEventListener(
            "change",
            renderProviders
        );
    }

});


function createProviderCard(provider) {

    return `

        <div class="col-md-6 col-xl-4">

            <div class="provider-card">

                <div class="provider-image">

                    <img src="${provider.image}" class="provider-img" alt="${provider.name}">

                </div>

                <div class="provider-content">

                    <h4>${provider.name}</h4>

                    <div class="provider-service">
                        ${provider.service}
                    </div>

                    <div class="rating mt-2">

                        <i class="bi bi-star-fill"></i>

                        ${provider.rating}

                        <span>
                            (${provider.reviews} reviews)
                        </span>

                    </div>

                    <div class="provider-meta">

                        <span>
                            <i class="bi bi-geo-alt"></i>
                            ${provider.location}
                        </span>

                        <span class="provider-price">
                            Rs. ${provider.price.toLocaleString()}
                        </span>

                    </div>

                    <a
                        href="provider-details.html?id=${provider.id}"
                        class="btn btn-primary w-100"
                    >
                        View Profile
                    </a>

                </div>

            </div>

        </div>

    `;
}


function renderProviders() {

    const search =
        document.getElementById("searchInput")
            ?.value
            .toLowerCase() || "";

    const category =
        document.getElementById("categoryFilter")
            ?.value || "all";

    const rating =
        Number(
            document.getElementById("ratingFilter")
                ?.value || 0
        );

    const maxPrice =
        Number(
            document.getElementById("priceFilter")
                ?.value || 10000
        );

    const sort =
        document.getElementById("sortFilter")
            ?.value || "rating";


    let filtered = providers.filter(provider => {

        const matchesSearch =
            provider.name.toLowerCase()
                .includes(search) ||
            provider.service.toLowerCase()
                .includes(search);

        const matchesCategory =
            category === "all" ||
            provider.service === category;

        const matchesRating =
            provider.rating >= rating;

        const matchesPrice =
            provider.price <= maxPrice;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesRating &&
            matchesPrice
        );

    });


    if (sort === "rating") {

        filtered.sort(
            (a, b) => b.rating - a.rating
        );

    }

    if (sort === "priceLow") {

        filtered.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sort === "priceHigh") {

        filtered.sort(
            (a, b) => b.price - a.price
        );

    }


    const container =
        document.getElementById("providersContainer");

    container.innerHTML =
        filtered.length
            ? filtered.map(createProviderCard).join("")
            : `
                <div class="col-12">

                    <div class="text-center py-5">

                        <i
                            class="bi bi-search"
                            style="font-size:50px;color:#aaa"
                        ></i>

                        <h4 class="mt-3">
                            No professionals found
                        </h4>

                        <p>
                            Try changing your filters.
                        </p>

                    </div>

                </div>
            `;


    const count =
        document.getElementById("resultsCount");

    if (count) {
        count.textContent = filtered.length;
    }

}


function searchServices() {

    const search =
        document.getElementById("homeSearch").value;

    localStorage.setItem(
        "serviceSearch",
        search
    );

    window.location.href =
        "services.html";

}
document.addEventListener("DOMContentLoaded", () => {

    const details =
        document.getElementById("providerDetails");

    if (!details) return;


    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(params.get("id"));


    const provider =
        providers.find(
            p => p.id === id
        );


    if (!provider) {

        details.innerHTML = `
            <div class="text-center">
                <h2>Provider not found</h2>
                <a
                    href="services.html"
                    class="btn btn-primary mt-3"
                >
                    Browse Providers
                </a>
            </div>
        `;

        return;
    }


    details.innerHTML = `

        <div class="detail-card">

            <div class="row g-0">

                <div class="col-lg-5">

                    <div class="detail-image">

                        <img src="${provider.image}" alt="${provider.name}">

                    </div>

                </div>


                <div class="col-lg-7">

                    <div class="detail-content">

                        <span class="section-label">
                            VERIFIED PROFESSIONAL
                        </span>

                        <h1>${provider.name}</h1>

                        <p class="provider-service">
                            ${provider.service}
                        </p>


                        <div class="rating mt-3">

                            <i class="bi bi-star-fill"></i>

                            ${provider.rating}

                            <span>
                                ${provider.reviews} reviews
                            </span>

                        </div>


                        <div class="detail-stats">

                            <div class="detail-stat">
                                <i class="bi bi-award"></i>
                                ${provider.experience}
                            </div>

                            <div class="detail-stat">
                                <i class="bi bi-geo-alt"></i>
                                ${provider.location}
                            </div>

                            <div class="detail-stat">
                                <i class="bi bi-check-circle"></i>
                                ${provider.availability}
                            </div>

                        </div>


                        <h5>About</h5>

                        <p>
                            ${provider.about}
                        </p>


                        <div class="d-flex align-items-center justify-content-between mt-4">

                            <div>

                                <small>
                                    Starting from
                                </small>

                                <h3>
                                    Rs.
                                    ${provider.price.toLocaleString()}
                                </h3>

                            </div>


                            <a
                                href="booking.html?provider=${provider.id}"
                                class="btn btn-primary btn-lg"
                            >

                                Book Now

                                <i class="bi bi-arrow-right"></i>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

});
document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("bookingForm");

    if (!form) return;


    const params =
        new URLSearchParams(
            window.location.search
        );

    const providerId =
        Number(params.get("provider"));


    const provider =
        providers.find(
            p => p.id === providerId
        );


    if (provider) {

        document.getElementById(
            "bookingService"
        ).value = provider.service;


        document.getElementById(
            "bookingProvider"
        ).innerHTML = `

            <div class="d-flex align-items-center gap-3">

                <div
                    class="avatar"
                    style="width:60px;height:60px;font-size:25px"
                >
                    <i class="bi ${provider.icon}"></i>
                </div>

                <div>

                    <strong>
                        ${provider.name}
                    </strong>

                    <small class="d-block">
                        ${provider.service}
                    </small>

                    <span class="rating">
                        ★ ${provider.rating}
                    </span>

                </div>

            </div>

        `;

    }


    const date =
        document.getElementById("bookingDate");

    const time =
        document.getElementById("bookingTime");

    const service =
        document.getElementById("bookingService");


    service.addEventListener(
        "change",
        updateSummary
    );

    date.addEventListener(
        "change",
        updateSummary
    );

    time.addEventListener(
        "change",
        updateSummary
    );


    function updateSummary() {

        document.getElementById(
            "summaryService"
        ).textContent =
            service.value || "Not selected";


        document.getElementById(
            "summaryDate"
        ).textContent =
            date.value || "Not selected";


        document.getElementById(
            "summaryTime"
        ).textContent =
            time.value || "Not selected";

    }


    form.addEventListener(
        "submit",
        createBooking
    );

});


function createBooking(event) {

    event.preventDefault();


    const bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    const providerId =
        Number(
            new URLSearchParams(
                window.location.search
            ).get("provider")
        );


    const booking = {

        id:
            "BK-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(
                10000 +
                Math.random() * 90000
            ),

        customerName:
            localStorage.getItem(
                "currentUser"
            ) || "John",

        providerId:
            providerId,

        service:
            document.getElementById(
                "bookingService"
            ).value,

        date:
            document.getElementById(
                "bookingDate"
            ).value,

        time:
            document.getElementById(
                "bookingTime"
            ).value,

        location:
            document.getElementById(
                "bookingLocation"
            ).value,

        description:
            document.getElementById(
                "bookingDescription"
            ).value,

        status: "Pending",

        review: null

    };


    bookings.push(booking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert(
        `Booking created successfully!\n\nBooking ID: ${booking.id}`
    );


    window.location.href =
        "customer-dashboard.html";

}
// js dashboard

document.addEventListener("DOMContentLoaded", () => {

    renderCustomerDashboard();

    renderProviderDashboard();

});


function getBookings() {

    return JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

}


function saveBookings(bookings) {

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

}


/* CUSTOMER DASHBOARD */

function renderCustomerDashboard() {

    const table =
        document.getElementById(
            "customerBookings"
        );

    if (!table) return;


    const bookings =
        getBookings();


    document.getElementById(
        "totalBookings"
    ).textContent =
        bookings.length;


    document.getElementById(
        "pendingBookings"
    ).textContent =
        bookings.filter(
            b => b.status === "Pending"
        ).length;


    document.getElementById(
        "completedBookings"
    ).textContent =
        bookings.filter(
            b => b.status === "Completed"
        ).length;


    if (!bookings.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="text-center py-5"
                >

                    <i
                        class="bi bi-calendar-x"
                        style="font-size:40px"
                    ></i>

                    <p class="mt-2">
                        You don't have any bookings yet.
                    </p>

                    <a
                        href="services.html"
                        class="btn btn-primary"
                    >
                        Book a Service
                    </a>

                </td>

            </tr>

        `;

        return;
    }


    table.innerHTML =
        bookings.map(
            booking => {

                const provider =
                    providers.find(
                        p =>
                            p.id ===
                            booking.providerId
                    );


                return `

                    <tr>

                        <td>
                            <strong>
                                ${booking.id}
                            </strong>
                        </td>

                        <td>
                            ${provider?.name || "Provider"}
                        </td>

                        <td>
                            ${booking.service}
                        </td>

                        <td>
                            ${booking.date}
                        </td>

                        <td>

                            <span
                                class="status status-${booking.status.replace(
                                    " ",
                                    ""
                                )}"
                            >
                                ${booking.status}
                            </span>

                        </td>

                        <td>

                            ${
                                booking.status ===
                                "Completed"

                                ?

                                booking.review
                                ?

                                `<span class="text-success">
                                    Reviewed ✓
                                </span>`

                                :

                                `
                                <button
                                    class="btn btn-sm btn-primary"
                                    onclick="leaveReview('${booking.id}')"
                                >
                                    Review
                                </button>
                                `

                                :

                                `<span class="text-muted">
                                    —
                                </span>`
                            }

                        </td>

                    </tr>

                `;

            }
        ).join("");

}


/* PROVIDER DASHBOARD */

function renderProviderDashboard() {

    const table =
        document.getElementById(
            "providerBookings"
        );

    if (!table) return;


    const bookings =
        getBookings();


    document.getElementById(
        "providerPending"
    ).textContent =
        bookings.filter(
            b => b.status === "Pending"
        ).length;


    document.getElementById(
        "providerProgress"
    ).textContent =
        bookings.filter(
            b => b.status === "In Progress"
        ).length;


    document.getElementById(
        "providerCompleted"
    ).textContent =
        bookings.filter(
            b => b.status === "Completed"
        ).length;


    if (!bookings.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="text-center py-5"
                >
                    No incoming bookings yet.
                </td>

            </tr>

        `;

        return;
    }


    table.innerHTML =
        bookings.map(
            booking => {

                const action =
                    getProviderAction(
                        booking
                    );


                return `

                    <tr>

                        <td>
                            <strong>
                                ${booking.id}
                            </strong>
                        </td>

                        <td>
                            ${booking.customerName}
                        </td>

                        <td>
                            ${booking.service}
                        </td>

                        <td>
                            ${booking.date}
                        </td>

                        <td>

                            <span
                                class="status status-${booking.status.replace(
                                    " ",
                                    ""
                                )}"
                            >
                                ${booking.status}
                            </span>

                        </td>

                        <td>
                            ${action}
                        </td>

                    </tr>

                `;

            }
        ).join("");

}


/* PROVIDER ACTION */

function getProviderAction(booking) {

    if (booking.status === "Pending") {

        return `

            <div class="d-flex gap-1">

                <button
                    class="btn btn-sm btn-primary"
                    onclick="updateBookingStatus(
                        '${booking.id}',
                        'Accepted'
                    )"
                >
                    Accept
                </button>

                <button
                    class="btn btn-sm btn-outline-danger"
                    onclick="updateBookingStatus(
                        '${booking.id}',
                        'Rejected'
                    )"
                >
                    Reject
                </button>

            </div>

        `;

    }


    if (booking.status === "Accepted") {

        return `

            <button
                class="btn btn-sm btn-primary"
                onclick="updateBookingStatus(
                    '${booking.id}',
                    'In Progress'
                )"
            >
                Start Job
            </button>

        `;

    }


    if (booking.status === "In Progress") {

        return `

            <button
                class="btn btn-sm btn-success"
                onclick="updateBookingStatus(
                    '${booking.id}',
                    'Completed'
                )"
            >
                Mark Completed
            </button>

        `;

    }


    return `
        <span class="text-muted">
            No action
        </span>
    `;

}


/* UPDATE STATUS */

function updateBookingStatus(
    bookingId,
    newStatus
) {

    const bookings =
        getBookings();


    const booking =
        bookings.find(
            b => b.id === bookingId
        );


    if (!booking) return;


    booking.status =
        newStatus;


    saveBookings(bookings);


    renderCustomerDashboard();

    renderProviderDashboard();

}


/* REVIEW */

function leaveReview(bookingId) {

    const rating =
        prompt(
            "Give a rating from 1 to 5:"
        );


    const reviewText =
        prompt(
            "Write your review:"
        );


    if (!rating || !reviewText) {
        return;
    }


    const bookings =
        getBookings();


    const booking =
        bookings.find(
            b => b.id === bookingId
        );


    if (!booking) return;


    booking.review = {

        rating:
            Number(rating),

        text:
            reviewText,

        date:
            new Date()
                .toISOString()
                .split("T")[0]

    };


    saveBookings(bookings);


    renderCustomerDashboard();


    alert(
        "Thank you for your review!"
    );

}

// js theme
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const button =
            document.getElementById(
                "themeToggle"
            );


        const savedTheme =
            localStorage.getItem(
                "theme"
            );


        if (savedTheme === "dark") {

            document.body.classList.add(
                "dark-mode"
            );

        }


        if (!button) return;


        updateIcon();


        button.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "theme",
                    isDark
                        ? "dark"
                        : "light"
                );


                updateIcon();

            }
        );


        function updateIcon() {

            const icon =
                button.querySelector("i");

            if (!icon) return;


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                icon.className =
                    "bi bi-sun";

            } else {

                icon.className =
                    "bi bi-moon";

            }

        }

    }
);

// js frontend authentication
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const registerForm =
            document.getElementById(
                "registerForm"
            );


        const loginForm =
            document.getElementById(
                "loginForm"
            );


        if (registerForm) {

            registerForm.addEventListener(
                "submit",
                registerUser
            );

        }


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                loginUser
            );

        }

    }
);


function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "registerName"
        ).value;


    const email =
        document.getElementById(
            "registerEmail"
        ).value;


    const password =
        document.getElementById(
            "registerPassword"
        ).value;


    const accountType =
        document.getElementById(
            "accountType"
        ).value;


    const user = {

        name,

        email,

        password,

        accountType

    };


    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


    localStorage.setItem(
        "currentUser",
        name
    );


    alert(
        "Account created successfully!"
    );


    if (accountType === "provider") {

        window.location.href =
            "provider-dashboard.html";

    } else {

        window.location.href =
            "services.html";

    }

}


function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        ).value;


    const password =
        document.getElementById(
            "loginPassword"
        ).value;


    const savedUser =
        JSON.parse(
            localStorage.getItem("user")
        );


    if (
        !savedUser ||
        savedUser.email !== email ||
        savedUser.password !== password
    ) {

        alert(
            "Invalid email or password."
        );

        return;
    }


    localStorage.setItem(
        "currentUser",
        savedUser.name
    );


    if (
        savedUser.accountType ===
        "provider"
    ) {

        window.location.href =
            "provider-dashboard.html";

    } else {

        window.location.href =
            "customer-dashboard.html";

    }

}