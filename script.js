// Engineering Data
const engineeringData = {
    electrical: {
        salaries: {
            'California': 78500,
            'Washington': 79000,
            'Massachusetts': 76000,
            'New York': 75000,
            'Texas': 72000,
            'Colorado': 71000,
            'Illinois': 70000,
            'Virginia': 69000,
            'Maryland': 68000,
            'Pennsylvania': 67000,
            'Ohio': 65000,
            'Michigan': 64000,
            'North Carolina': 63000,
            'Georgia': 62000,
            'Florida': 61000,
            'Arizona': 60000,
            'Nevada': 59000,
            'Utah': 58000,
            'Oregon': 57000,
            'Minnesota': 56000,
            'Wisconsin': 55000,
            'Indiana': 54000,
            'Tennessee': 53000,
            'Kentucky': 52000,
            'Alabama': 51000,
            'Mississippi': 50000,
            'Louisiana': 49000,
            'Arkansas': 48000,
            'Oklahoma': 47000,
            'Kansas': 46000,
            'Nebraska': 45000,
            'Iowa': 44000,
            'Missouri': 43000,
            'North Dakota': 42000,
            'South Dakota': 41000,
            'Montana': 40000,
            'Wyoming': 39000,
            'Idaho': 38000,
            'Alaska': 37000,
            'Hawaii': 36000,
            'West Virginia': 35000,
            'Vermont': 34000,
            'New Hampshire': 33000,
            'Maine': 32000,
            'Rhode Island': 31000,
            'Connecticut': 30000,
            'New Jersey': 29000,
            'Delaware': 28000,
            'South Carolina': 27000,
            'New Mexico': 26000
        },
        hotspots: [
            { name: 'Silicon Valley, CA', jobs: 2400, salary: 85000, lat: 37.4419, lng: -122.1430 },
            { name: 'Austin, TX', jobs: 1800, salary: 72000, lat: 30.2672, lng: -97.7431 },
            { name: 'Seattle, WA', jobs: 1600, salary: 79000, lat: 47.6062, lng: -122.3321 },
            { name: 'Boston, MA', jobs: 1400, salary: 76000, lat: 42.3601, lng: -71.0589 },
            { name: 'Denver, CO', jobs: 1200, salary: 71000, lat: 39.7392, lng: -104.9903 }
        ]
    },
    mechanical: {
        salaries: {
            'California': 75500,
            'Washington': 76000,
            'Massachusetts': 72000,
            'New York': 70000,
            'Texas': 72000,
            'Illinois': 69000,
            'Michigan': 68000,
            'Pennsylvania': 67000,
            'Ohio': 65000,
            'Colorado': 71000,
            'Virginia': 68000,
            'Maryland': 66000,
            'North Carolina': 64000,
            'Georgia': 63000,
            'Florida': 62000,
            'Arizona': 61000,
            'Nevada': 60000,
            'Utah': 59000,
            'Oregon': 58000,
            'Minnesota': 57000,
            'Wisconsin': 56000,
            'Indiana': 55000,
            'Tennessee': 54000,
            'Kentucky': 53000,
            'Alabama': 52000,
            'Mississippi': 51000,
            'Louisiana': 50000,
            'Arkansas': 49000,
            'Oklahoma': 48000,
            'Kansas': 47000,
            'Nebraska': 46000,
            'Iowa': 45000,
            'Missouri': 44000,
            'North Dakota': 43000,
            'South Dakota': 42000,
            'Montana': 41000,
            'Wyoming': 40000,
            'Idaho': 39000,
            'Alaska': 38000,
            'Hawaii': 37000,
            'West Virginia': 36000,
            'Vermont': 35000,
            'New Hampshire': 34000,
            'Maine': 33000,
            'Rhode Island': 32000,
            'Connecticut': 31000,
            'New Jersey': 30000,
            'Delaware': 29000,
            'South Carolina': 28000,
            'New Mexico': 27000
        },
        hotspots: [
            { name: 'Detroit, MI', jobs: 2100, salary: 68000, lat: 42.3314, lng: -83.0458 },
            { name: 'Houston, TX', jobs: 1800, salary: 72000, lat: 29.7604, lng: -95.3698 },
            { name: 'Los Angeles, CA', jobs: 1600, salary: 78000, lat: 34.0522, lng: -118.2437 },
            { name: 'Seattle, WA', jobs: 1400, salary: 76000, lat: 47.6062, lng: -122.3321 },
            { name: 'Chicago, IL', jobs: 1200, salary: 69000, lat: 41.8781, lng: -87.6298 }
        ]
    },
    civil: {
        salaries: {
            'California': 68500,
            'New York': 72000,
            'Massachusetts': 70000,
            'Washington': 71000,
            'Texas': 68000,
            'Illinois': 65000,
            'Colorado': 69000,
            'Virginia': 66000,
            'Maryland': 64000,
            'Pennsylvania': 63000,
            'Ohio': 62000,
            'Michigan': 61000,
            'North Carolina': 60000,
            'Georgia': 59000,
            'Florida': 58000,
            'Arizona': 62000,
            'Nevada': 61000,
            'Utah': 60000,
            'Oregon': 59000,
            'Minnesota': 58000,
            'Wisconsin': 57000,
            'Indiana': 56000,
            'Tennessee': 55000,
            'Kentucky': 54000,
            'Alabama': 53000,
            'Mississippi': 52000,
            'Louisiana': 51000,
            'Arkansas': 50000,
            'Oklahoma': 49000,
            'Kansas': 48000,
            'Nebraska': 47000,
            'Iowa': 46000,
            'Missouri': 45000,
            'North Dakota': 44000,
            'South Dakota': 43000,
            'Montana': 42000,
            'Wyoming': 41000,
            'Idaho': 40000,
            'Alaska': 39000,
            'Hawaii': 38000,
            'West Virginia': 37000,
            'Vermont': 36000,
            'New Hampshire': 35000,
            'Maine': 34000,
            'Rhode Island': 33000,
            'Connecticut': 32000,
            'New Jersey': 31000,
            'Delaware': 30000,
            'South Carolina': 29000,
            'New Mexico': 28000
        },
        hotspots: [
            { name: 'New York, NY', jobs: 2800, salary: 72000, lat: 40.7128, lng: -74.0060 },
            { name: 'Los Angeles, CA', jobs: 2200, salary: 75000, lat: 34.0522, lng: -118.2437 },
            { name: 'Chicago, IL', jobs: 1900, salary: 65000, lat: 41.8781, lng: -87.6298 },
            { name: 'Houston, TX', jobs: 1700, salary: 68000, lat: 29.7604, lng: -95.3698 },
            { name: 'Phoenix, AZ', jobs: 1500, salary: 62000, lat: 33.4484, lng: -112.0740 }
        ]
    }
};

