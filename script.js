// --- 1. Initialization ---

// Store original content references
let originalContent = {
    heroTitle: '',
    heroSubtitle: '',
    heroQuote: '',
    heroQuoteAuthor: '',
    introContent: '',
    timelineTitle: '',
    timelineDescription: '',
    stageContent: []
};

// Biblical content for each section
const biblicalContent = {
    heroTitle: 'The <span>Genesis</span> of Consciousness',
    heroSubtitle: 'Exploring the parallels between the seven days of creation and the development of human consciousness.',
    heroQuote: '"In the beginning, God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep."',
    heroQuoteAuthor: '— Genesis 1:1-2',
    introContent: 'The story of Genesis can be read not just as a cosmological narrative, but as a profound allegory for the development of human consciousness. Each "day" of creation parallels a stage in how our minds construct reality and meaning.',
    timelineTitle: 'The Seven Days of Creation as Stages of Mind',
    timelineDescription: 'Explore how each day of the Genesis creation story mirrors a stage in the development of consciousness, from basic awareness to transcendent realization.'
};

// Biblical content for each stage
const biblicalStages = [
    // Stage 1 - Day 1
    {
        badge: 'DAY 1',
        title: 'Let There Be Light',
        description: 'The first day of creation: "And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness." (Genesis 1:3-4)',
        content: 'Just as God brings forth light to distinguish it from darkness, the infant\'s mind has its first "let there be light" moment - the emergence of basic awareness. This stage represents the dawn of consciousness, the most fundamental division between perception and non-perception. Like the cosmos shifting from void to having the basic distinction of light and dark, the newborn mind begins to distinguish basic sensations and patterns.',
        quote: 'The mind\'s first creative act, like God\'s, is to create light from darkness - to begin distinguishing sensations and forming a perceptual world.',
        author: 'Joscha Bach'
    },
    // Stage 2 - Day 2
    {
        badge: 'DAY 2',
        title: 'The Firmament Divides the Waters',
        description: 'The second day of creation: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters." (Genesis 1:6)',
        content: 'God creates separation between the waters above and below, establishing boundaries and structure. Similarly, the young child\'s mind creates its first major boundary - between self and other. The "firmament" represents the emerging self-construct that divides the once undifferentiated "waters" of experience into what is "me" and what is "not me." This fundamental duality creates the foundation for the young child\'s personal identity.',
        quote: 'The firmament of personal identity divides the waters of consciousness, creating the first and most fundamental boundary between self and world.',
        author: 'Robert Kegan'
    },
    // Stage 3 - Day 3
    {
        badge: 'DAY 3',
        title: 'Dry Land and Vegetation',
        description: 'The third day of creation: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear... And the earth brought forth grass, and herb..." (Genesis 1:9-12)',
        content: 'God creates stable ground and living things rooted in that ground. This reflects how the adolescent mind finds "solid footing" in social belonging and cultural identity. Just as plants draw nourishment from the earth, the social self draws stability and meaning from cultural systems. The emergence of dry land represents finding a "firm foundation" in shared reality, while the vegetation symbolizes how our identities become "rooted" in the values and expectations of our social groups.',
        quote: 'Finding your tribe is like discovering dry land amid chaotic waters. It gives you somewhere to stand, and the cultural seeds planted there become the vegetation of your social identity.',
        author: 'Joscha Bach'
    },
    // Stage 4 - Day 4
    {
        badge: 'DAY 4',
        title: 'Sun, Moon, and Stars',
        description: 'The fourth day of creation: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years." (Genesis 1:14)',
        content: 'God creates celestial bodies that provide objective measures of time and direction. This parallels the development of rational thinking that can stand apart from social consensus. Like the sun illuminating the world and providing orientation, reason gives us the ability to independently judge truth and falsehood. The rational mind can observe cyclic patterns, predict outcomes, and navigate by principles rather than just social approval. The "greater light" of reason allows us to see clearly where before we merely followed others.',
        quote: 'Rational thought is the sun that allows you to see clearly what was once only perceived through the reflected light of others\' opinions.',
        author: 'Bill Hicks'
    },
    // Stage 5 - Day 5
    {
        badge: 'DAY 5',
        title: 'Life in Sea and Sky',
        description: 'The fifth day of creation: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth..." (Genesis 1:20)',
        content: 'God creates mobile life forms that can navigate freely through water and air. This represents the self-authoring mind that can move fluidly between different perspectives and frameworks. Like fish exploring the depths and birds soaring through the sky, the self-authoring mind can inhabit multiple domains of meaning. No longer rooted in a single cultural system, it can swim through different worldviews and soar above them to create its own authentic meaning.',
        quote: 'The self-authoring mind is like a bird released from its cage, suddenly free to fly wherever it wishes, no longer bound to the limits of the ground.',
        author: 'Robert Kegan'
    },
    // Stage 6 - Day 6
    {
        badge: 'DAY 6',
        title: 'Land Animals and Humans',
        description: 'The sixth day of creation: "And God said, Let us make man in our image, after our likeness... So God created man in his own image." (Genesis 1:26-27)',
        content: 'God creates beings in the divine image, capable of self-awareness and stewardship. This parallels the enlightened mind that recognizes itself as a reflection of consciousness itself. Just as humans in Genesis are given dominion over other creatures, the enlightened mind can observe and direct its own mental processes. Created "in the image of God," humans represent consciousness that can reflect on itself, aware of its own aware-ing. At this stage, one realizes that consciousness is not just something we have but what we fundamentally are.',
        quote: 'Today, a young man on acid realized that all matter is merely energy condensed to a slow vibration – that we are all one consciousness experiencing itself subjectively.',
        author: 'Bill Hicks'
    },
    // Stage 7 - Day 7
    {
        badge: 'DAY 7',
        title: 'Divine Rest',
        description: 'The seventh day of creation: "And on the seventh day God ended his work which he had made; and he rested..." (Genesis 2:2)',
        content: 'God rests and sanctifies the seventh day, marking the completion of creation. This represents the transcendent mind that has moved beyond all striving and duality into perfect unity and peace. Just as creation is complete on the seventh day, the transcendent mind rests in the realization that nothing needs to be changed or improved - all is as it should be. There is a cessation of the ego\'s constant doing in favor of simply being. This is the mind at one with its source, resting in what some traditions call "God-consciousness."',
        quote: 'Here\'s Tom with the weather.',
        author: 'Bill Hicks'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initPreloader();
    initHeader();
    initNavigation();
    initThemeToggle();
    initParticleBackground();
    initScrollReveal();
    initStagesVisualization();
    initTimeline(); // Initialize timeline first (may rely on stagesData)
    initScrollToTop();
    initCurrentYear();
    initSmoothScrollPolyfill();
    initParallaxEffects();
    
    // Add these two lines for biblical view toggle
    captureOriginalContent();
    initBiblicalViewToggle();

    // Load stages data and config
    fetchStagesData().then(data => {
        const stagesData = data.stages;
        window.stagesData = stagesData; // Make stagesData globally accessible for initTimeline
        const config = data.config;
        const assessmentQuestions = data.assessment ? data.assessment.questions : []; // Get questions from JSON

        if (!assessmentQuestions || assessmentQuestions.length === 0) {
            console.error('Assessment questions missing or empty in stages.json');
            // Optionally display an error to the user in the assessment section
            const assessmentArea = document.getElementById('assessment-start');
            if (assessmentArea) {
                assessmentArea.innerHTML = '<p class="error-message">Could not load assessment questions. Please check the data file.</p>';
                assessmentArea.style.display = 'block'; // Ensure it's visible
            }
            // Potentially prevent assessment initialization if questions are crucial
        } else {
           initAssessment(stagesData, config, assessmentQuestions); // Pass questions
        }

        initStageNavigator(stagesData); // Updated function call
        initTimeline(); // Re-initialize timeline to ensure content is correct after data load
    }).catch(error => {
        console.error('Failed to load stages data:', error);
        // Show error message to user
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-message';
        errorContainer.textContent = 'Failed to load content. Please refresh the page.';
        document.body.appendChild(errorContainer);
    });
});

