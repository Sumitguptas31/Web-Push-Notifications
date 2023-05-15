
const publicVapidKey = "BMb8pBQauiIzdTOX4eEJJjTbd0lk78WagnGsandheX3F3uVMPxccWzZD2A82f1zRZmUckSt4tBk2zdiqXUnw2U8";

if('serviceWorker' in navigator) {
    registerServiceWorker().catch(console.log)
}

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    let subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });
    subscription.institute_id="5fd857718c56d02080428280"
    subscription.user_id="5ff3099d6f0e4d5aeac125a4"
    console.log(subscription)
    try{
    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}
catch(err){
    console.log(err)
}
}
