/**
 * Google Maps Commutes Widget Integration
 * Office Location: Dhapasi, Tokha, Kathmandu, Nepal
 * Coordinates: 27.7172, 85.3240
 * 
 * IMPORTANT: Replace YOUR_API_KEY_HERE with your actual Google Maps API key
 * Get your API key from: https://console.cloud.google.com/google/maps-apis
 */

// Commutes Widget Configuration
const COMMUTES_CONFIG = {
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
    "mapsApiKey": "YOUR_API_KEY_HERE" // Replace with your Google Maps API key
};

// Load Google Maps API and initialize commutes widget
function initCommutesWidget() {
    const apiKey = COMMUTES_CONFIG.mapsApiKey;
    
    // Check if API key is set
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        document.getElementById('commutesWidget').innerHTML = 
            '<div style="padding: 3rem; text-align: center; color: var(--text-secondary); background: var(--background-alt); height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">' +
            '<div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>' +
            '<h4 style="color: var(--text-primary); margin-bottom: 1rem;">Google Maps Commutes Widget</h4>' +
            '<p style="margin-bottom: 1rem;">To enable the commutes widget, please add your Google Maps API key.</p>' +
            '<p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.5rem;">Get your API key from <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" style="color: var(--primary-color);">Google Cloud Console</a></p>' +
            '<p style="font-size: 0.85rem; color: var(--text-light);">Once you have your API key, update the <code style="background: var(--background); padding: 2px 6px; border-radius: 4px;">mapsApiKey</code> in <code style="background: var(--background); padding: 2px 6px; border-radius: 4px;">commutes-widget.js</code></p>' +
            '</div>';
        return;
    }
    
    // Check if Google Maps API is already loaded
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initializeCommutes();
        return;
    }
    
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initializeCommutes&libraries=places,geometry&solution_channel=GMP_QB_commutes_v3_c`;
    script.async = true;
    script.defer = true;
    script.onerror = function() {
        document.getElementById('commutesWidget').innerHTML = 
            '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
            '<p>⚠️ Failed to load Google Maps API. Please check your API key.</p>' +
            '</div>';
    };
    document.head.appendChild(script);
}

// Initialize commutes widget after Google Maps API loads
window.initializeCommutes = function() {
    if (typeof Commutes === 'undefined') {
        // Load the commutes widget code
        loadCommutesWidgetCode();
    } else {
        try {
            new Commutes(COMMUTES_CONFIG);
        } catch (error) {
            console.error('Error initializing commutes widget:', error);
            document.getElementById('commutesWidget').innerHTML = 
                '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
                '<p>⚠️ Error initializing commutes widget. Please check the console for details.</p>' +
                '</div>';
        }
    }
};

// Load the full commutes widget code
function loadCommutesWidgetCode() {
    // This will be loaded from the full commutes widget HTML
    // For now, we'll include a simplified version
    console.log('Loading commutes widget code...');
    
    // Note: The full Commutes class implementation needs to be included
    // For production, you should include the full commutes-widget.html content
    // or load it as a separate script file
    
    document.getElementById('commutesWidget').innerHTML = 
        '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">' +
        '<p>⚠️ Commutes widget code not fully loaded. Please include the full widget implementation.</p>' +
        '</div>';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommutesWidget);
} else {
    initCommutesWidget();
}

