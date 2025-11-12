# Google Maps Commutes Widget Setup Guide

## Overview
The Google Maps Commutes widget has been integrated into your contact section. It allows visitors to:
- See your office location on a map
- Get directions to your office
- See commute times from different locations
- Choose different travel modes (driving, transit, walking, bicycling)

## Setup Steps

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API**
   - **Directions API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key

### 2. Configure API Key Restrictions (Recommended)

1. Click on your API key to edit it
2. Under **Application restrictions**, select **HTTP referrers (web sites)**
3. Add your website domains:
   - `https://blendwit.com/*`
   - `https://www.blendwit.com/*`
   - `http://localhost:*` (for local development)
4. Under **API restrictions**, select **Restrict key**
5. Select only:
   - Maps JavaScript API
   - Places API
   - Directions API
6. Save your changes

### 3. Add API Key to Website

1. Open `commutes-full.js`
2. Find this line:
   ```javascript
   "mapsApiKey": "YOUR_API_KEY_HERE"
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   "mapsApiKey": "AIzaSyC-your-actual-api-key-here"
   ```
4. Save the file

### 4. Add Full Commutes Widget Code

The `commutes-full.js` file currently has a placeholder. You need to add the full Commutes class implementation:

1. Copy the entire `<script>` section from the provided commutes widget HTML (the one with the Commutes class definition)
2. Add it to `commutes-full.js` before the configuration code
3. Make sure the `initCommutesMap` function calls `new Commutes(COMMUTES_CONFIGURATION)`

### 5. Deploy and Test

1. Commit and push your changes
2. Deploy to your server
3. Visit the contact section on your website
4. The commutes widget should appear below the contact form

## Office Location

- **Address**: Dhapasi, Tokha, Kathmandu, Nepal 44600
- **Coordinates**: 27.7172, 85.3240
- **Map Center**: Already configured in `COMMUTES_CONFIGURATION`

## Customization

### Change Default Travel Mode
Edit `commutes-full.js`:
```javascript
"defaultTravelMode": "DRIVING" // Options: DRIVING, TRANSIT, WALKING, BICYCLING
```

### Change Distance Measurement
Edit `commutes-full.js`:
```javascript
"distanceMeasurementType": "METRIC" // Options: METRIC, IMPERIAL
```

### Adjust Map Zoom Level
Edit `commutes-full.js`:
```javascript
"zoom": 14 // Change to desired zoom level (1-20)
```

## Troubleshooting

### Widget Not Showing
- Check browser console for errors
- Verify API key is correct
- Ensure all required APIs are enabled
- Check API key restrictions allow your domain

### "API key required" Message
- Make sure you've replaced `YOUR_API_KEY_HERE` in `commutes-full.js`
- Verify the API key is valid

### "Failed to load Google Maps API"
- Check API key restrictions
- Verify billing is enabled (Google requires billing for Maps API)
- Check that Maps JavaScript API is enabled

### Widget Shows but Map is Blank
- Check browser console for errors
- Verify Places API and Directions API are enabled
- Check API quotas haven't been exceeded

## Cost Considerations

Google Maps APIs have usage-based pricing:
- **Maps JavaScript API**: Free tier includes $200 credit/month
- **Places API**: Pay-as-you-go pricing
- **Directions API**: Pay-as-you-go pricing

Monitor your usage in Google Cloud Console to avoid unexpected charges.

## Security Notes

- Never commit your API key to public repositories
- Use API key restrictions to limit usage
- Monitor API usage regularly
- Set up billing alerts in Google Cloud Console

## Support

For issues with:
- **Google Maps API**: Check [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- **Widget Integration**: Check browser console for JavaScript errors
- **Website Issues**: Review the main README.md file

