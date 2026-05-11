function download(callback) {
    // 1. This prints immediately so the user knows the process started
    console.log("Downloading data..."); 
    
    // 2. The setTimeout simulates the time it takes to download (e.g., 2 seconds)
    setTimeout(() => {
        console.log("Download complete"); 
        
        // 3. After the download finishes, we call the callback function
        callback(); 
    }, 2000); 
}

// 4. We call the function and pass in our "processing" logic as the callback
download(() => {
    console.log("Processing data...");
});