const dns = require("dns");

// 1. Forward DNS Lookup: Domain name -> IP Address
dns.lookup("www.google.com", (err, address, family) => {
    if (err) {
        console.log(err);
    } else {
        console.log(address); // e.g., '142.250.190.36'
        console.log(family);  // e.g., 4 (for IPv4) or 6 (for IPv6)
    }
});

// 2. Reverse DNS Lookup: IP Address -> Domain Names
dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) {
        console.log(err);
    } else {
        console.log(hostnames); // e.g., ['dns.google']
    }
});