// --- 2. Data Loading ---
async function fetchStagesData() {
    try {
        const response = await fetch('data/stages.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading stages data:', error);
        throw error;
    }
}

// --- 3. Assessment Logic ---
function initAssessment(stagesData, config, questions) {
    // --- DOM Element Selection ---
    const startBtn = document.getElementById('start-assessment');
    const assessmentStart = document.getElementById('assessment-start');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionArea = document.getElementById('question-area');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const retakeBtn = document.getElementById('retake-assessment');
    const shareBtn = document.getElementById('share-results');
    const savePdfBtn = document.getElementById('save-results-pdf');
    const chartCanvas = document.getElementById('resultsChart');
    
    // Check for essential elements
    if (!startBtn || !assessmentStart || !quizContainer || !resultsContainer || !questionArea || !progressBar || !progressText || !prevBtn || !nextBtn || !retakeBtn || !shareBtn || !savePdfBtn || !chartCanvas || !stagesData || !config) {
        console.warn("Assessment elements, stage data, or config missing, skipping assessment initialization.");
        return;
    }
    
    // Check for Chart.js dependency
    if (typeof Chart === 'undefined') {
        console.error("Chart.js library not found. Assessment results chart will not work.");
        // Disable chart-related functionality or provide fallback
    }
    
    // Check for PDF dependencies
    if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
        console.warn("jsPDF or html2canvas library not found. PDF export will be disabled.");
        if (savePdfBtn) savePdfBtn.disabled = true;
    }

    // --- State Variables ---
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let stageScores = {};
    let resultsChartInstance = null;

    // --- Helper Functions ---
    const showElement = (el) => { if (el) el.style.display = 'block'; };
    const hideElement = (el) => { if (el) el.style.display = 'none'; };
    const enableButton = (btn) => { if (btn) btn.disabled = false; };
    const disableButton = (btn) => { if (btn) btn.disabled = true; };

    // --- Event Listeners ---
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', loadPreviousQuestion);
    nextBtn.addEventListener('click', loadNextQuestion);
    retakeBtn.addEventListener('click', resetQuiz);
    shareBtn.addEventListener('click', shareResults);
    if (savePdfBtn && !savePdfBtn.disabled) {
        savePdfBtn.addEventListener('click', saveResultsAsPdf);
    }

    // --- Quiz Functions ---
    function startQuiz() {
        hideElement(assessmentStart);
        showElement(quizContainer);
        currentQuestionIndex = 0;
        userAnswers.fill(null);
        loadQuestion(currentQuestionIndex);
        quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function loadQuestion(index) {
        questionArea.innerHTML = '<div class="spinner"></div>'; 
        disableButton(prevBtn);
        disableButton(nextBtn);

        setTimeout(() => {
            const question = questions[index];
            if (!question) { 
                console.error(`Question data for index ${index} not found.`);
                questionArea.innerHTML = '<p style="color: red;">Error loading question.</p>';
                return; 
            }

            let optionsHTML = question.options.map((option, i) => `
                <label class="option-label reveal fade-in-up" style="--delay: ${i * 50}ms"> 
                    <input type="radio" name="question_${question.id}" value="${option.id}" ${userAnswers[index] === option.id ? 'checked' : ''} required>
                    <span class="option-content">
                        <span class="option-indicator" aria-hidden="true"></span>
                        <span class="option-text">${option.text}</span>
                    </span>
                </label>
            `).join('');

            questionArea.innerHTML = `
                <div class="question-content">
                    <div class="question-text">
                        <h3 id="question-title-${question.id}">${index + 1}. ${question.question}</h3>
                        <p>${question.description}</p>
                    </div>
                    <form id="quiz-form-${question.id}">
                        <div class="options-container" role="radiogroup" aria-labelledby="question-title-${question.id}">
                            ${optionsHTML}
                        </div>
                    </form>
                </div>
            `;

            const progressPercentage = ((index + 1) / questions.length) * 100;
            progressBar.style.width = `${progressPercentage}%`;
            progressText.textContent = `Question ${index + 1} / ${questions.length}`;

            prevBtn.disabled = index === 0;
            nextBtn.innerHTML = index === questions.length - 1 
                ? 'View Results <i class="fas fa-chart-line"></i>' 
                : 'Next <i class="fas fa-chevron-right"></i>';
            nextBtn.disabled = userAnswers[index] === null;

            const radioButtons = questionArea.querySelectorAll(`input[name="question_${question.id}"]`);
            radioButtons.forEach(radio => {
                radio.addEventListener('change', handleOptionChange);
            });

            const optionLabels = questionArea.querySelectorAll('.option-label');
            optionLabels.forEach(label => {
                const delay = parseInt(label.style.getPropertyValue('--delay')) || 0;
                setTimeout(() => label.classList.add('visible'), 50 + delay);
            });

        }, 200);
    }

    function handleOptionChange(event) {
        const selectedOption = event.target.value;
        userAnswers[currentQuestionIndex] = selectedOption;
        enableButton(nextBtn);
    }

    function loadPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    }

    function loadNextQuestion() {
        if (userAnswers[currentQuestionIndex] === null) {
            const firstRadio = questionArea.querySelector('input[type="radio"]');
            if (firstRadio) {
                firstRadio.focus();
                questionArea.querySelector('.options-container').classList.add('shake-animation');
                setTimeout(() => {
                    questionArea.querySelector('.options-container').classList.remove('shake-animation');
                }, 500);
            }
            
            let errorMsg = questionArea.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('p');
                errorMsg.className = 'error-message';
                errorMsg.style.color = 'red';
                errorMsg.style.textAlign = 'center';
                errorMsg.style.marginTop = '10px';
                questionArea.querySelector('.options-container').insertAdjacentElement('afterend', errorMsg);
            }
            errorMsg.textContent = 'Please select an answer to continue.';
            return;
        }

        const errorMsg = questionArea.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            calculateAndDisplayResults();
        }
    }

    function calculateAndDisplayResults() {
        hideElement(quizContainer);
        showElement(resultsContainer);
        resultsContainer.classList.add('reveal', 'visible');

        // Calculate scores
        stageScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
        
        userAnswers.forEach((answerId, index) => {
            if (answerId) {
                const question = questions[index];
                const selectedOption = question.options.find(opt => opt.id === answerId);
                if (selectedOption && selectedOption.stages) {
                    for (const stage in selectedOption.stages) {
                        if (stageScores.hasOwnProperty(stage)) {
                            stageScores[stage] += selectedOption.stages[stage];
                        }
                    }
                }
            }
        });

        // Normalize scores
        const maxScore = Math.max(...Object.values(stageScores));
        const percentages = {};
        for (const stage in stageScores) {
            percentages[stage] = (stageScores[stage] / maxScore) * 100;
        }

        console.log("Calculating and displaying results..."); // Log start
        console.log("Raw Stage Scores:", JSON.parse(JSON.stringify(stageScores))); // Log raw scores
        console.log("Normalized Percentages:", JSON.parse(JSON.stringify(percentages))); // Log percentages

        // Display results
        displayChart(percentages, config);
        displayPrimaryStageInfo(stageScores, stagesData);
        displayInsightTabs(stageScores, stagesData);
        console.log("Calling displayAdjacentStages..."); // Log before call
        displayAdjacentStages(stageScores, stagesData);
        console.log("Finished calling displayAdjacentStages."); // Log after call
        displayRecommendations(stageScores, config);
    }

    function displayChart(percentages, config) {
        if (!chartCanvas || typeof Chart === 'undefined') return;

        const ctx = chartCanvas.getContext('2d');
        if (resultsChartInstance) {
            resultsChartInstance.destroy();
        }

        resultsChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(percentages).map(stage => `Stage ${stage}`),
                datasets: [{
                    label: 'Stage Resonance',
                    data: Object.values(percentages),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // --- Placeholder Result Display Functions ---
    // Implement these functions based on how you want to show the results
    function displayPrimaryStageInfo(scores, stages) {
        const primaryStageContainer = document.getElementById('primary-stage');
        if (!primaryStageContainer) return;

        let primaryId = 1;
        let highestScore = -1;
        for (const stageId in scores) {
            if (scores[stageId] > highestScore) {
                highestScore = scores[stageId];
                primaryId = parseInt(stageId);
            }
        }

        const stageData = stages.find(s => s.id === primaryId);
        if (!stageData) {
            primaryStageContainer.innerHTML = '<p class="error-message">Could not load primary stage data.</p>';
            return;
        }

        // Update tab title number
        const tabTitleSpan = document.getElementById('primary-stage-number-tabs');
        if (tabTitleSpan) tabTitleSpan.textContent = primaryId;

        primaryStageContainer.innerHTML = `
            <h4>Primary Resonance: Stage ${stageData.id} - ${stageData.title}</h4>
            <p>${stageData.description}</p>
        `;
    }

    function displayInsightTabs(scores, stages) {
        const tabsContainer = document.getElementById('insight-tabs');
        const contentsContainer = document.getElementById('insight-contents');
        if (!tabsContainer || !contentsContainer) return;

        let primaryId = 1;
        let highestScore = -1;
        for (const stageId in scores) {
            if (scores[stageId] > highestScore) {
                highestScore = scores[stageId];
                primaryId = parseInt(stageId);
            }
        }

        // --- Content Data ---
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
            <p>At this stage, you\'ve developed a clear sense of "me" separate from the world. Your consciousness is dominated by your personal desires, needs, and impulses.</p>
            <p>People with a Personal Self mind:</p>
            <ul>
                <li>Experience a strong sense of personal identity and autonomy</li>
                <li>Focus primarily on their own needs and wants</li>
                <li>View the world in terms of how it affects them personally</li>
                <li>May struggle to understand others\' perspectives fully</li>
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
            <p>At this stage, you\'ve developed the capacity for independent critical thinking. You evaluate information based on logic and evidence rather than social consensus or authority.</p>
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
            <p>At this stage, you\'ve moved beyond identifying with social roles or even with your own belief system. You recognize that you are the author of your life story and can actively choose which values, beliefs, and systems to incorporate into your identity.</p>
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
            <p>At this stage, you\'ve developed the capacity to directly perceive the constructed nature of reality. You see how the mind creates experience through its concepts, identities, and narratives.</p>
            <p>People with an Enlightened mind can:</p>
            <ul>
                <li>Witness their thoughts and emotions arising without identification</li>
                <li>Recognize the constructed nature of all meaning systems</li>
                <li>Experience states of non-dual awareness</li>
                <li>Navigate multiple perspectives and paradigms with ease</li>
                <li>Maintain equanimity in the face of life\'s challenges</li>
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
        
        const keganPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>In Kegan\'s developmental framework, Stage 1 represents what he calls the "Impulsive Mind" that emerges in early childhood. At this stage, perception and impulse are sovereign, and there is no capacity to hold contradictory feelings or manage impulses.</p>
                <p>While this is primarily seen in very young children, Kegan acknowledges that adults can temporarily access this immediate, unfiltered experience of reality during certain states or practices. The challenge is that without the capacity for reflection, this stage lacks the ability to make meaning beyond immediate experience.</p>
                <p>Kegan would suggest that while reconnecting with this direct experience can be valuable, adult development requires integrating this immediacy with more complex meaning-making structures.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>According to Kegan, your Stage 2 "Imperial Mind" represents what he calls the "self-sovereign" stage of development. In his framework, this is where a person has a clear sense of their own needs, desires, and interests, but struggles to fully understand or consider others\' perspectives simultaneously.</p>
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
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>In Kegan\'s developmental theory, your Stage 3 "Socialized Mind" represents what he considers the first full adult meaning-making system. According to his research, approximately 58% of adults operate primarily from this stage.</p>
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
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
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
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>According to developmental psychologist Robert Kegan, your Stage 5 "Self-Transforming Mind" represents a significant evolution in adult consciousness. In his framework, you\'ve developed what he calls a "self-transforming mind" that can step back from and reflect on your own meaning-making system.</p>
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
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>While Kegan\'s formal developmental framework stops at Stage 5 (Self-Transforming Mind), he has acknowledged that there may be further stages of human development that his model doesn\'t fully capture. Your Stage 6 (Enlightened Mind) resonates with what some researchers call "post-autonomous" development.</p>
                <p>From Kegan\'s perspective, development at this stage might involve:</p>
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
                     <div class="author-photo kegan-photo"></div>
                    Robert Kegan\'s Perspective
                </div>
                <p>Kegan\'s formal developmental model doesn\'t explicitly address consciousness beyond the Self-Transforming Mind (Stage 5). However, his work acknowledges that human development is open-ended, suggesting the possibility of stages that transcend our current understanding.</p>
                <p>If we extend Kegan\'s framework to your Stage 7 (Transcendent Mind), it might represent:</p>
                <ul>
                    <li>Consciousness that transcends the very framework of development itself</li>
                    <li>Awareness that is not bound by conventional categories of human experience</li>
                    <li>Integration of multiple modes of knowing beyond rational cognition</li>
                    <li>A state where the observer/observed distinction fundamentally dissolves</li>
                </ul>
                <p>Kegan might view this stage as pointing to the limitations of any developmental model, including his own, reminding us that maps are not the territory they represent. Your glimpses of this stage suggest an openness to modes of being that extend beyond conventional developmental frameworks.</p>
            </div>`
        ];
        
        const bachPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>From Bach\'s cognitive science perspective, Stage 1 represents a consciousness that operates primarily through direct perceptual experience without higher-order reflective capabilities. In Bach\'s computational model of mind, this would be analogous to a system that processes sensory input and produces responses without building abstract representational models.</p>
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
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>In Bach\'s cognitive framework, your Stage 2 mind would represent the emergence of a distinct self-model in consciousness – what he might call the creation of a "narrative self" that has desires, preferences, and intentions separate from immediate sensory experience.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You\'ve developed a primary self-model with clear boundaries</li>
                    <li>Your cognitive system tracks your needs and desires explicitly</li>
                    <li>You operate with a clear sense of agency and intention</li>
                    <li>Your predictive processing focuses primarily on anticipating consequences for yourself</li>
                </ul>
                <p>From Bach\'s perspective, this establishment of a clear self-model is a crucial evolutionary development that allows for more complex planning, decision-making, and the pursuit of goals beyond immediate rewards. Your strong Stage 2 presence provides you with a clear sense of your own needs and boundaries.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>From Bach\'s cognitive science perspective, your Stage 3 mind represents the development of a social-reflective layer of consciousness. In Bach\'s model, this is where your cognitive system constructs models not just of your own mind, but of other minds and their relationship to yours.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You\'ve developed sophisticated "theory of mind" capabilities</li>
                    <li>Your self-model includes representations of how others view you</li>
                    <li>Your cognitive system tracks social norms and expectations</li>
                    <li>You can simulate other perspectives to predict social responses</li>
                </ul>
                <p>Bach would note that this capacity for social modeling provides enormous evolutionary advantages, enabling complex cooperation and cultural transmission. From his perspective, this stage represents a crucial expansion of consciousness beyond individual survival needs to incorporate social dimensions of reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>In Bach\'s cognitive framework, your Stage 4 mind represents the development of what he might call "systematic cognition." This is where your cognitive system can operate on abstract principles and systems independent of social consensus.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>Your mind creates abstract models of reality based on logical principles</li>
                    <li>You can detect inconsistencies in information and reasoning</li>
                    <li>Your cognitive system can prioritize truth-seeking over social harmony</li>
                    <li>You develop meta-cognitive skills for analyzing your own thinking</li>
                </ul>
                <p>From Bach\'s perspective, this capacity for systematic thought represents a significant evolutionary development that enables scientific thinking, technological innovation, and complex problem-solving. Your strong Stage 4 presence gives you powerful analytical capabilities and intellectual autonomy.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>In Joscha Bach\'s cognitive science framework, your Stage 5 mind represents what he might call "meta-systematic cognition" – you\'re able to see the systems that generate your thoughts and feelings, rather than simply being caught within them.</p>
                <p>Bach would suggest that at this stage:</p>
                <ul>
                    <li>You recognize your mind as a model-building machine</li>
                    <li>You understand that your goals and values are constructed</li>
                    <li>You can deliberately refactor your own belief systems</li>
                    <li>You see reality as a multi-dimensional space of possibilities</li>
                </ul>
                <p>From Bach\'s perspective, this meta-awareness allows you to "debug" your own cognitive patterns and deliberately evolve your mental models. Unlike earlier stages where you might be "inside" a meaning system, you can now operate on these systems as objects of awareness themselves.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
                </div>
                <p>From Bach\'s cognitive perspective, your Stage 6 mind represents what he might call "consciousness reflecting on itself." In his model of mind, this would be where the cognitive system develops the capacity to perceive its own perceptual and conceptual processes as they occur.</p>
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
                     <div class="author-photo bach-photo"></div>
                    Joscha Bach\'s Perspective
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
        
        const hicksPerspectives = [
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Though Bill Hicks didn\'t explicitly map developmental stages, his comedy often referenced states of pure experience free from societal conditioning – closely paralleling Stage 1 consciousness.</p>
                <blockquote>
                    "Have you ever watched an infant discovering their hands? That look of \'Holy shit, these are mine?!\' That\'s where we all started - no anxiety about the mortgage, no concept of Republicans or Democrats, just pure discovery."
                </blockquote>
                <p>Hicks frequently celebrated altered states of consciousness that stripped away conceptual filters, allowing a return to direct, unmediated experience. He saw value in temporarily accessing this state to refresh our perception and escape the traps of socialized thinking.</p>
                <p>For Hicks, this state of immediate experience wasn\'t regression but could be a doorway to authenticity and freedom from cultural programming that dulls our senses and separates us from direct reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Hicks often celebrated the unfiltered authenticity of Stage 2 consciousness while simultaneously critiquing its limitations when it remains the dominant stage in adults.</p>
                <blockquote>
                    "Kids are the only honest people left on the planet. \'I want that toy!\' No social niceties, no \'Well, actually, I was thinking that perhaps if it wouldn\'t be too much trouble...\' Just pure, unfiltered desire. We spend the rest of our lives trying to relearn that honesty while not being total assholes about it."
                </blockquote>
                <p>Hicks valued the directness and authenticity of knowing what you want without social filtering. However, his comedy also pointed out the problems when this remains the dominant stage in adults – particularly when manifested as unchecked consumerism or selfishness.</p>
                <p>For Hicks, reconnecting with authentic desire while integrating more complex awareness was part of a path toward genuine freedom and creativity.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Hicks was particularly scathing in his critique of Stage 3 consciousness, viewing socialized thinking as a primary mechanism of control and limitation.</p>
                <blockquote>
                    "Go back to bed, America. Your government has figured out how the world works... Here\'s American Gladiators. Watch this, shut up, go back to bed America, here is American Gladiators, here is 56 channels of it! Watch these pituitary retards bang their fucking skulls together and congratulate you on living in the land of freedom. Here you go, America! You are free to do what we tell you!"
                </blockquote>
                <p>For Hicks, Stage 3 consciousness represented a kind of sleepwalking through life, where people outsource their thinking to cultural authorities and social expectations. His comedy aimed to shock people out of this comfortable conformity into more authentic and awakened states.</p>
                <p>While he recognized the challenges of living outside social norms, Hicks viewed breaking free of uncritical socialization as essential for genuine freedom and creativity.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
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
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Through his comedy and philosophy, Bill Hicks spoke directly to the Self-Authoring mind, challenging people to question constructed reality and create their own meaning.</p>
                <blockquote>
                    "The world is like a ride at an amusement park, and when you choose to go on it, you think it\'s real, because that\'s how powerful our minds are... But it doesn\'t matter because it\'s just a ride, and we can change it anytime we want. It\'s only a choice. No effort, no work, no job, no savings, and money. A choice, right now, between fear and love."
                </blockquote>
                <p>Hicks\' message resonates strongly with your Stage 5 consciousness – the recognition that reality is malleable and that we have agency in how we choose to perceive and interact with the world. His call to "choose love over fear" speaks to your capacity to author your own story beyond the constraints of societal conditioning.</p>
                <p>Your ability to see the "ride" for what it is while still engaging with it meaningfully aligns with Hicks\' philosophy of conscious participation in life while maintaining awareness of its constructed nature.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Hicks\' most profound insights often pointed toward the non-dual awareness that characterizes Stage 6 consciousness. His experiences with psychedelics helped him glimpse the nature of reality beyond conventional perception.</p>
                <blockquote>
                    "Today, a young man on acid realized that all matter is merely energy condensed to a slow vibration – that we are all one consciousness experiencing itself subjectively. There\'s no such thing as death, life is only a dream, and we\'re the imagination of ourselves."
                </blockquote>
                <p>This famous quote perfectly captures the essence of the Enlightened Mind – the direct perception that apparent separation is an illusion and that consciousness itself is the fundamental reality. Hicks repeatedly pointed to this understanding as a liberating truth that transcends our conventional self-concept.</p>
                <p>Your development at this stage aligns with Hicks\' vision of awakened consciousness that can see beyond the constructs of ego and recognize the deeper nature of reality.</p>
            </div>`,
            
            `<div class="author-insight">
                <div class="author-name">
                    <div class="author-photo hicks-photo"></div>
                    Bill Hicks\' Perspective
                </div>
                <p>Hicks occasionally hinted at awareness beyond even non-dual consciousness – a transcendent state that completely dissolves conventional frameworks of understanding. His famous "It\'s just a ride" routine concludes with what might be his most enigmatic and profound statement:</p>
                <blockquote>
                    "Here\'s Tom with the weather."
                </blockquote>
                <p>This seemingly absurd non sequitur perfectly captures the essence of Stage 7 consciousness – the return to ordinary reality after touching the infinite. It suggests that transcendent awareness doesn\'t reject the conventional world but reengages with it from a completely transformed perspective.</p>
                <p>For Hicks, this might represent the integration of cosmic consciousness with everyday life – the ability to function in the mundane world while maintaining awareness of its ultimate nature. Your glimpses of this stage suggest an openness to this integration of transcendent awareness with ordinary reality.</p>
            </div>`
        ];
        // --- End Content Data ---

        // Populate initial content (Overview)
        const overviewPanel = contentsContainer.querySelector('#overview');
        if (overviewPanel) overviewPanel.innerHTML = stageOverviews[primaryId - 1] || '<p>Overview content not available for this stage.</p>';
        
        // Clear other panels initially
        const keganPanel = contentsContainer.querySelector('#kegan');
        const bachPanel = contentsContainer.querySelector('#bach');
        const hicksPanel = contentsContainer.querySelector('#hicks');
        if (keganPanel) keganPanel.innerHTML = ''; // Clear initially
        if (bachPanel) bachPanel.innerHTML = ''; // Clear initially
        if (hicksPanel) hicksPanel.innerHTML = ''; // Clear initially

        // Reset tabs and content visibility
        tabsContainer.querySelectorAll('.insight-tab').forEach((tab, index) => {
            const panelId = tab.getAttribute('data-tab');
            const panel = contentsContainer.querySelector(`#${panelId}`);
            
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
            if (panel) {
                panel.classList.remove('active');
                panel.hidden = true;
            }
            
            // Set overview as active initially
            if(index === 0) {
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                 if (panel) {
                    panel.classList.add('active');
                    panel.hidden = false;
                }
            }

            // Remove previous listeners to avoid duplicates
            const newTab = tab.cloneNode(true);
            tab.parentNode.replaceChild(newTab, tab);

            // Add click listener
            newTab.addEventListener('click', () => {
                // Deactivate all tabs and panels
                tabsContainer.querySelectorAll('.insight-tab').forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                contentsContainer.querySelectorAll('.insight-content').forEach(p => {
                    p.classList.remove('active');
                    p.hidden = true;
                });

                // Activate clicked tab and corresponding panel
                newTab.classList.add('active');
                newTab.setAttribute('aria-selected', 'true');
                const targetPanelId = newTab.getAttribute('data-tab');
                const targetPanel = contentsContainer.querySelector(`#${targetPanelId}`);
                
                if (targetPanel) {
                     // Populate content dynamically based on the clicked tab
                     // Ensure primaryId is valid (between 1 and 7)
                     const validPrimaryId = Math.max(1, Math.min(primaryId, 7));
                     const index = validPrimaryId - 1;

                     if (targetPanelId === 'overview') {
                         targetPanel.innerHTML = stageOverviews[index] || `<p>Content for Overview not available.</p>`;
                     } else if (targetPanelId === 'kegan') {
                         targetPanel.innerHTML = keganPerspectives[index] || `<p>Content for Kegan Lens not available.</p>`;
                     } else if (targetPanelId === 'bach') {
                         targetPanel.innerHTML = bachPerspectives[index] || `<p>Content for Bach Lens not available.</p>`;
                     } else if (targetPanelId === 'hicks') {
                         targetPanel.innerHTML = hicksPerspectives[index] || `<p>Content for Hicks Lens not available.</p>`;
                     }
                    targetPanel.classList.add('active');
                    targetPanel.hidden = false;
                }
            });
        });
    }

    function displayAdjacentStages(scores, stages) {
        console.log("Inside displayAdjacentStages. Scores:", JSON.parse(JSON.stringify(scores))); // Log entry and scores
        const adjacentContainer = document.getElementById('adjacent-stages-grid'); // Target the grid div
        const prevStageEl = document.getElementById('previous-stage');
        const nextStageEl = document.getElementById('next-stage');

        if (!adjacentContainer || !prevStageEl || !nextStageEl) {
            console.error("Adjacent stage elements not found!"); // Log if elements missing
            return;
        }

        // Clear previous content
        prevStageEl.innerHTML = '';
        prevStageEl.style.display = 'none'; // Hide by default
        nextStageEl.innerHTML = '';
        nextStageEl.style.display = 'none'; // Hide by default

        let primaryId = 1;
        let highestScore = -1;
        let sortedStages = Object.entries(scores)
                               .sort(([,a],[,b]) => b-a)
                               .map(([id]) => parseInt(id));

        primaryId = sortedStages[0] || 1;
        console.log(`Determined primary stage ID: ${primaryId}`); // Log determined primary ID

        const primaryStageIndex = stages.findIndex(s => s.id === primaryId);
        console.log(`Primary stage index in stages array: ${primaryStageIndex}`); // Log index

        if (primaryStageIndex === -1) {
            console.error(`Could not find primary stage with ID ${primaryId} in stages data.`); // Log if index not found
            return;
        }

        // Display Previous Stage
        if (primaryStageIndex > 0) {
            const prevStageData = stages[primaryStageIndex - 1];
            console.log("Displaying previous stage:", prevStageData.id); // Log previous stage ID
            prevStageEl.innerHTML = `
                <h5><i class="fas fa-arrow-left"></i> Foundation: Stage ${prevStageData.id} - ${prevStageData.title}</h5>
                <p>${prevStageData.description.substring(0, 120)}...</p>
                <a href="#stages-overview" class="btn btn-sm btn-tertiary">Explore Stage ${prevStageData.id}</a>
            `;
            prevStageEl.style.display = 'block';
        } else {
             console.log("No previous stage to display (Primary stage is index 0)."); // Log if no previous
        }

        // Display Next Stage
        if (primaryStageIndex < stages.length - 1) {
            const nextStageData = stages[primaryStageIndex + 1];
            console.log("Displaying next stage:", nextStageData.id); // Log next stage ID
            nextStageEl.innerHTML = `
                <h5><i class="fas fa-arrow-right"></i> Growth Edge: Stage ${nextStageData.id} - ${nextStageData.title}</h5>
                 <p>${nextStageData.description.substring(0, 120)}...</p>
                <a href="#stages-overview" class="btn btn-sm btn-tertiary">Explore Stage ${nextStageData.id}</a>
            `;
             nextStageEl.style.display = 'block';
        } else {
            console.log("No next stage to display (Primary stage is the last one)."); // Log if no next
        }
    }

    function displayRecommendations(scores, config) {
        const recommendationsContainer = document.getElementById('development-recommendations');
        if (!recommendationsContainer) return;

        // Simple placeholder recommendations - replace with real logic later
        recommendationsContainer.innerHTML = `
            <h4>Pathways for Exploration & Growth</h4>
            <ul>
                <li>Engage in reflective journaling about your experiences.</li>
                <li>Seek out perspectives different from your own through reading or conversation.</li>
                <li>Practice mindfulness or meditation to observe your thought patterns.</li>
            </ul>
        `;
    }
    // --- End Placeholder Result Display Functions ---

    function resetQuiz() {
        hideElement(resultsContainer);
        showElement(assessmentStart);
        currentQuestionIndex = 0;
        userAnswers.fill(null);
        stageScores = {};
        if (resultsChartInstance) {
            resultsChartInstance.destroy();
            resultsChartInstance = null;
        }
    }

    function shareResults() {
        if (navigator.share) {
            navigator.share({
                title: 'My Stages of Mind Results',
                text: 'Check out my consciousness development profile!',
                url: window.location.href
            }).catch(error => {
                console.error('Error sharing:', error);
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const shareUrl = window.location.href;
            const tempInput = document.createElement('input');
            tempInput.value = shareUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Results URL copied to clipboard!');
        }
    }

    function saveResultsAsPdf() {
        if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
            alert('PDF export is not available in this browser.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        html2canvas(resultsContainer).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            doc.save('stages-of-mind-results.pdf');
        });
    }
}

// --- 4. UI Components ---
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
            document.body.classList.remove('loading');
        }, 1000);
    });
}

