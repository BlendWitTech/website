/**
 * Google Maps Commutes Widget - Full Implementation
 * Office Location: Dhapasi, Tokha, Kathmandu, Nepal
 * Coordinates: 27.7172, 85.3240
 * 
 * IMPORTANT: Replace YOUR_API_KEY_HERE with your actual Google Maps API key
 * Get your API key from: https://console.cloud.google.com/google/maps-apis
 * 
 * Required APIs to enable:
 * - Maps JavaScript API
 * - Places API
 * - Directions API
 */

// Configuration - Update with your API key
const COMMUTES_CONFIGURATION = {
    "defaultTravelMode": "DRIVING",
    "distanceMeasurementType": "METRIC",
    "mapOptions": {
        "center": {
            "lat": 27.7172,
            "lng": 85.3240
        },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 14,
        "zoomControl": true,
        "maxZoom": 20,
        "mapId": ""
    },
    "mapsApiKey": "YOUR_API_KEY_HERE" // ⚠️ REPLACE THIS WITH YOUR API KEY
};

// Check if API key is configured
if (!COMMUTES_CONFIGURATION.mapsApiKey || COMMUTES_CONFIGURATION.mapsApiKey === 'YOUR_API_KEY_HERE') {
    document.getElementById('commutesWidget').innerHTML = 
        '<div style="padding: 3rem; text-align: center; color: var(--text-secondary); background: var(--background-alt); height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">' +
        '<div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>' +
        '<h4 style="color: var(--text-primary); margin-bottom: 1rem; font-family: var(--font-display);">Google Maps Commutes Widget</h4>' +
        '<p style="margin-bottom: 1rem; max-width: 500px;">To enable the commutes widget, please add your Google Maps API key in <code style="background: var(--background); padding: 2px 6px; border-radius: 4px;">commutes-full.js</code></p>' +
        '<p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.5rem;">Get your API key from <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" style="color: var(--primary-color); text-decoration: underline;">Google Cloud Console</a></p>' +
        '<p style="font-size: 0.85rem; color: var(--text-light); max-width: 500px;">Required APIs: Maps JavaScript API, Places API, Directions API</p>' +
        '</div>';
} else {
    // Load Google Maps API with commutes widget
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${COMMUTES_CONFIGURATION.mapsApiKey}&callback=initCommutesMap&libraries=places,geometry&solution_channel=GMP_QB_commutes_v3_c`;
    script.async = true;
    script.defer = true;
    script.onerror = function() {
        document.getElementById('commutesWidget').innerHTML = 
            '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
            '<p>⚠️ Failed to load Google Maps API. Please check your API key and ensure required APIs are enabled.</p>' +
            '</div>';
    };
    document.head.appendChild(script);
}

// Initialize commutes map
window.initCommutesMap = function() {
    // The full Commutes class implementation needs to be included here
    // For now, we'll show a message that the full code needs to be added
    // You can copy the entire Commutes class from the provided HTML file
    
    if (typeof Commutes !== 'undefined') {
        try {
            new Commutes(COMMUTES_CONFIGURATION);
        } catch (error) {
            console.error('Error initializing commutes widget:', error);
            document.getElementById('commutesWidget').innerHTML = 
                '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
                '<p>⚠️ Error initializing commutes widget. Please check the console for details.</p>' +
                '</div>';
        }
    } else {
        document.getElementById('commutesWidget').innerHTML = 
            '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
            '<p>⚠️ Commutes widget class not found. Please include the full widget implementation.</p>' +
            '<p style="font-size: 0.9rem; margin-top: 1rem;">Copy the Commutes class code from the provided HTML file.</p>' +
            '</div>';
    }
};

