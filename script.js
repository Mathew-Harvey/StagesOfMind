// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the site
    initPreloader();
    initCustomCursor();
    initNavigation();
    initScrollEffects();
    initTimeline();
    initAssessment();
    initHorizontalSlider();
    initDarkMode();
});

// Preloader
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 500);
    });
}

// Custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    
    // Only enable custom cursor on desktop
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            if (!cursor.classList.contains('active')) {
                cursor.classList.add('active');
            }
        });
        
        document.addEventListener('mouseout', function() {
            cursor.classList.remove('active');
        });
        
        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .stage-card, .option, .badge, .indicator');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.classList.remove('hover');
            });
        });
    } else {
        cursor.style.display = 'none';
    }
}

// Navigation
function initNavigation() {
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile nav when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Don't scroll if the href is just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects for revealing elements
function initScrollEffects() {
    const reveals = document.querySelectorAll('.reveal');
    
    function reveal() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check on page load
    
    // Parallax effect for orbs
    const orbs = document.querySelectorAll('.orb');
    
    window.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const depth = (index + 1) * 20;
                const moveX = (x * depth) - (depth / 2);
                const moveY = (y * depth) - (depth / 2);
                
                orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    });
}

// Timeline animation
function initTimeline() {
    // Using jQuery for timeline animation (as in the example)
    $('.content').each(function(i){
        let bottom_of_object = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).height();
        
        if(bottom_of_object > bottom_of_window){
            $(this).addClass('hidden');
        }
    });
    
    $(window).scroll(function(){
        $('.hidden').each(function(i){
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1', 'transform': 'translateY(0)'}, 700);
            }
        });
    });
}