function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScroll = currentScroll;
    });
}

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navigation = document.querySelector('.navigation');
    if (!navToggle || !navigation) return;

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navigation.classList.toggle('active');
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (!navigation.contains(e.target) && !navToggle.contains(e.target)) {
            navigation.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Apply saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
}

function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    function resizeCanvas() {
        const heroSection = canvas.closest('.hero');
        if (heroSection) {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        } else {
            // Fallback or error handling if .hero is not found
            console.warn('Hero section not found for canvas sizing. Using window dimensions.');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    function getParticleColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        return theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    }

    function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 - 1,
                color: getParticleColor()
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

            // Mouse interaction
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                particle.x -= Math.cos(angle) * 2;
                particle.y -= Math.sin(angle) * 2;
            }
        });

        requestAnimationFrame(drawParticles);
    }

    // Initialize
    resizeCanvas();
    createParticles();
    drawParticles();

    // Event listeners
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Theme change observer
    const observer = new MutationObserver(() => {
        particles.forEach(particle => {
            particle.color = getParticleColor();
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => observer.observe(element));
}

function initStagesVisualization() {
    const visualization = document.querySelector('.stages-visualization');
    if (!visualization) return;

    const circles = visualization.querySelectorAll('.stage-circle');
    circles.forEach((circle, index) => {
        circle.style.animationDelay = `${index * 0.2}s`;
    });
}

function initTimeline() {
    const timelineContainer = document.querySelector('.timeline ul');
    const stagesData = window.stagesData || []; // Assuming stagesData is globally accessible or passed differently

    if (!timelineContainer || stagesData.length === 0) {
        console.warn("Timeline container or stages data not found, skipping timeline initialization.");
        return;
    }

    timelineContainer.innerHTML = ''; // Clear existing items

    stagesData.forEach((stage, index) => {
        const li = document.createElement('li');
        li.className = `stage-${stage.id}`; // Add stage-specific class if needed

        // Base content structure
        let contentHTML = `
            <div class="content hidden">
                <span class="badge">${stage.title}</span>
                <div class="timeline-age-info">Avg. Age: ${stage.averageAgeRange || 'N/A'}</div> <!-- Added Age Info -->
                <h3>${stage.id}. ${stage.title}</h3>
                <p>${stage.description}</p>
        `;

        // Add quote if available
        if (stage.quote && stage.quoteAuthor) {
            contentHTML += `
                <div class="quote">
                    <i class="fas fa-quote-left"></i>
                    <p>${stage.quote}</p>
                    <span class="quote-author">— ${stage.quoteAuthor}</span>
                    ${stage.quoteContext ? `<span class="quote-context">(${stage.quoteContext})</span>` : ''}
                </div>
            `;
        }

        // Add details if available
        if (stage.examples || stage.pathways) {
            contentHTML += '<div class="stage-details">';
            if (stage.examples) {
                contentHTML += `
                    <div class="detail-item">
                        <h4><i class="fas fa-binoculars"></i> Examples</h4>
                        <p>${stage.examples}</p>
                    </div>
                `;
            }
            if (stage.pathways) {
                 contentHTML += `
                    <div class="detail-item">
                        <h4><i class="fas fa-route"></i> Pathways</h4>
                        <p>${stage.pathways}</p>
                    </div>
                `;
            }
             contentHTML += '</div>'; // Close stage-details
        }

        contentHTML += '</div>'; // Close content div
        li.innerHTML = contentHTML;
        timelineContainer.appendChild(li);
    });

    // Re-initialize intersection observer for the new elements
    const hiddenElements = timelineContainer.querySelectorAll('.content.hidden');
    if (!hiddenElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                // observer.unobserve(entry.target); // Optional: Keep observing if needed
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    hiddenElements.forEach(el => observer.observe(el));
}

function initScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (!scrollButton) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initSmoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js';
        document.head.appendChild(script);
    }
}

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    if (!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// --- 5. Stage Navigator ---
function initStageNavigator(stagesData) {
    const navigator = document.querySelector('.stage-navigator');
    if (!navigator) {
        console.warn('Stage navigator element not found, skipping initialization.');
        return;
    }

    navigator.innerHTML = ''; // Clear existing content

    // Create stage cards with full details
    stagesData.forEach((stage, index) => {
        const card = document.createElement('div');
        card.className = 'stage-card reveal fade-in-up'; // Add reveal classes
        card.style.setProperty('--delay', `${index * 100}ms`); // Stagger animation
        card.dataset.stage = stage.id;

        card.innerHTML = `
            <div class="stage-card-header stage-color-${stage.id}">
                <span class="stage-number">Stage ${stage.id}</span>
                <h3 class="stage-title">${stage.title}</h3>
            </div>
            <div class="stage-card-body">
                <p class="stage-description">${stage.description}</p>
                <div class="stage-quote">
                    <i class="fas fa-quote-left"></i>
                    <blockquote>${stage.quote}</blockquote>
                    <cite>— ${stage.quoteAuthor}</cite>
                </div>
                <div class="stage-details">
                    <div class="detail-item">
                        <h4><i class="fas fa-binoculars"></i> Examples</h4>
                        <p>${stage.examples}</p>
                    </div>
                    <div class="detail-item">
                        <h4><i class="fas fa-route"></i> Pathways</h4>
                        <p>${stage.pathways}</p>
                    </div>
                </div>
            </div>
        `;

        navigator.appendChild(card);
    });

    // Re-run scroll reveal initialization for the new cards
    initScrollReveal();
}

// Timeline animation (Refactored with IntersectionObserver)
function initTimeline() {
    const hiddenElements = document.querySelectorAll('.timeline .content.hidden');

    if (!hiddenElements.length) return; // No elements to observe

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport
            if (entry.isIntersecting) {
                // Remove the 'hidden' class to trigger the CSS transition
                entry.target.classList.remove('hidden');
                // Optional: Stop observing the element once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing each hidden element
    hiddenElements.forEach(el => observer.observe(el));
}

// Horizontal slider for stages

// Biblical View Toggle Functionality
function initBiblicalViewToggle() {
    const biblicalViewToggle = document.querySelector('.biblical-view-toggle');
    if (!biblicalViewToggle) return;
    
    // Check for saved preference
    const savedView = localStorage.getItem('biblicalView') || 'normal';
    document.documentElement.setAttribute('data-view', savedView);
    
    if (savedView === 'biblical') {
        biblicalViewToggle.classList.add('active');
        activateBiblicalView();
    }
    
    biblicalViewToggle.addEventListener('click', () => {
        const currentView = document.documentElement.getAttribute('data-view');
        const newView = currentView === 'biblical' ? 'normal' : 'biblical';
        
        document.documentElement.setAttribute('data-view', newView);
        localStorage.setItem('biblicalView', newView);
        
        if (newView === 'biblical') {
            biblicalViewToggle.classList.add('active');
            activateBiblicalView();
        } else {
            biblicalViewToggle.classList.remove('active');
            deactivateBiblicalView();
        }
    });
}

// Capture original content when page loads
function captureOriginalContent() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroQuote = document.querySelector('.hero-quote p');
    const heroQuoteAuthor = document.querySelector('.hero-quote-author');
    const introContent = document.querySelector('.intro-content p:first-child');
    const timelineTitle = document.getElementById('timeline-main-title');
    const timelineDescription = document.querySelector('.timeline__title p');
    
    if (heroTitle) originalContent.heroTitle = heroTitle.innerHTML;
    if (heroSubtitle) originalContent.heroSubtitle = heroSubtitle.innerHTML;
    if (heroQuote) originalContent.heroQuote = heroQuote.innerHTML;
    if (heroQuoteAuthor) originalContent.heroQuoteAuthor = heroQuoteAuthor.textContent;
    if (introContent) originalContent.introContent = introContent.innerHTML;
    if (timelineTitle) originalContent.timelineTitle = timelineTitle.innerHTML;
    if (timelineDescription) originalContent.timelineDescription = timelineDescription.innerHTML;
    
    // Capture timeline stage content
    const stageElements = document.querySelectorAll('.timeline ul li .content');
    originalContent.stageContent = Array.from(stageElements).map(el => el.innerHTML);
}

function activateBiblicalView() {
    // Update content with biblical parallels
    updateHeroSectionBiblical();
    updateIntroductionBiblical();
    updateTimelineBiblical();
    updateAssessmentBiblical();
}

function deactivateBiblicalView() {
    // Restore original content
    restoreOriginalContent();
}

// Update sections with biblical content
function updateHeroSectionBiblical() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroQuote = document.querySelector('.hero-quote p');
    const heroQuoteAuthor = document.querySelector('.hero-quote-author');
    
    if (heroTitle) heroTitle.innerHTML = biblicalContent.heroTitle;
    if (heroSubtitle) heroSubtitle.innerHTML = biblicalContent.heroSubtitle;
    if (heroQuote) heroQuote.innerHTML = biblicalContent.heroQuote;
    if (heroQuoteAuthor) heroQuoteAuthor.textContent = biblicalContent.heroQuoteAuthor;
}

function updateIntroductionBiblical() {
    const introContent = document.querySelector('.intro-content p:first-child');
    if (introContent) introContent.innerHTML = biblicalContent.introContent;
}

function updateTimelineBiblical() {
    const timelineTitle = document.getElementById('timeline-main-title');
    const timelineDescription = document.querySelector('.timeline__title p');
    
    if (timelineTitle) timelineTitle.innerHTML = biblicalContent.timelineTitle;
    if (timelineDescription) timelineDescription.innerHTML = biblicalContent.timelineDescription;
    
    // Update each stage in the timeline
    const stageElements = document.querySelectorAll('.timeline ul li .content');
    
    stageElements.forEach((element, index) => {
        if (index < biblicalStages.length) {
            const stage = biblicalStages[index];
            
            const badge = element.querySelector('.badge');
            const title = element.querySelector('h3');
            const description = element.querySelector('p'); // First paragraph is description
            const contentParagraph = element.querySelector('.quote')?.previousElementSibling; // Get the paragraph *before* the quote
            const quote = element.querySelector('.quote p');
            const author = element.querySelector('.quote-author');
            
            // Only update if elements exist
            if (badge) badge.textContent = stage.badge;
            if (title) title.textContent = stage.title;
            if (description) description.textContent = stage.description;
            
            // Update the paragraph between description and quote if it exists
            if (contentParagraph && contentParagraph.tagName === 'P') {
                contentParagraph.textContent = stage.content;
            } else if (description) {
                // If no paragraph exists between description and quote, insert one
                const newParagraph = document.createElement('p');
                newParagraph.textContent = stage.content;
                // Insert after the description but before the quote div
                description.parentNode.insertBefore(newParagraph, element.querySelector('.quote'));
            }
            
            if (quote) quote.textContent = stage.quote;
            if (author) author.textContent = `— ${stage.author}`;
        }
    });
}

function updateAssessmentBiblical() {
    const assessmentTitle = document.querySelector('.assessment .section-title');
    const assessmentDescription = document.querySelector('.assessment .section-description');
    
    if (assessmentTitle) {
        assessmentTitle.innerHTML = 'Where Are You in the Creation Story?';
    }
    
    if (assessmentDescription) {
        assessmentDescription.innerHTML = 'Reflect on which day of creation resonates most with your current state of consciousness and perspective.';
    }
}

function restoreOriginalContent() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroQuote = document.querySelector('.hero-quote p');
    const heroQuoteAuthor = document.querySelector('.hero-quote-author');
    const introContent = document.querySelector('.intro-content p:first-child');
    const timelineTitle = document.getElementById('timeline-main-title');
    const timelineDescription = document.querySelector('.timeline__title p');
    
    if (heroTitle) heroTitle.innerHTML = originalContent.heroTitle;
    if (heroSubtitle) heroSubtitle.innerHTML = originalContent.heroSubtitle;
    if (heroQuote) heroQuote.innerHTML = originalContent.heroQuote;
    if (heroQuoteAuthor) heroQuoteAuthor.textContent = originalContent.heroQuoteAuthor;
    if (introContent) introContent.innerHTML = originalContent.introContent;
    if (timelineTitle) timelineTitle.innerHTML = originalContent.timelineTitle;
    if (timelineDescription) timelineDescription.innerHTML = originalContent.timelineDescription;
    
    // Restore timeline stages
    const stageElements = document.querySelectorAll('.timeline ul li .content');
    stageElements.forEach((element, index) => {
        if (index < originalContent.stageContent.length) {
            element.innerHTML = originalContent.stageContent[index];
        }
    });
    
    // Restore assessment section
    const assessmentTitle = document.querySelector('.assessment .section-title');
    const assessmentDescription = document.querySelector('.assessment .section-description');
    
    if (assessmentTitle) {
        assessmentTitle.innerHTML = 'Where Are You on the Journey?';
    }
    
    if (assessmentDescription) {
        assessmentDescription.innerHTML = 'This isn\'t a definitive label, but a tool for self-reflection. Explore perspectives that resonate most strongly with your current understanding of yourself and the world. Be honest – it\'s your journey.';
    }
}