// Global variables for maps and charts
let maps = {};
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
});

// Tab functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetTab = tab.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
            
            // Initialize map for the active tab if it hasn't been initialized yet
            if (targetTab !== 'tips') {
                initializeMapForTab(targetTab);
            }
        });
    });
}

// Initialize map for specific tab
function initializeMapForTab(tabId) {
    if (maps[tabId]) {
        return; // Map already initialized
    }
    
    let mapId, data;
    
    switch(tabId) {
        case 'electrical':
            mapId = 'electricalMap';
            data = engineeringData.electrical;
            break;
        case 'mechanical':
            mapId = 'mechanicalMap';
            data = engineeringData.mechanical;
            break;
        case 'civil':
            mapId = 'civilMap';
            data = engineeringData.civil;
            break;
        default:
            return;
    }
    
    // Small delay to ensure the tab content is visible
    setTimeout(() => {
        const map = L.map(mapId).setView([39.8283, -98.5795], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        createMapMarkers(map, data);
        maps[tabId] = map;
    }, 100);
}

// Create map markers for a specific engineering field
function createMapMarkers(map, data) {
    // Add salary data markers
    Object.entries(data.salaries).forEach(([state, salary]) => {
        const coords = getStateCoordinates(state);
        if (coords) {
            const color = getSalaryColor(salary);
            L.circleMarker(coords, {
                radius: Math.max(5, salary / 1000),
                fillColor: color,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map).bindPopup(`
                <strong>${state}</strong><br>
                Average Starting Salary: $${salary.toLocaleString()}
            `);
        }
    });

    // Add hotspot markers
    data.hotspots.forEach(hotspot => {
        L.circleMarker([hotspot.lat, hotspot.lng], {
            radius: 8,
            fillColor: '#ff6b6b',
            color: '#fff',
            weight: 3,
            opacity: 1,
            fillOpacity: 0.9
        }).addTo(map).bindPopup(`
            <strong>${hotspot.name}</strong><br>
            Jobs: ${hotspot.jobs.toLocaleString()}+<br>
            Avg Salary: $${hotspot.salary.toLocaleString()}
        `);
    });
}

// Get approximate coordinates for states
function getStateCoordinates(state) {
    const stateCoords = {
        'California': [36.7783, -119.4179],
        'Washington': [47.7511, -120.7401],
        'Massachusetts': [42.2373, -71.5314],
        'New York': [42.1657, -74.9481],
        'Texas': [31.9686, -99.9018],
        'Colorado': [39.0598, -105.3111],
        'Illinois': [40.3363, -89.0022],
        'Virginia': [37.7693, -78.1697],
        'Maryland': [39.0458, -76.6413],
        'Pennsylvania': [41.2033, -77.1945],
        'Ohio': [40.3888, -82.7649],
        'Michigan': [43.3266, -84.5361],
        'North Carolina': [35.6301, -79.8064],
        'Georgia': [33.0406, -83.6431],
        'Florida': [27.7663, -81.6868],
        'Arizona': [33.7298, -111.4312],
        'Nevada': [38.4199, -117.1219],
        'Utah': [40.1500, -111.8624],
        'Oregon': [43.8041, -120.5542],
        'Minnesota': [46.7296, -94.6859],
        'Wisconsin': [44.2685, -89.6165],
        'Indiana': [39.8494, -86.2583],
        'Tennessee': [35.7478, -86.6923],
        'Kentucky': [37.6681, -84.6701],
        'Alabama': [32.3617, -86.2792],
        'Mississippi': [32.3200, -89.2070],
        'Louisiana': [31.1695, -91.8678],
        'Arkansas': [34.7360, -92.3311],
        'Oklahoma': [35.4823, -97.5350],
        'Kansas': [38.5720, -98.4053],
        'Nebraska': [41.1254, -98.2681],
        'Iowa': [41.5909, -93.6209],
        'Missouri': [38.4561, -92.2884],
        'North Dakota': [47.5289, -99.7840],
        'South Dakota': [44.2998, -99.4388],
        'Montana': [47.0526, -110.4544],
        'Wyoming': [41.1455, -107.3025],
        'Idaho': [44.2405, -114.4788],
        'Alaska': [61.3707, -152.4044],
        'Hawaii': [21.3099, -157.8581],
        'West Virginia': [38.4912, -80.9545],
        'Vermont': [44.0459, -72.7107],
        'New Hampshire': [43.4525, -71.5639],
        'Maine': [44.3235, -69.7653],
        'Rhode Island': [41.8236, -71.4221],
        'Connecticut': [41.5978, -72.7554],
        'New Jersey': [40.2989, -74.5210],
        'Delaware': [39.3185, -75.5071],
        'South Carolina': [33.8569, -80.9450],
        'New Mexico': [34.8405, -106.2485]
    };
    return stateCoords[state];
}

// Get color based on salary
function getSalaryColor(salary) {
    if (salary >= 75000) return '#2d5016';
    if (salary >= 70000) return '#38a169';
    if (salary >= 65000) return '#68d391';
    if (salary >= 60000) return '#f6e05e';
    if (salary >= 55000) return '#ed8936';
    if (salary >= 50000) return '#e53e3e';
    return '#c53030';
}

// Initialize all charts
function initializeCharts() {
    createSalaryChart('electricalChart', engineeringData.electrical);
    createSalaryChart('mechanicalChart', engineeringData.mechanical);
    createSalaryChart('civilChart', engineeringData.civil);
}

// Create salary chart for a specific engineering field
function createSalaryChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const sortedStates = Object.entries(data.salaries)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 15);

    charts[canvasId] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedStates.map(([state]) => state),
            datasets: [{
                label: 'Average Starting Salary ($)',
                data: sortedStates.map(([, salary]) => salary),
                backgroundColor: sortedStates.map(([, salary]) => getSalaryColor(salary)),
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `$${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Load more recent hires functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtns = document.querySelectorAll('.load-more-btn');
    loadMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const field = this.getAttribute('data-field');
            const additionalHires = getAdditionalHiresForField(field);
            const hiresList = this.closest('.recent-hires-container').querySelector('.recent-hires-list');
            
            additionalHires.forEach(hire => {
                const hireItem = document.createElement('div');
                hireItem.className = 'hire-item';
                hireItem.innerHTML = `
                    <div class="hire-company">${hire.company}</div>
                    <div class="hire-location">${hire.location}</div>
                    <div class="hire-salary">${hire.salary}</div>
                    <div class="hire-date">${hire.date}</div>
                `;
                hiresList.appendChild(hireItem);
            });

            // Update stats
            const newHiresStat = this.closest('.recent-hires-container').querySelector('.hire-stat:first-child .hire-number');
            const currentCount = parseInt(newHiresStat.textContent);
            newHiresStat.textContent = currentCount + additionalHires.length;

            // Hide the button after loading
            this.style.display = 'none';
        });
    });
});

// Get additional hires data based on the field
function getAdditionalHiresForField(field) {
    switch(field) {
        case 'electrical':
            return [
                { company: 'Amazon', location: 'Seattle, WA', salary: '$86,000', date: '4 weeks ago' },
                { company: 'Google', location: 'Mountain View, CA', salary: '$94,000', date: '4 weeks ago' },
                { company: 'IBM', location: 'Austin, TX', salary: '$73,000', date: '1 month ago' },
                { company: 'Cisco', location: 'San Jose, CA', salary: '$81,000', date: '1 month ago' },
                { company: 'Raytheon', location: 'Tucson, AZ', salary: '$77,000', date: '1 month ago' }
            ];
        case 'mechanical':
            return [
                { company: 'Cummins', location: 'Columbus, IN', salary: '$69,000', date: '4 weeks ago' },
                { company: 'Parker Hannifin', location: 'Cleveland, OH', salary: '$67,000', date: '4 weeks ago' },
                { company: 'Eaton Corporation', location: 'Cleveland, OH', salary: '$71,000', date: '1 month ago' },
                { company: 'Emerson Electric', location: 'St. Louis, MO', salary: '$68,000', date: '1 month ago' },
                { company: 'Rockwell Automation', location: 'Milwaukee, WI', salary: '$70,000', date: '1 month ago' }
            ];
        case 'civil':
            return [
                { company: 'Arup', location: 'New York, NY', salary: '$75,000', date: '4 weeks ago' },
                { company: 'Jacobs Engineering', location: 'Dallas, TX', salary: '$66,000', date: '4 weeks ago' },
                { company: 'Black & Veatch', location: 'Overland Park, KS', salary: '$64,000', date: '1 month ago' },
                { company: 'CDM Smith', location: 'Boston, MA', salary: '$72,000', date: '1 month ago' },
                { company: 'Gannett Fleming', location: 'Harrisburg, PA', salary: '$61,000', date: '1 month ago' }
            ];
        default:
            return [];
    }
}