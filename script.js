
        // --- Core Application Logic (JavaScript) ---

        // 1. Mock Data Source (Expanded with more states and standardized regions)
        const culturalData = {
            // NOTE: Coordinates (top, left) are percentages relative to the map image dimensions.
            "Jammu & Kashmir": {
                icon: "🏔️", region: "Northern India", top: 8, left: 35,
                monument: "Shankaracharya Temple", festival: "Hemis Gompa",
                art: "Kashmiri Embroidery", cuisine: "Rogan Josh",
                description: "Famous for its stunning mountain landscapes, serene lakes, and unique blend of Sufi and Hindu cultures.",
                funFact: "The Mughal Gardens in Srinagar are famous for their Persian architecture."
            },
            "Punjab": {
                icon: "🌾", region: "Northern India", top: 18, left: 29,
                monument: "Golden Temple", festival: "Baisakhi",
                art: "Bhangra Dance", cuisine: "Makki di Roti and Sarson da Saag",
                description: "The land of five rivers, celebrated for its spirited culture, agriculture, and hospitality.",
                funFact: "The Golden Temple feeds over 100,000 people free meals daily (Langar)."
            },
            "Rajasthan": {
                icon: "👑", region: "Northern India", top: 38, left: 24,
                monument: "Hawa Mahal", festival: "Pushkar Camel Fair",
                art: "Ghoomar Dance", cuisine: "Dal Bati Churma",
                description: "A land of kings, deserts, and vibrant folk traditions. Rajasthan is the epitome of royal Indian heritage.",
                funFact: "The Great Indian Desert (Thar Desert) covers a significant portion of the state."
            },
            "Uttar Pradesh": {
                icon: "🕌", region: "Northern India", top: 35, left: 47,
                monument: "Taj Mahal", festival: "Kumbh Mela",
                art: "Kathak Dance", cuisine: "Tunday Kebab",
                description: "The heartland of India, home to ancient history, spiritual centers, and one of the Seven Wonders of the World.",
                funFact: "It is the most populous state in India and a major spiritual center."
            },
            "Gujarat": {
                icon: "🦁", region: "Western India", top: 50, left: 16,
                monument: "Statue of Unity", festival: "Navratri",
                art: "Garba Dance", cuisine: "Dhokla & Undhiyu",
                description: "Known for its entrepreneurial spirit, coastal beauty, and vibrant traditional dance festivals.",
                funFact: "It is the only home to the Asiatic lion in the world."
            },
            "Maharashtra": {
                icon: "⭐", region: "Western India", top: 62, left: 32,
                monument: "Gateway of India", festival: "Ganesh Chaturthi",
                art: "Lavani Dance", cuisine: "Vada Pav & Misal Pav",
                description: "The economic powerhouse of India, offering a blend of modern city life and historic Maratha culture.",
                funFact: "Mumbai (formerly Bombay) is the financial, commercial, and entertainment capital of India."
            },
            // Grouping Eastern/Central/North-Eastern states into one category for UI simplicity
            "West Bengal": {
                icon: "🎨", region: "Eastern & Central India", top: 48, left: 73,
                monument: "Victoria Memorial", festival: "Durga Puja",
                art: "Baul Music", cuisine: "Roshogolla & Machher Jhol",
                description: "The cultural heart of India, Bengal is a hub for literature, arts, and elaborate festivals.",
                funFact: "Kolkata was the capital of British India until 1911."
            },
            "Madhya Pradesh": {
                icon: "🐯", region: "Eastern & Central India", top: 52, left: 45,
                monument: "Khajuraho Group of Monuments", festival: "Khajuraho Dance Festival",
                art: "Gond Painting", cuisine: "Bhopali Gosht Korma",
                description: "The 'Heart of India', known for its dense forests, ancient temples, and wildlife sanctuaries.",
                funFact: "It is home to the largest diamond reserves in India."
            },
            "Odisha": {
                icon: "☀️", region: "Eastern & Central India", top: 60, left: 63,
                monument: "Konark Sun Temple", festival: "Ratha Yatra",
                art: "Odissi Dance", cuisine: "Pakhala Bhata",
                description: "Famous for its classical dance, magnificent temples, and pristine coastline along the Bay of Bengal.",
                funFact: "The Chilika Lake in Odisha is the largest coastal lagoon in India."
            },
            "Assam": {
                icon: "🦏", region: "Eastern & Central India", top: 38, left: 85,
                monument: "Kamakhya Temple", festival: "Bihu",
                art: "Sattriya Dance", cuisine: "Assamese Fish Curry",
                description: "Known as the gateway to Northeast India, famous for tea plantations and unique wildlife.",
                funFact: "It is home to the world's largest river island, Majuli."
            },
            // NEW STATE 1: BIHAR
            "Bihar": {
                icon: "🙏", region: "Eastern & Central India", top: 45, left: 58, 
                monument: "Mahabodhi Temple (Bodh Gaya)", festival: "Chhath Puja",
                art: "Madhubani Painting", cuisine: "Litti Chokha",
                description: "The land of spiritual awakening, Bihar is the birthplace of two major religions (Buddhism and Jainism) and holds immense historical significance.",
                funFact: "The ancient city of Pataliputra, now Patna, was one of the largest cities in the world during the Mauryan Empire."
            },
            // NEW STATE 2: CHHATTISGARH
            "Chhattisgarh": {
                icon: "🏞️", region: "Eastern & Central India", top: 60, left: 52, 
                monument: "Bhoramdeo Temple", festival: "Bastar Dussehra",
                art: "Wrought Iron Craft", cuisine: "Muthiya",
                description: "Known for its rich tribal culture, waterfalls, and dense forests, Chhattisgarh is a hub of eco-tourism and indigenous heritage.",
                funFact: "Bastar Dussehra is a unique festival celebrated for 75 days, making it one of the longest festivals globally."
            },
            "Kerala": {
                icon: "🌴", region: "Southern India", top: 90, left: 40,
                monument: "Padmanabhaswamy Temple",
                festival: "Onam", art: "Kathakali",
                cuisine: "Sadya (Vegetarian Feast)",
                description: "Known as 'God's Own Country', Kerala is famous for its backwaters, spices, and martial arts.",
                funFact: "Kerala has the highest literacy rate in India, consistently above 94%."
            },
            "Tamil Nadu": {
                icon: "🔱", region: "Southern India", top: 85, left: 50,
                monument: "Meenakshi Amman Temple",
                festival: "Pongal", art: "Bharatanatyam",
                cuisine: "Idli, Dosa, Sambhar",
                description: "A state rich in Dravidian culture, ancient temples, and classical arts that continue to thrive today.",
                funFact: "Tamil Nadu has the second-longest coastline in India."
            }
        };

        // 2. DOM Elements
        const stateSelector = document.getElementById('state-selector'); 
        const culturalCardsContainer = document.getElementById('cultural-cards-container');
        const currentStateTitle = document.getElementById('current-state-title');
        const defaultCta = document.getElementById('default-cta');
        const loadingSpinner = document.getElementById('loading-spinner');
        const stateSearchInput = document.getElementById('state-search');
        const indiaMapWrapper = document.getElementById('india-map-wrapper'); 
        const indiaMapVisual = document.getElementById('india-map-visual'); 
        
        // Regional Selectors
        const stateSelectorNorth = document.getElementById('state-selector-north');
        const stateSelectorSouth = document.getElementById('state-selector-south');
        const stateSelectorWest = document.getElementById('state-selector-west');
        const stateSelectorEastCentral = document.getElementById('state-selector-east-central'); // NEW ELEMENT
        
        // Region Containers
        const regionNorth = document.getElementById('region-north');
        const regionSouth = document.getElementById('region-south');
        const regionWest = document.getElementById('region-west');
        const regionEastCentral = document.getElementById('region-east-central'); // NEW ELEMENT

        // Modal Elements
        const stateModal = document.getElementById('state-modal');
        const modalStateTitle = document.getElementById('modal-state-title');
        const modalContentContainer = document.getElementById('modal-content-container');

        // 3. Modal Control Functions
        function openModal() {
            stateModal.classList.remove('hidden');
            // Hide scrollbar on body when modal is open
            document.body.style.overflow = 'hidden'; 
        }

        function closeModal(event) {
            // Check if the click occurred directly on the backdrop (not inside the modal content)
            if (!event || event.currentTarget === stateModal) {
                stateModal.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrollbar
            }
        }

        // 4. Helper function to create content cards
        function createCard(title, value, icon, colorClass, index) {
            // Apply staggered animation delay
            const delay = index * 0.15; 
            return `
                <div class="p-6 bg-white rounded-lg border-2 border-sih-secondary card-shadow content-card-animation" style="animation-delay: ${delay}s;">
                    <p class="text-4xl mb-4">${icon}</p>
                    <h5 class="text-xl font-bold text-${colorClass} mb-2">${title}</h5>
                    <p class="text-lg text-sih-text font-medium">${value}</p>
                </div>
            `;
        }

        // 5. Function to generate content HTML for both the modal and the main section
        function generateContentHtml(state) {
            // 5.1. General description/summary
            let htmlContent = `
                <div class="md:col-span-2 p-6 bg-sih-secondary/10 rounded-lg mb-4 border-l-4 border-sih-secondary content-card-animation" style="animation-delay: 0s;">
                    <p class="text-sih-secondary font-semibold text-lg">${state.icon} Overview</p>
                    <p class="text-sih-text mt-2">${state.description}</p>
                </div>
            `;

            // 5.2. Category Cards (Use index for staggering)
            htmlContent += createCard('Iconic Monument', state.monument, '🕌', 'sih-secondary', 1);
            htmlContent += createCard('Major Festival', state.festival, '🎉', 'sih-primary', 2);
            htmlContent += createCard('Folk Art/Dance', state.art, '🎭', 'sih-secondary', 3);
            htmlContent += createCard('Signature Cuisine', state.cuisine, '🍲', 'sih-primary', 4);

            // Fun Fact Card
            htmlContent += `
                <div class="p-6 bg-sih-background rounded-lg border-2 border-dashed border-sih-accent md:col-span-2 text-center content-card-animation" style="animation-delay: 0.75s;">
                    <h5 class="text-2xl font-bold text-sih-accent mb-2">⭐ Fun Fact about ${state.name} ⭐</h5>
                    <p class="text-xl text-sih-text">${state.funFact}</p>
                </div>
            `;
            return htmlContent;
        }

        // 6. Function to render state data (now handles both modal and section content)
        function renderStateData(stateName, sourceElement) {
            const isMapClick = sourceElement && sourceElement.classList.contains('map-state-btn');
            const state = culturalData[stateName];

            if (!state) {
                console.error(`Data not found for state: ${stateName}`);
                return;
            }

            // Add the state name to the object for use in the content function
            state.name = stateName;
            const contentHtml = generateContentHtml(state);

            // Update active button styling for ALL button types
            document.querySelectorAll('.state-btn, .map-state-btn').forEach(btn => {
                const isActive = btn.dataset.state === stateName;
                
                // Toggle active styles
                btn.classList.toggle('bg-sih-primary', isActive);
                btn.classList.toggle('text-white', isActive);
                btn.classList.toggle('ring-4', isActive);
                btn.classList.toggle('ring-sih-primary/50', isActive);

                // Revert default style logic
                if (isActive) {
                    btn.classList.remove('bg-sih-background', 'text-sih-text', 'bg-white');
                } else {
                    if (btn.classList.contains('state-btn')) {
                        btn.classList.add('bg-sih-background', 'text-sih-text');
                    } else if (btn.classList.contains('map-state-btn')) {
                        btn.classList.add('bg-white', 'text-sih-text');
                    }
                }
            });

            if (isMapClick) {
                // --- Display in Modal (Quick View) ---
                modalStateTitle.textContent = `${stateName}: A Cultural Snapshot`;
                modalContentContainer.innerHTML = contentHtml;
                openModal();

            } else {
                // --- Display in Main Section (Full View / Scroll) ---
                loadingSpinner.classList.remove('hidden');
                culturalCardsContainer.innerHTML = '';
                defaultCta.classList.add('hidden');
                
                // Scroll to the content section for regional/search clicks
                document.getElementById('content-display').scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    loadingSpinner.classList.add('hidden');
                    currentStateTitle.textContent = `${stateName}: A Cultural Snapshot`;
                    culturalCardsContainer.innerHTML = contentHtml;
                }, 750); // 750ms delay
            }
        }

        // 7. Function to generate state selector buttons (Regional lists/Search results)
        function generateStateButtons(filter = '') {
            // Clear all containers
            stateSelector.innerHTML = '';
            stateSelectorNorth.innerHTML = '';
            stateSelectorSouth.innerHTML = '';
            stateSelectorWest.innerHTML = '';
            stateSelectorEastCentral.innerHTML = ''; // Clear new container

            const filterLower = filter.toLowerCase();
            const isFiltering = filter.length > 0;

            // Hide/Show Region Headings/Containers based on filtering status
            regionNorth.classList.toggle('hidden', isFiltering);
            regionSouth.classList.toggle('hidden', isFiltering);
            regionWest.classList.toggle('hidden', isFiltering);
            regionEastCentral.classList.toggle('hidden', isFiltering); // Toggle new container visibility

            const filteredStates = Object.keys(culturalData)
                .filter(stateName => stateName.toLowerCase().includes(filterLower));

            filteredStates.forEach(stateName => {
                const button = document.createElement('button');
                button.textContent = stateName;
                button.dataset.state = stateName;
                button.classList.add(
                    'state-btn',
                    'px-5', 'py-2', 'rounded-full',
                    'font-medium', 'text-base',
                    'transition', 'duration-300', 'ease-in-out',
                    'bg-sih-background', 'text-sih-text',
                    'hover:bg-sih-primary/90', 'hover:text-white', 'hover:scale-[1.05]',
                    'border', 'border-sih-secondary/50', 'whitespace-nowrap'
                );

                // Add click listener
                button.addEventListener('click', (event) => {
                    // Note: regional buttons pass the button element to ensure they trigger the section view logic
                    renderStateData(stateName, event.currentTarget); 
                });

                // Append button to the correct container
                if (isFiltering) {
                    // Append all filtered results to the main stateSelector (flat list)
                    stateSelector.appendChild(button);
                } else {
                    // Append to the regional containers using the standardized region field
                    const region = culturalData[stateName].region;
                    if (region.includes('Northern')) {
                        stateSelectorNorth.appendChild(button);
                    } else if (region.includes('Southern')) {
                        stateSelectorSouth.appendChild(button);
                    } else if (region.includes('Western')) {
                        stateSelectorWest.appendChild(button);
                    } else if (region.includes('Eastern & Central')) {
                         stateSelectorEastCentral.appendChild(button); // Route to the new container
                    } else {
                         // Fallback (shouldn't happen with standardized data)
                         stateSelectorNorth.appendChild(button);
                    }
                }
            });
            
            // Show message if no results found when actively searching
            if (isFiltering && stateSelector.children.length === 0) {
                 stateSelector.innerHTML = '<p class="text-xl text-sih-primary/70 font-semibold mt-4">No states match your search. Try a different name!</p>';
            }
        }
        
        // 8. Function to generate Map buttons
        function generateMapButtons() {
            indiaMapVisual.querySelectorAll('.map-state-btn').forEach(btn => btn.remove()); // Clear previous buttons
            
            Object.entries(culturalData).forEach(([stateName, data]) => {
                // Ensure map coordinates exist
                if (data.top === undefined || data.left === undefined) return; 

                const button = document.createElement('button');
                button.textContent = stateName; 
                button.dataset.state = stateName;
                button.classList.add('map-state-btn', 'px-3', 'py-2'); 
                
                // Add absolute positioning styles
                button.style.top = `${data.top}%`;
                button.style.left = `${data.left}%`;
                
                // Offset the button to center the label on the coordinate
                button.style.transform = 'translate(-50%, -50%)';

                // Add click listener
                button.addEventListener('click', (event) => {
                    // Note: map buttons pass the button element to ensure they trigger the modal logic
                    renderStateData(stateName, event.currentTarget);
                });

                // Add tooltip for the map button (optional, but good UX)
                button.title = stateName;

                indiaMapVisual.appendChild(button);
            });
        }


        // 9. Initialization on page load
        document.addEventListener('DOMContentLoaded', () => {
            generateStateButtons();
            generateMapButtons(); // Initialize the map buttons
            
            // Add listener for the quick search feature
            stateSearchInput.addEventListener('input', (event) => {
                // When searching, we hide map wrapper and show flat search results
                indiaMapWrapper.classList.toggle('hidden', event.target.value.trim().length > 0);
                generateStateButtons(event.target.value.trim());
            });
        });

        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        // NEW PALETTE: Orange, Green, Blue, White
                        'sih-primary': '#FF8C00',      // Vibrant Orange (Main Accent)
                        'sih-secondary': '#388E3C',    // Deep Green (Structural/Text)
                        'sih-accent': '#1E88E5',       // Sky Blue (Highlight/Banner)
                        'sih-background': '#FFFFFF',   // Pure White
                        'sih-text': '#2A2A2A',         // Dark Grey for readability
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                },
            },
        }
