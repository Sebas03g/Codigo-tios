export default function fetchUpdateLocation(){
    if ('geolocation' in navigator) {
        setInterval(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            fetch('/ubicacion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            })
            });
        });
        }, 10000);
    } else {
        console.warn('Geolocalización no disponible en este navegador');
    }
}