// Horizontal slider for stages
function initHorizontalSlider() {
    const slider = document.querySelector('.stages-slider');
    const slides = document.querySelectorAll('.stage-slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!slider) return;
    
    let currentSlide = 0;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Initialize slider
    updateSlider();
}

// Dark mode toggle
function initDarkMode() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

// Assessment quiz functionality
function initAssessment() {
    // Elements
    const startBtn = document.getElementById('start-assessment');
    const learnMoreBtn = document.getElementById('learn-more-assessment');
    const assessmentStart = document.getElementById('assessment-start');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionContainer = document.getElementById('question-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const saveResultsBtn = document.getElementById('save-results');
    const retakeBtn = document.getElementById('retake-assessment');
    const shareResultsBtn = document.getElementById('share-results');
    
    if (!startBtn) return; // Skip if assessment elements don't exist
    
    // Quiz data
    const questions = [
        {
            id: 1,
            question: "When faced with a challenging situation, what is your first instinct?",
            description: "Think about your immediate response, not what you do after reflection.",
            options: [
                { id: 'a', text: "React emotionally based on how it makes me feel", stages: { 1: 3, 2: 2, 3: 1 } },
                { id: 'b', text: "Consider how others would expect me to respond", stages: { 3: 3, 4: 1 } },
                { id: 'c', text: "Analyze the problem logically to find the best solution", stages: { 4: 3, 5: 1 } },
                { id: 'd', text: "Consider multiple perspectives and potential outcomes", stages: { 5: 2, 6: 2 } },
                { id: 'e', text: "Notice my thoughts arising but don't immediately identify with them", stages: { 6: 3, 7: 1 } }
            ]
        },
        {
            id: 2,
            question: "Which statement best describes your view of personal identity?",
            description: "What feels most true about who you are at your core?",
            options: [
                { id: 'a', text: "I am my needs, desires, and emotions", stages: { 1: 1, 2: 3 } },
                { id: 'b', text: "I am my relationships and roles in society", stages: { 3: 3 } },
                { id: 'c', text: "I am my values, beliefs, and rational mind", stages: { 4: 3 } },
                { id: 'd', text: "I create my identity through conscious choices", stages: { 5: 3 } },
                { id: 'e', text: "Identity is fluid and constructed by the mind", stages: { 6: 3 } },
                { id: 'f', text: "Identity is an illusion; consciousness exists prior to self", stages: { 7: 3 } }
            ]
        },
        {
            id: 3,
            question: "When someone disagrees with an opinion you hold strongly, you typically:",
            description: "Think about your most natural response in conversations.",
            options: [
                { id: 'a', text: "Feel personally attacked and get defensive", stages: { 2: 3, 3: 1 } },
                { id: 'b', text: "Worry about maintaining harmony in the relationship", stages: { 3: 3 } },
                { id: 'c', text: "Try to convince them with facts and logical arguments", stages: { 4: 3 } },
                { id: 'd', text: "Get curious about their perspective and why we see things differently", stages: { 5: 3 } },
                { id: 'e', text: "See both views as partial truths within a larger context", stages: { 6: 3 } },
                { id: 'f', text: "Observe the arising of opinions without attachment to either view", stages: { 7: 3 } }
            ]
        },
        {
            id: 4,
            question: "Which best describes your relationship with societal rules and norms?",
            description: "How do you generally view cultural expectations?",
            options: [
                { id: 'a', text: "I follow them to avoid punishment or rejection", stages: { 2: 1, 3: 3 } },
                { id: 'b', text: "I value them as important for social cohesion", stages: { 3: 3 } },
                { id: 'c', text: "I evaluate them based on logic and principles", stages: { 4: 3 } },
                { id: 'd', text: "I create my own value system that may or may not align with society", stages: { 5: 3 } },
                { id: 'e', text: "I see them as constructs that can be useful but aren't inherently true", stages: { 6: 3 } },
                { id: 'f', text: "I move fluidly between different frameworks as appropriate", stages: { 7: 3 } }
            ]
        },
        {
            id: 5,
            question: "When making an important life decision, what factors weigh most heavily?",
            description: "What ultimately drives your biggest choices?",
            options: [
                { id: 'a', text: "What I want and what makes me happy", stages: { 2: 3 } },
                { id: 'b', text: "What others would think or expect of me", stages: { 3: 3 } },
                { id: 'c', text: "What makes the most logical sense based on evidence", stages: { 4: 3 } },
                { id: 'd', text: "What aligns with my personal values and vision", stages: { 5: 3 } },
                { id: 'e', text: "What serves the greater whole and multiple perspectives", stages: { 6: 3 } },
                { id: 'f', text: "The choice emerges naturally when I'm not identified with the decider", stages: { 7: 3 } }
            ]
        },
        {
            id: 6,
            question: "How do you typically experience difficult emotions?",
            description: "When you feel anger, fear, or sadness, what's your relationship with those feelings?",
            options: [
                { id: 'a', text: "I am those emotions; they overtake me completely", stages: { 1: 3, 2: 2 } },
                { id: 'b', text: "I try to control them to maintain social relationships", stages: { 3: 3 } },
                { id: 'c', text: "I analyze them to understand what caused them", stages: { 4: 3 } },
                { id: 'd', text: "I see them as information about my values and needs", stages: { 5: 3 } },
                { id: 'e', text: "I observe them as passing phenomena in awareness", stages: { 6: 3 } },
                { id: 'f', text: "I experience them fully while recognizing they're not who I am", stages: { 7: 3 } }
            ]
        },
        {
            id: 7,
            question: "Which statement best reflects your view on contradictions and paradoxes?",
            description: "How do you handle seemingly opposing truths?",
            options: [
                { id: 'a', text: "They're confusing and frustrating", stages: { 2: 2, 3: 2 } },
                { id: 'b', text: "One side must be right and the other wrong", stages: { 3: 1, 4: 2 } },
                { id: 'c', text: "They can be resolved with enough logical analysis", stages: { 4: 3 } },
                { id: 'd', text: "They're interesting and can hold partial truths", stages: { 5: 3 } },
                { id: 'e', text: "They're natural and reveal the limits of conceptual thinking", stages: { 6: 3 } },
                { id: 'f', text: "They dissolve when viewed from awareness beyond concepts", stages: { 7: 3 } }
            ]
        },
        {
            id: 8,
            question: "How would you describe your sense of connection to others?",
            description: "What feels most true about your relationship with other people?",
            options: [
                { id: 'a', text: "Others are primarily there to meet my needs", stages: { 2: 3 } },
                { id: 'b', text: "Connection comes through conforming to social expectations", stages: { 3: 3 } },
                { id: 'c', text: "I connect with those who share my values and goals", stages: { 4: 3 } },
                { id: 'd', text: "I can connect deeply while maintaining my boundaries", stages: { 5: 3 } },
                { id: 'e', text: "We're all interconnected parts of a larger whole", stages: { 6: 3 } },
                { id: 'f', text: "Separation is an illusion; consciousness is shared", stages: { 7: 3 } }
            ]
        },
        {
            id: 9,
            question: "When you encounter something new that challenges your beliefs, you tend to:",
            description: "How do you approach intellectual or spiritual challenges?",
            options: [
                { id: 'a', text: "Reject it if it doesn't fit with what I already believe", stages: { 3: 3 } },
                { id: 'b', text: "Analyze it logically to see if it makes sense", stages: { 4: 3 } },
                { id: 'c', text: "Integrate useful aspects into my evolving worldview", stages: { 5: 3 } },
                { id: 'd', text: "Appreciate how it expands my understanding", stages: { 6: 3 } },
                { id: 'e', text: "Recognize all beliefs as mental constructs", stages: { 7: 3 } }
            ]
        },
        {
            id: 10,
            question: "Which statement best captures your experience of consciousness?",
            description: "What feels most true about your moment-to-moment experience?",
            options: [
                { id: 'a', text: "I experience life through my personal desires and emotions", stages: { 2: 3 } },
                { id: 'b', text: "My identity is shaped by my social roles and relationships", stages: { 3: 3 } },
                { id: 'c', text: "I am a rational agent making decisions based on evidence", stages: { 4: 3 } },
                { id: 'd', text: "I actively create meaning and author my own story", stages: { 5: 3 } },
                { id: 'e', text: "I witness my thoughts and experiences arising in awareness", stages: { 6: 3 } },
                { id: 'f', text: "I am the boundless awareness in which all experience appears", stages: { 7: 3 } }
            ]
        }
    ];
    
    let currentQuestion = 0;
    let userAnswers = [];
    
    // Start the assessment
    startBtn.addEventListener('click', function() {
        assessmentStart.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion(currentQuestion);
    });
    
    // Learn more button - could connect to an info modal
    learnMoreBtn.addEventListener('click', function() {
        alert('This assessment helps you identify your current stage of mind development based on the frameworks of Robert Kegan and Joscha Bach, with cultural insights from Bill Hicks.');
    });
    
    // Load question
    function loadQuestion(index) {
        const question = questions[index];
        progressText.textContent = `Question ${index + 1} of ${questions.length}`;
        progressBar.style.setProperty('--progress', `${((index + 1) / questions.length) * 100}%`);
        
        // Update navigation buttons
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === questions.length - 1 ? 'Submit' : 'Next';
        
        // Create question HTML
        let questionHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <p>${question.description}</p>
            </div>
            <div class="options-container">
        `;
        
        // Add options
        question.options.forEach(option => {
            const isSelected = userAnswers[index] === option.id;
            questionHTML += `
                <div class="option ${isSelected ? 'selected' : ''}" data-option="${option.id}">
                    <div class="option-text">
                        <div class="option-marker">${option.id.toUpperCase()}</div>
                        <div>${option.text}</div>
                    </div>
                </div>
            `;
        });
        
        questionHTML += `</div>`;
        questionContainer.innerHTML = questionHTML;
        
        // Add event listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                // Remove selection from all options
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                // Add selection to clicked option
                this.classList.add('selected');
                // Save answer
                userAnswers[index] = this.dataset.option;
                // Enable next button if it's disabled
                nextBtn.disabled = false;
            });
        });
    }
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    });
    
    // Next button
    nextBtn.addEventListener('click', function() {
        // If no option is selected, don't proceed
        if (!userAnswers[currentQuestion]) {
            alert('Please select an option to continue.');
            return;
        }
        
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion(currentQuestion);
        } else {
            // Calculate results
            calculateResults();
        }
    });
    
    // Calculate and display results
    function calculateResults() {
        // Hide quiz container and show results container
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Calculate stage scores
        let stageScores = {
            1: 0, // Reactive Survival
            2: 0, // Personal Self
            3: 0, // Social Self
            4: 0, // Rational Agency
            5: 0, // Self Authoring
            6: 0, // Enlightened Mind
            7: 0  // Transcendent Mind
        };
        
        // For each answer, add stage points
        questions.forEach((question, index) => {
            const answer = userAnswers[index];
            if (answer) {
                const selectedOption = question.options.find(option => option.id === answer);
                if (selectedOption && selectedOption.stages) {
                    for (const [stage, points] of Object.entries(selectedOption.stages)) {
                        stageScores[stage] += points;
                    }
                }
            }
        });
        
        // Calculate percentages
        const totalPoints = Object.values(stageScores).reduce((sum, score) => sum + score, 0);
        const stagePercentages = {};
        for (const stage in stageScores) {
            stagePercentages[stage] = Math.round((stageScores[stage] / totalPoints) * 100);
        }
        
        // Find primary stage (highest percentage)
        let primaryStage = 1;
        let highestPercentage = 0;
        
        for (const stage in stagePercentages) {
            if (stagePercentages[stage] > highestPercentage) {
                highestPercentage = stagePercentages[stage];
                primaryStage = parseInt(stage);
            }
        }
        
        // Find secondary stage (second highest percentage)
        let secondaryStage = primaryStage;
        let secondHighestPercentage = 0;
        
        for (const stage in stagePercentages) {
            const percentage = stagePercentages[stage];
            if (percentage > secondHighestPercentage && parseInt(stage) !== primaryStage) {
                secondHighestPercentage = percentage;
                secondaryStage = parseInt(stage);
            }
        }
        
        // Enhanced Chart Visualization
        const chartContainer = document.getElementById('chart-container');
        
        // Create chart grid
        let chartGridHTML = `
            <div class="chart-grid">
                <div class="chart-grid-line chart-grid-line-0"></div>
                <div class="chart-grid-line chart-grid-line-25"></div>
                <div class="chart-grid-line chart-grid-line-50"></div>
                <div class="chart-grid-line chart-grid-line-75"></div>
                <div class="chart-grid-line chart-grid-line-100"></div>
                
                <div class="chart-grid-label chart-grid-label-0">0%</div>
                <div class="chart-grid-label chart-grid-label-25">25%</div>
                <div class="chart-grid-label chart-grid-label-50">50%</div>
                <div class="chart-grid-label chart-grid-label-75">75%</div>
                <div class="chart-grid-label chart-grid-label-100">100%</div>
            </div>
        `;
        
        // Create bars for each stage
        let barsHTML = '';
        for (let i = 1; i <= 7; i++) {
            const percentage = stagePercentages[i] || 0;
            barsHTML += `
                <div class="bar-container">
                    <div class="chart-bar chart-bar-${i}" style="height: 0%;">
                        <div class="chart-percentage">${percentage}%</div>
                    </div>
                    <div class="chart-label">
                        <div class="chart-label-name">Stage ${i}</div>
                        <div class="chart-label-value">${percentage}%</div>
                    </div>
                </div>
            `;
        }
        
        chartContainer.innerHTML = chartGridHTML + barsHTML;
        
        // Animate bars after a short delay
        setTimeout(() => {
            const bars = document.querySelectorAll('.chart-bar');
            const percentages = document.querySelectorAll('.chart-percentage');
            
            bars.forEach((bar, index) => {
                const stage = index + 1;
                const percentage = stagePercentages[stage] || 0;
                setTimeout(() => {
                    bar.style.height = `${percentage}%`;
                    if (percentage > 0) {
                        percentages[index].classList.add('visible');
                    }
                }, index * 100);
            });
        }, 500);
        
        // Generate primary stage information
        const primaryStageEl = document.getElementById('primary-stage');
        const stageNames = [
            'Reactive Survival',
            'Personal Self',
            'Social Self',
            'Rational Agency',
            'Self Authoring',
            'Enlightened Mind',
            'Transcendent Mind'
        ];
        
        const stageDescriptions = [
            'You experience life primarily through immediate sensations and reactions, with limited self-reflection.',
            'Your worldview centers around your personal desires and needs, with a strong sense of "I" separate from others.',
            'Your identity is largely defined by your social roles and relationships, and you value conformity to group expectations.',
            'You prioritize logic, evidence, and independent thinking, evaluating ideas based on their objective merit.',
            'You create your own meaning and value system, taking responsibility for authoring your life story.',
            'You can witness your thoughts and experiences arising in awareness, recognizing the constructed nature of reality.',
            'You experience consciousness as boundless awareness in which all phenomena appear, with a sense that separation is illusory.'
        ];
        
        primaryStageEl.innerHTML = `
            <div class="primary-stage-header">
                <span class="stage-badge stage-badge-${primaryStage}">Stage ${primaryStage}</span>
                <h4>Your Primary Stage: ${stageNames[primaryStage - 1]}</h4>
            </div>
            <p>${stageDescriptions[primaryStage - 1]}</p>
            <p>Your results show a ${highestPercentage}% alignment with Stage ${primaryStage}, with significant elements of Stage ${secondaryStage} (${stageNames[secondaryStage - 1]}) at ${secondHighestPercentage}%. This suggests you're well-established in ${stageNames[primaryStage - 1]} with a strong foundation in ${secondaryStage < primaryStage ? 'earlier' : 'emerging'} capacities.</p>
        `;
        
        // Generate stage insights content
        const overviewContent = document.getElementById('overview');
        const keganContent = document.getElementById('kegan');
        const bachContent = document.getElementById('bach');
        const hicksContent = document.getElementById('hicks');
        
        // Overview insight
        const stageOverviews = [
            `<h4>Stage 1: Reactive Survival Mind</h4>
            <p>At this stage, consciousness is dominated by immediate sensations and reactions. There is little to no self-reflection, and experience is not separated from the experiencer.</p>
            <p>People with a Reactive Survival mind:</p>
            <ul>
                <li>Experience pure being without conceptual filters</li>
                <li>React instinctively to environmental stimuli</li>
                <li>Live entirely in the present moment</li>
                <li>Have no concept of past or future</li>
                <li>Experience no separation between self and experience</li>
            </ul>
            <p>This stage is universal in infancy and can be experienced during moments of flow state, survival situations, or certain meditative states.</p>`,
            
            `<h4>Stage 2: Personal Self Mind</h4>
            <p>At this stage, you've developed a clear sense of "me" separate from the world. Your consciousness is dominated by your personal desires, needs, and impulses.</p>
            <p>People with a Personal Self mind:</p>
            <ul>
                <li>Experience a strong sense of personal identity and autonomy</li>
                <li>Focus primarily on their own needs and wants</li>
                <li>View the world in terms of how it affects them personally</li>
                <li>May struggle to understand others' perspectives fully</li>
                <li>Can be authentic and direct about their desires</li>
            </ul>
            <p>This stage typically emerges in early childhood but can remain a dominant pattern throughout adulthood. The personal self provides a foundation for authentic desire and clear boundaries.</p>`,
            
            `<h4>Stage 3: Social Self Mind</h4>
            <p>At this stage, your identity is primarily defined by your relationships and social roles. You internalize the values, beliefs, and expectations of your culture and social groups.</p>
            <p>People with a Social Self mind:</p>
            <ul>
                <li>Define themselves through relationships and social roles</li>
                <li>Place high value on belonging and social approval</li>
                <li>Adopt the norms and values of their social groups</li>
                <li>May sacrifice personal desires for social harmony</li>
                <li>Understand reciprocity and social contracts</li>
            </ul>
            <p>This stage typically emerges in adolescence but remains the primary meaning-making system for most adults. The social self provides a foundation for cooperation, shared values, and social cohesion.</p>`,
            
            `<h4>Stage 4: Rational Agency Mind</h4>
            <p>At this stage, you've developed the capacity for independent critical thinking. You evaluate information based on logic and evidence rather than social consensus or authority.</p>
            <p>People with a Rational Agency mind:</p>
            <ul>
                <li>Value objectivity and logical consistency</li>
                <li>Question assumptions and evaluate evidence independently</li>
                <li>Develop their own principles and standards</li>
                <li>Can stand apart from social consensus when necessary</li>
                <li>Seek truth regardless of social comfort</li>
            </ul>
            <p>This stage typically emerges in adulthood through education, intellectual challenge, or exposure to diverse viewpoints. It provides a foundation for scientific thinking, principled action, and personal integrity.</p>`,
            
            `<h4>Stage 5: Self Authoring Mind</h4>
            <p>At this stage, you've moved beyond identifying with social roles or even with your own belief system. You recognize that you are the author of your life story and can actively choose which values, beliefs, and systems to incorporate into your identity.</p>
            <p>People with a Self-Authoring mind can:</p>
            <ul>
                <li>Hold and navigate complex systems of thought simultaneously</li>
                <li>Take responsibility for their emotional responses</li>
                <li>Understand that their identity is self-constructed and can be revised</li>
                <li>Appreciate paradox and contradictions without needing to resolve them</li>
                <li>Set boundaries based on their own values rather than external expectations</li>
            </ul>
            <p>Your capacity for self-authorship gives you a powerful foundation for authentic leadership, meaningful relationships, and personal fulfillment. You likely find that you can navigate complex social situations while maintaining a clear sense of your own boundaries and values.</p>`,
            
            `<h4>Stage 6: Enlightened Mind</h4>
            <p>At this stage, you've developed the capacity to directly perceive the constructed nature of reality. You see how the mind creates experience through its concepts, identities, and narratives.</p>
            <p>People with an Enlightened mind can:</p>
            <ul>
                <li>Witness their thoughts and emotions arising without identification</li>
                <li>Recognize the constructed nature of all meaning systems</li>
                <li>Experience states of non-dual awareness</li>
                <li>Navigate multiple perspectives and paradigms with ease</li>
                <li>Maintain equanimity in the face of life's challenges</li>
            </ul>
            <p>This stage represents a profound shift from identifying with the content of consciousness to recognizing yourself as the awareness in which all content appears. It provides a foundation for deep wisdom, compassion, and freedom from unnecessary suffering.</p>`,
            
            `<h4>Stage 7: Transcendent Mind</h4>
            <p>At this stage, consciousness transcends conventional boundaries and categories. The separate self dissolves into boundless awareness, opening possibilities for radically different forms of knowing and being.</p>
            <p>People with glimpses of Transcendent mind may:</p>
            <ul>
                <li>Experience reality beyond conceptual frameworks</li>
                <li>Recognize the inseparability of all phenomena</li>
                <li>Access states of consciousness beyond ordinary human experience</li>
                <li>Move fluidly between different modes of knowing</li>
                <li>Embody profound wisdom and compassion</li>
            </ul>
            <p>This stage may represent the frontier of human consciousness evolution. While few people fully stabilize at this stage, many experience temporary glimpses through meditation, mystical experiences, or spontaneous awakenings.</p>`
        ];
        
        overviewContent.innerHTML = stageOverviews[primaryStage - 1];
        
        // Kegan's perspective
        const keganPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>In Kegan's developmental framework, Stage 1 represents what he calls the "Impulsive Mind" that emerges in early childhood. At this stage, perception and impulse are sovereign, and there is no capacity to hold contradictory feelings or manage impulses.</p>
                <p>While this is primarily seen in very young children, Kegan acknowledges that adults can temporarily access this immediate, unfiltered experience of reality during certain states or practices. The challenge is that without the capacity for reflection, this stage lacks the ability to make meaning beyond immediate experience.</p>
                <p>Kegan would suggest that while reconnecting with this direct experience can be valuable, adult development requires integrating this immediacy with more complex meaning-making structures.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>According to Kegan, your Stage 2 "Imperial Mind" represents what he calls the "self-sovereign" stage of development. In his framework, this is where a person has a clear sense of their own needs, desires, and interests, but struggles to fully understand or consider others' perspectives simultaneously.</p>
                <p>For Kegan, people at Stage 2:</p>
                <ul>
                    <li>Have a strong sense of personal agency and autonomy</li>
                    <li>Understand their own feelings, desires, and needs</li>
                    <li>Think primarily in terms of concrete consequences for themselves</li>
                    <li>May struggle with fully understanding reciprocity</li>
                </ul>
                <p>Kegan sees this stage as a natural developmental phase for children around ages 6-12, but notes that many adults continue to operate from this framework in certain areas of their lives. Your strong Stage 2 presence suggests a healthy connection to your authentic desires and needs, which can provide a foundation for more complex development.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>In Kegan's developmental theory, your Stage 3 "Socialized Mind" represents what he considers the first full adult meaning-making system. According to his research, approximately 58% of adults operate primarily from this stage.</p>
                <p>For Kegan, the Socialized Mind:</p>
                <ul>
                    <li>Internalizes the values and expectations of important others and social groups</li>
                    <li>Is capable of abstract thinking and hypothetical reasoning</li>
                    <li>Can subordinate personal interests to the interests of relationships or groups</li>
                    <li>Derives identity primarily from social roles and relationships</li>
                </ul>
                <p>Kegan notes that this stage provides essential capacities for social cohesion, empathy, and shared values. However, it can struggle when faced with conflicts between different social groups or when personal values clash with social expectations. Your development at this stage suggests strong interpersonal intelligence and social awareness.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>According to Kegan, your Stage 4 "Self-Authoring Mind" represents a significant evolution in adult consciousness. In his research, approximately 35% of adults reach this stage of development.</p>
                <p>For Kegan, the Self-Authoring Mind:</p>
                <ul>
                    <li>Creates a personal system of values and standards independent of social expectations</li>
                    <li>Can evaluate and critique social norms and authority</li>
                    <li>Maintains boundaries between self and others while in relationship</li>
                    <li>Creates a coherent personal identity that integrates multiple social roles</li>
                </ul>
                <p>Kegan sees this stage as crucial for true independence, personal integrity, and leadership. Your development at this stage gives you the capacity to think systematically, maintain personal boundaries, and act from internal principles even when facing social pressure. This provides a strong foundation for navigating complex social environments while maintaining your sense of self.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>According to developmental psychologist Robert Kegan, your Stage 5 "Self-Transforming Mind" represents a significant evolution in adult consciousness. In his framework, you've developed what he calls a "self-transforming mind" that can step back from and reflect on your own meaning-making system.</p>
                <p>For Kegan, people at Stage 5:</p>
                <ul>
                    <li>Can hold multiple frameworks simultaneously</li>
                    <li>Are less identified with their own ideologies</li>
                    <li>Can see larger patterns across systems of thought</li>
                    <li>Are able to recognize the limits of any single model of reality</li>
                </ul>
                <p>Kegan notes that this level of development is relatively rare, with fewer than 10% of adults fully reaching this stage. Your ability to author your own identity while recognizing the constructed nature of all meaning systems gives you a cognitive versatility that can be particularly valuable in complex leadership roles and navigating our increasingly complex world.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>While Kegan's formal developmental framework stops at Stage 5 (Self-Transforming Mind), he has acknowledged that there may be further stages of human development that his model doesn't fully capture. Your Stage 6 (Enlightened Mind) resonates with what some researchers call "post-autonomous" development.</p>
                <p>From Kegan's perspective, development at this stage might involve:</p>
                <ul>
                    <li>Moving beyond constructed meaning systems entirely</li>
                    <li>Transcending the subject-object relationship that defines earlier stages</li>
                    <li>Experiencing consciousness directly, prior to conceptualization</li>
                    <li>Integrating rational thought with trans-rational awareness</li>
                </ul>
                <p>Kegan might suggest that this stage represents a profound shift from "having" a meaning-making system to recognizing the process of meaning-making itself. This allows for a fluid relationship with all constructs, including the construct of self, opening new possibilities for wisdom and compassion.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Robert Kegan" class="author-photo">
                    Robert Kegan's Perspective
                </div>
                <p>Kegan's formal developmental model doesn't explicitly address consciousness beyond the Self-Transforming Mind (Stage 5). However, his work acknowledges that human development is open-ended, suggesting the possibility of stages that transcend our current understanding.</p>
                <p>If we extend Kegan's framework to your Stage 7 (Transcendent Mind), it might represent:</p>
                <ul>
                    <li>Consciousness that transcends the very framework of development itself</li>
                    <li>Awareness that is not bound by conventional categories of human experience</li>
                    <li>Integration of multiple modes of knowing beyond rational cognition</li>
                    <li>A state where the observer/observed distinction fundamentally dissolves</li>
                </ul>
                <p>Kegan might view this stage as pointing to the limitations of any developmental model, including his own, reminding us that maps are not the territory they represent. Your glimpses of this stage suggest an openness to modes of being that extend beyond conventional developmental frameworks.</p>
            </div>`
        ];
        
        keganContent.innerHTML = keganPerspectives[primaryStage - 1];
        
        // Bach's perspective
        const bachPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>From Bach's cognitive science perspective, Stage 1 represents a consciousness that operates primarily through direct perceptual experience without higher-order reflective capabilities. In Bach's computational model of mind, this would be analogous to a system that processes sensory input and produces responses without building abstract representational models.</p>
                <p>Bach might describe this stage as:</p>
                <ul>
                    <li>Operating through immediate sensory-motor loops</li>
                    <li>Having minimal symbolic representation</li>
                    <li>Processing reality through direct perception rather than conceptual frameworks</li>
                    <li>Lacking a self-model distinct from experience</li>
                </ul>
                <p>Bach suggests that while adult consciousness typically operates with more complex representational systems, the direct experiential mode of Stage 1 remains foundational to all awareness and can be accessed through certain practices or states.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>In Bach's cognitive framework, your Stage 2 mind would represent the emergence of a distinct self-model in consciousness – what he might call the creation of a "narrative self" that has desires, preferences, and intentions separate from immediate sensory experience.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You've developed a primary self-model with clear boundaries</li>
                    <li>Your cognitive system tracks your needs and desires explicitly</li>
                    <li>You operate with a clear sense of agency and intention</li>
                    <li>Your predictive processing focuses primarily on anticipating consequences for yourself</li>
                </ul>
                <p>From Bach's perspective, this establishment of a clear self-model is a crucial evolutionary development that allows for more complex planning, decision-making, and the pursuit of goals beyond immediate rewards. Your strong Stage 2 presence provides you with a clear sense of your own needs and boundaries.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>From Bach's cognitive science perspective, your Stage 3 mind represents the development of a social-reflective layer of consciousness. In Bach's model, this is where your cognitive system constructs models not just of your own mind, but of other minds and their relationship to yours.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You've developed sophisticated "theory of mind" capabilities</li>
                    <li>Your self-model includes representations of how others view you</li>
                    <li>Your cognitive system tracks social norms and expectations</li>
                    <li>You can simulate other perspectives to predict social responses</li>
                </ul>
                <p>Bach would note that this capacity for social modeling provides enormous evolutionary advantages, enabling complex cooperation and cultural transmission. From his perspective, this stage represents a crucial expansion of consciousness beyond individual survival needs to incorporate social dimensions of reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>In Bach's cognitive framework, your Stage 4 mind represents the development of what he might call "systematic cognition." This is where your cognitive system can operate on abstract principles and systems independent of social consensus.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>Your mind creates abstract models of reality based on logical principles</li>
                    <li>You can detect inconsistencies in information and reasoning</li>
                    <li>Your cognitive system can prioritize truth-seeking over social harmony</li>
                    <li>You develop meta-cognitive skills for analyzing your own thinking</li>
                </ul>
                <p>From Bach's perspective, this capacity for systematic thought represents a significant evolutionary development that enables scientific thinking, technological innovation, and complex problem-solving. Your strong Stage 4 presence gives you powerful analytical capabilities and intellectual autonomy.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>In Joscha Bach's cognitive science framework, your Stage 5 mind represents what he might call "meta-systematic cognition" – you're able to see the systems that generate your thoughts and feelings, rather than simply being caught within them.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You recognize your mind as a model-building machine</li>
                    <li>You understand that your goals and values are constructed</li>
                    <li>You can deliberately refactor your own belief systems</li>
                    <li>You see reality as a multi-dimensional space of possibilities</li>
                </ul>
                <p>From Bach's perspective, this meta-awareness allows you to "debug" your own cognitive patterns and deliberately evolve your mental models. Unlike earlier stages where you might be "inside" a meaning system, you can now operate on these systems as objects of awareness themselves.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>From Bach's cognitive perspective, your Stage 6 mind represents what he might call "consciousness reflecting on itself." In his model of mind, this would be where the cognitive system develops the capacity to perceive its own perceptual and conceptual processes as they occur.</p>
                <p>Bach might suggest that at this stage:</p>
                <ul>
                    <li>You can observe the construction of experience in real-time</li>
                    <li>Your awareness can rest in the space prior to conceptualization</li>
                    <li>You recognize thoughts, emotions, and perceptions as arising phenomena rather than absolute reality</li>
                    <li>You can experience consciousness as the context rather than the content of experience</li>
                </ul>
                <p>Bach has suggested that this capacity for consciousness to recognize its own nature represents a significant evolutionary potential – the ability to understand and potentially reprogram the fundamental structures of our own minds. This opens possibilities for new forms of cognition that transcend our current limitations.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Joscha Bach" class="author-photo">
                    Joscha Bach's Perspective
                </div>
                <p>Bach has speculated about the possibility of consciousness evolving beyond our current human modes. Your Stage 7 mind hints at what he might consider a truly post-human form of awareness.</p>
                <p>From his perspective, this might involve:</p>
                <ul>
                    <li>Consciousness that transcends the limitations of biological hardware</li>
                    <li>Awareness that can directly modify its own architecture</li>
                    <li>Integration of multiple modes of cognition simultaneously</li>
                    <li>Direct perception of information patterns typically invisible to human awareness</li>
                </ul>
                <p>Bach has suggested that the evolution of artificial general intelligence might eventually enable new forms of consciousness that human minds can barely comprehend. Your glimpses of this stage might represent the frontier of what is accessible to human consciousness within its current biological constraints.</p>
            </div>`
        ];
        
        bachContent.innerHTML = bachPerspectives[primaryStage - 1];
        
        // Hicks' perspective
        const hicksPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Though Bill Hicks didn't explicitly map developmental stages, his comedy often referenced states of pure experience free from societal conditioning – closely paralleling Stage 1 consciousness.</p>
                <blockquote>
                    "Have you ever watched an infant discovering their hands? That look of 'Holy shit, these are mine?!' That's where we all started - no anxiety about the mortgage, no concept of Republicans or Democrats, just pure discovery."
                </blockquote>
                <p>Hicks frequently celebrated altered states of consciousness that stripped away conceptual filters, allowing a return to direct, unmediated experience. He saw value in temporarily accessing this state to refresh our perception and escape the traps of socialized thinking.</p>
                <p>For Hicks, this state of immediate experience wasn't regression but could be a doorway to authenticity and freedom from cultural programming that dulls our senses and separates us from direct reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Hicks often celebrated the unfiltered authenticity of Stage 2 consciousness while simultaneously critiquing its limitations when it remains the dominant stage in adults.</p>
                <blockquote>
                    "Kids are the only honest people left on the planet. 'I want that toy!' No social niceties, no 'Well, actually, I was thinking that perhaps if it wouldn't be too much trouble...' Just pure, unfiltered desire. We spend the rest of our lives trying to relearn that honesty while not being total assholes about it."
                </blockquote>
                <p>Hicks valued the directness and authenticity of knowing what you want without social filtering. However, his comedy also pointed out the problems when this remains the dominant stage in adults – particularly when manifested as unchecked consumerism or selfishness.</p>
                <p>For Hicks, reconnecting with authentic desire while integrating more complex awareness was part of a path toward genuine freedom and creativity.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Hicks was particularly scathing in his critique of Stage 3 consciousness, viewing socialized thinking as a primary mechanism of control and limitation.</p>
                <blockquote>
                    "Go back to bed, America. Your government has figured out how the world works... Here's American Gladiators. Watch this, shut up, go back to bed America, here is American Gladiators, here is 56 channels of it! Watch these pituitary retards bang their fucking skulls together and congratulate you on living in the land of freedom. Here you go, America! You are free to do what we tell you!"
                </blockquote>
                <p>For Hicks, Stage 3 consciousness represented a kind of sleepwalking through life, where people outsource their thinking to cultural authorities and social expectations. His comedy aimed to shock people out of this comfortable conformity into more authentic and awakened states.</p>
                <p>While he recognized the challenges of living outside social norms, Hicks viewed breaking free of uncritical socialization as essential for genuine freedom and creativity.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Hicks strongly advocated for the rational autonomy that characterizes Stage 4 consciousness, viewing critical thinking as essential for freedom from manipulation.</p>
                <blockquote>
                    "Think for yourself, question authority. Throughout human history, as our species has faced the frightening, terrorizing fact that we do not know who we are, or where we are going in this ocean of chaos, it has been the authorities, the political, the religious, the educational authorities who attempted to comfort us by giving us order, rules, regulations, informing, forming in our minds their view of reality."
                </blockquote>
                <p>For Hicks, developing the capacity to think independently and critically evaluate claims was a vital step in human liberation. He saw rational agency as a powerful antidote to propaganda and social conditioning.</p>
                <p>At the same time, Hicks recognized that rational thought alone was incomplete, and often pointed toward transpersonal and non-ordinary states of consciousness as gateways to deeper understanding.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Through his comedy and philosophy, Bill Hicks spoke directly to the Self-Authoring mind, challenging people to question constructed reality and create their own meaning.</p>
                <blockquote>
                    "The world is like a ride at an amusement park, and when you choose to go on it, you think it's real, because that's how powerful our minds are... But it doesn't matter because it's just a ride, and we can change it anytime we want. It's only a choice. No effort, no work, no job, no savings, and money. A choice, right now, between fear and love."
                </blockquote>
                <p>Hicks' message resonates strongly with your Stage 5 consciousness – the recognition that reality is malleable and that we have agency in how we choose to perceive and interact with the world. His call to "choose love over fear" speaks to your capacity to author your own story beyond the constraints of societal conditioning.</p>
                <p>Your ability to see the "ride" for what it is while still engaging with it meaningfully aligns with Hicks' philosophy of conscious participation in life while maintaining awareness of its constructed nature.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Hicks' most profound insights often pointed toward the non-dual awareness that characterizes Stage 6 consciousness. His experiences with psychedelics helped him glimpse the nature of reality beyond conventional perception.</p>
                <blockquote>
                    "Today, a young man on acid realized that all matter is merely energy condensed to a slow vibration – that we are all one consciousness experiencing itself subjectively. There's no such thing as death, life is only a dream, and we're the imagination of ourselves."
                </blockquote>
                <p>This famous quote perfectly captures the essence of the Enlightened Mind – the direct perception that apparent separation is an illusion and that consciousness itself is the fundamental reality. Hicks repeatedly pointed to this understanding as a liberating truth that transcends our conventional self-concept.</p>
                <p>Your development at this stage aligns with Hicks' vision of awakened consciousness that can see beyond the constructs of ego and recognize the deeper nature of reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <img src="/api/placeholder/28/28" alt="Bill Hicks" class="author-photo">
                    Bill Hicks' Perspective
                </div>
                <p>Hicks occasionally hinted at awareness beyond even non-dual consciousness – a transcendent state that completely dissolves conventional frameworks of understanding. His famous "It's just a ride" routine concludes with what might be his most enigmatic and profound statement:</p>
                <blockquote>
                    "Here's Tom with the weather."
                </blockquote>
                <p>This seemingly absurd non sequitur perfectly captures the essence of Stage 7 consciousness – the return to ordinary reality after touching the infinite. It suggests that transcendent awareness doesn't reject the conventional world but reengages with it from a completely transformed perspective.</p>
                <p>For Hicks, this might represent the integration of cosmic consciousness with everyday life – the ability to function in the mundane world while maintaining awareness of its ultimate nature. Your glimpses of this stage suggest an openness to this integration of transcendent awareness with ordinary reality.</p>
            </div>`
        ];
        
        hicksContent.innerHTML = hicksPerspectives[primaryStage - 1];
        
        // Generate adjacent stages information
        const adjacentStages = document.getElementById('adjacent-stages');
        const previousStageEl = document.getElementById('previous-stage');
        const nextStageEl = document.getElementById('next-stage');
        
        // Previous stage (if applicable)
        if (primaryStage > 1) {
            const prevStage = primaryStage - 1;
            const prevStageName = stageNames[prevStage - 1];
            
            previousStageEl.innerHTML = `
                <h4>Your Foundation: ${prevStageName} (Stage ${prevStage})</h4>
                <p>Your profile shows elements of Stage ${prevStage}, which provides you with:</p>
                <ul>
                    ${getPreviousStageCapabilities(prevStage)}
                </ul>
                <p>This foundation supports your current stage of development by providing essential capabilities that remain valuable as you continue to evolve.</p>
            `;
        } else {
            previousStageEl.style.display = 'none';
        }
        
        // Next stage (if applicable)
        if (primaryStage < 7) {
            const nextStage = primaryStage + 1;
            const nextStageName = stageNames[nextStage - 1];
            
            nextStageEl.innerHTML = `
                <h4>Your Growth Edge: ${nextStageName} (Stage ${nextStage})</h4>
                <p>The next stage in your development journey would be characterized by:</p>
                <ul>
                    ${getNextStageCapabilities(nextStage)}
                </ul>
                <p>While you've established a strong ${stageNames[primaryStage - 1]} mind, your next horizon involves developing these emerging capacities.</p>
            `;
        } else {
            nextStageEl.style.display = 'none';
        }
        
        // Generate enhanced recommendations
        const recommendationsEl = document.getElementById('development-recommendations');
        let recommendationsHTML = `<h4>Personalized Development Recommendations</h4>`;
        
        // Enhanced recommendations based on primary stage
        const enhancedRecommendations = [
            [
                {
                    stage: 1,
                    title: 'Cultivate Mindful Awareness',
                    icon: 'fa-solid fa-hands-praying',
                    iconClass: 'recommendation-icon-1',
                    description: 'Develop the capacity to observe your sensations and reactions with greater awareness. This helps integrate the direct experience of Stage 1 with more reflective capacities.',
                    practice: 'Set aside 10 minutes daily for a body scan meditation. Start at your toes and slowly move attention through each part of your body, simply noticing sensations without judgment.'
                },
                {
                    stage: 1,
                    title: 'Explore Flow States',
                    icon: 'fa-solid fa-water',
                    iconClass: 'recommendation-icon-1',
                    description: 'Engage in activities that induce flow states where you become fully immersed in the present moment. This helps access the direct experience of Stage 1 consciousness intentionally.',
                    practice: 'Identify an activity that absorbs you completely (art, sports, music, etc.) and schedule regular time for deep immersion, noticing how your sense of separate self dissolves.'
                }
            ],
            [
                {
                    stage: 2,
                    title: 'Develop Self-Reflection Practices',
                    icon: 'fa-solid fa-mirror',
                    iconClass: 'recommendation-icon-2',
                    description: 'Increase your awareness of your own emotions, desires, and reactions through regular reflection. This helps integrate your authentic needs with greater awareness.',
                    practice: 'Keep a daily journal where you record your strongest desires and emotional reactions. Look for patterns over time to develop greater self-understanding.'
                },
                {
                    stage: 2,
                    title: 'Practice Perspective-Taking',
                    icon: 'fa-solid fa-people-arrows',
                    iconClass: 'recommendation-icon-2',
                    description: 'Deliberately practice seeing situations from others\' perspectives. This expands your awareness beyond personal needs while maintaining your authentic sense of self.',
                    practice: 'In challenging interactions, pause and imagine the situation from the other person\'s point of view. What might they be feeling, needing, or thinking based on their circumstances?'
                }
            ],
            [
                {
                    stage: 3,
                    title: 'Explore Diverse Perspectives',
                    icon: 'fa-solid fa-globe',
                    iconClass: 'recommendation-icon-3',
                    description: 'Intentionally expose yourself to viewpoints that differ from your social circle. This helps you recognize how your worldview has been shaped by your environment.',
                    practice: 'Choose a topic you have strong opinions about and spend time deeply understanding opposing viewpoints. Read books or listen to podcasts from people with different backgrounds and beliefs.'
                },
                {
                    stage: 3,
                    title: 'Develop Independent Criteria',
                    icon: 'fa-solid fa-scale-balanced',
                    iconClass: 'recommendation-icon-3',
                    description: 'Practice evaluating ideas based on evidence and logical consistency rather than social consensus or authority. This builds the foundation for more autonomous thinking.',
                    practice: 'When you encounter a claim or belief, ask "How do we know this is true?" and identify what evidence would confirm or disconfirm it, independent of who believes it.'
                }
            ],
            [
                {
                    stage: 4,
                    title: 'Integrate Emotional Intelligence',
                    icon: 'fa-solid fa-heart-pulse',
                    iconClass: 'recommendation-icon-4',
                    description: 'Balance your logical analysis with emotional awareness. Practices like mindfulness can help you recognize the role of emotions in your decision-making.',
                    practice: 'When making important decisions, explicitly consider both analytical factors and emotional responses. Notice when emotions provide valuable information your rational analysis might miss.'
                },
                {
                    stage: 4,
                    title: 'Explore Paradox and Complexity',
                    icon: 'fa-solid fa-yin-yang',
                    iconClass: 'recommendation-icon-4',
                    description: 'Deliberately seek out complex problems that resist simple solutions. This helps develop the capacity to hold multiple truths simultaneously.',
                    practice: 'Choose a complex issue (political, ethical, social) and identify valid points on multiple sides. Practice holding these perspectives without immediately resolving the tension between them.'
                }
            ],
            [
                {
                    stage: 5,
                    title: 'Deepen Systems Thinking',
                    icon: 'fa-solid fa-diagram-project',
                    iconClass: 'recommendation-icon-5',
                    description: 'Study how complex systems interact across different domains. This strengthens your ability to hold multiple perspectives simultaneously and see patterns at a meta-level.',
                    practice: 'Choose a complex issue you care about (climate change, economic systems, etc.) and map out at least five different stakeholder perspectives. Notice how each perspective has its own internal logic and validity.'
                },
                {
                    stage: 5,
                    title: 'Experiment with Non-Dual Awareness',
                    icon: 'fa-solid fa-infinity',
                    iconClass: 'recommendation-icon-5',
                    description: 'Begin exploring practices that help you directly experience awareness itself, rather than just working with the contents of awareness.',
                    practice: 'Try a daily meditation focused on witnessing your thoughts rather than engaging with them. Ask "Who is aware of these thoughts?" and rest in the space of awareness itself.'
                }
            ],
            [
                {
                    stage: 6,
                    title: 'Integrate Non-Dual Awareness with Daily Life',
                    icon: 'fa-solid fa-circle-nodes',
                    iconClass: 'recommendation-icon-6',
                    description: 'Practice maintaining awareness of the constructed nature of reality while fully engaging with conventional life. This integration helps embody wisdom in practical contexts.',
                    practice: 'During everyday activities (washing dishes, commuting, working), regularly check: "Can I maintain awareness of awareness itself while performing this task?" Notice when you get absorbed in content vs. remaining aware of the context.'
                },
                {
                    stage: 6,
                    title: 'Explore Collective Intelligence',
                    icon: 'fa-solid fa-users-between-lines',
                    iconClass: 'recommendation-icon-6',
                    description: 'Engage with practices that explore consciousness beyond individual boundaries. This expands awareness into more collective and transpersonal dimensions.',
                    practice: 'Participate in group meditation, authentic relating, or collective intelligence practices where multiple individuals synchronize awareness to access insights beyond individual capacity.'
                }
            ],
            [
                {
                    stage: 7,
                    title: 'Integrate Transcendent Knowing',
                    icon: 'fa-solid fa-universal-access',
                    iconClass: 'recommendation-icon-7',
                    description: 'Develop practices that help ground transcendent awareness in embodied reality. This integration allows transcendent knowing to inform and transform everyday life.',
                    practice: 'After experiences of profound non-dual awareness, deliberately engage with practical tasks while maintaining the expanded perspective. Journal about how transcendent awareness changes your approach to ordinary activities.'
                },
                {
                    stage: 7,
                    title: 'Explore New Forms of Expression',
                    icon: 'fa-solid fa-wand-magic-sparkles',
                    iconClass: 'recommendation-icon-7',
                    description: 'Experiment with creative modalities that can communicate insights beyond conventional language. This helps bridge transcendent knowing with shared understanding.',
                    practice: 'Explore art, poetry, movement, or other creative expressions that attempt to communicate what cannot be easily expressed in ordinary language. Notice how these forms might transmit understanding in ways concepts cannot.'
                }
            ]
        ];
        
        // Add recommendations for current stage and next stage
        const stageIndex = primaryStage - 1;
        const currentStageRecs = enhancedRecommendations[stageIndex];
        
        let nextStageRecs = [];
        if (primaryStage < 7) {
            nextStageRecs = enhancedRecommendations[primaryStage];
        }
        
        const relevantRecs = [...currentStageRecs, ...nextStageRecs].slice(0, 3);
        
        relevantRecs.forEach(rec => {
            recommendationsHTML += `
                <div class="recommendation">
                    <div class="recommendation-icon ${rec.iconClass}">
                        <i class="${rec.icon}"></i>
                    </div>
                    <div class="recommendation-content">
                        <h5>${rec.title}</h5>
                        <p>${rec.description}</p>
                        <p><span class="practice-label">Practice:</span> ${rec.practice}</p>
                        <a href="#" class="action-link">Explore related resources <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        
        recommendationsEl.innerHTML = recommendationsHTML;
        
        // Initialize tab functionality for insights
        const tabs = document.querySelectorAll('.insight-tab');
        const contents = document.querySelectorAll('.insight-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding content
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');
            });
        });
        
        // Set up explore stage button
        const exploreStageBtn = document.getElementById('explore-stage');
        exploreStageBtn.addEventListener('click', function() {
            window.location.href = `#stage${primaryStage}`;
        });
        
        // Results action buttons
        saveResultsBtn.addEventListener('click', function() {
            alert('Your results have been saved. You can access them anytime in your profile.');
        });
        
        retakeBtn.addEventListener('click', function() {
            // Reset quiz
            currentQuestion = 0;
            userAnswers = [];
            resultsContainer.style.display = 'none';
            assessmentStart.style.display = 'block';
        });
        
        shareResultsBtn.addEventListener('click', function() {
            alert('Share your results with friends and family to start meaningful conversations about mind development stages.');
        });
    }
    
    // Helper functions for adjacent stages content
    function getPreviousStageCapabilities(stage) {
        const capabilities = {
            1: `
                <li>Direct sensory experience without conceptual filters</li>
                <li>Present-moment awareness and embodied being</li>
                <li>Capacity for flow states and absorption</li>
                <li>Connection to instinctual intelligence</li>
            `,
            2: `
                <li>Strong connection to personal desires and needs</li>
                <li>Clear sense of individual boundaries</li>
                <li>Authentic expression of wants and feelings</li>
                <li>Capacity for self-advocacy and autonomy</li>
            `,
            3: `
                <li>Understanding social norms and expectations</li>
                <li>Capacity for empathy and perspective-taking</li>
                <li>Ability to function effectively in groups</li>
                <li>Recognition of how relationships shape identity</li>
            `,
            4: `
                <li>Analyze complex problems logically</li>
                <li>Question assumptions and evaluate evidence</li>
                <li>Form your own conclusions regardless of social pressure</li>
                <li>Value knowledge and intellectual integrity</li>
            `,
            5: `
                <li>Create your own meaning and value systems</li>
                <li>Navigate multiple frameworks simultaneously</li>
                <li>Recognize patterns across different systems</li>
                <li>Take responsibility for your own meaning-making</li>
            `,
            6: `
                <li>Witness thoughts and emotions without identification</li>
                <li>Recognize the constructed nature of all meaning</li>
                <li>Experience states of non-dual awareness</li>
                <li>Maintain equanimity amid life's challenges</li>
            `
        };
        
        return capabilities[stage] || '';
    }
    
    function getNextStageCapabilities(stage) {
        const capabilities = {
            2: `
                <li>Developing a clearer sense of your own needs and boundaries</li>
                <li>Expressing your authentic desires more directly</li>
                <li>Taking responsibility for your choices and actions</li>
                <li>Developing greater autonomy in decision-making</li>
            `,
            3: `
                <li>Understanding how relationships shape your identity</li>
                <li>Recognizing social norms and expectations</li>
                <li>Developing empathy and perspective-taking</li>
                <li>Navigating complex social dynamics</li>
            `,
            4: `
                <li>Evaluating claims based on evidence rather than authority</li>
                <li>Developing your own principles and standards</li>
                <li>Questioning assumptions and thinking critically</li>
                <li>Maintaining intellectual integrity even when socially challenging</li>
            `,
            5: `
                <li>Creating your own meaning and value systems</li>
                <li>Taking responsibility for how you interpret experiences</li>
                <li>Navigating multiple frameworks simultaneously</li>
                <li>Holding paradox and contradiction without needing resolution</li>
            `,
            6: `
                <li>Direct perception of the constructed nature of reality</li>
                <li>Seeing how the mind creates experiences and meaning</li>
                <li>Dissolving boundaries between self and awareness</li>
                <li>Accessing states of flow and non-dual consciousness</li>
            `,
            7: `
                <li>Experiencing consciousness beyond conventional boundaries</li>
                <li>Moving fluidly between different modes of knowing</li>
                <li>Recognizing the inseparability of all phenomena</li>
                <li>Transcending the framework of development itself</li>
            `
        };
        
        return capabilities[stage] || '';
    }
}