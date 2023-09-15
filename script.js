const questions = {
    perception: [
        "What is your first impression of me?",
        "How would you describe my energy or vibe?",
        "What do you think is my most noticeable feature?",
        "What kind of music or movie do you think I like?",
        "What is my favorite color, based on your perception?",
        "Do you think I'm an introvert or extrovert?",
        "If you had to guess, what's my favorite type of food?",
        "What's the first word that comes to mind when you think of me?",
        "How do you think I spend my weekends?",
        "What's something you think I'm passionate about?",
        "What do you think my favorite book might be?",
        "If I could travel anywhere, where do you think I would go first?",
        "What kind of job or career do you imagine I have?",
        "What's your guess about my zodiac sign?",
        "If we met in a different setting, how would you picture it?",
        "What do you think is my hidden talent or skill?",
        "If I had a superpower, what do you think it would be?",
        "What emoji do you think represents my personality?",
        "Can you guess my favorite season of the year?",
        "What do you think I value most in a friendship?",
        "What's my go-to comfort food when I'm feeling down?",
        "If I could have dinner with any historical figure, who do you think I'd choose?",
        "What's a hobby you imagine I enjoy in my free time?",
        "Do you think I prefer the city or the countryside?",
        "How would you describe my fashion style?",
        "What animal do you associate with my personality?",
        "What do you think I'm most proud of in my life?",
        "If I were a character in a movie, what role do you see me playing?",
        "What's a word or phrase you think I use often?",
        "How do you think I handle stress or difficult situations?",
        "What's a quality you believe I admire in others?",
        "What would you guess is my favorite type of art?",
        "If I were to write a book, what genre do you think it would be?",
        "What's a destination on my travel bucket list?",
        "How do you think I approach challenges in my life?",
        "What do you think I value most in a romantic partner?",
        "What's a talent or skill you think I wish I had?",
        "What's my preferred mode of transportation (car, bike, etc.)?",
        "How would you describe my sense of humor?",
        "What kind of music do you think I can't stand?",
        "What's a movie genre I probably don't enjoy?",
        "If I could have any pet, what animal do you think I'd choose?",
        "What's my favorite type of weather?",
        "How do you think I approach making important decisions?",
        "What do you think I like to do in my free time to relax?",
        "Can you recall a moment when you surprised yourself with your own strength?"
    ],
    connection: [
        "What's something we have in common that surprises you?",
        "Can you share a memory when you felt a strong connection with someone?",
        "What values do you think are important to me?",
        "How do you think we can support and uplift each other?",
        "What's a shared goal or dream we could work on together?",
        "If we were on a road trip, what kind of music or game would we enjoy together?",
        "What's a challenge you think we could overcome as a team?",
        "Can you recall a moment when you felt truly understood by someone?",
        "What's a small gesture that can improve our connection?",
        "What's one thing about me that you'd like to know more about?",
        "How do you think our personalities complement each other?",
        "What's a shared interest or hobby we could explore together?",
        "Can you describe a situation where we could provide mutual support?",
        "What's a topic or issue you think we could have a meaningful conversation about?",
        "What's a fun project or adventure we could embark on together?",
        "If we were to collaborate on something, what would it be?",
        "How do you envision us celebrating a significant achievement together?",
        "What's a quality you admire in me, and vice versa?",
        "Can you imagine a scenario where we travel together? Where would we go?",
        "What's something you think we both find inspiring?",
        "How can we help each other grow and achieve our goals?",
        "What's a lesson you think we could learn from each other?",
        "If we were to start a club or group, what would it be centered around?",
        "How do you think we can make our bond even stronger?",
        "What's a shared adventure you'd like us to take on together?",
        "How can we celebrate our milestones and achievements together?",
        "What's a quality in me that you believe adds value to our connection?",
        "How do you think we can inspire each other to pursue our passions?",
        "What's a creative endeavor we could undertake together?",
        "What's something you think we can teach each other?",
        "How do you envision our friendship impacting our individual lives?",
        "What's a memory from our past that you cherish?",
        "What's something we've accomplished together that makes you proud?",
        "What's a moment when you felt we were a great team?",
        "What do you appreciate most about our friendship?",
        "What's a shared interest or hobby that brings us closer?",
        "How do you think our connection has evolved over time?",
        "What's a challenge we faced together and overcame successfully?",
        "What's a tradition or ritual we share that you enjoy?",
        "What's a strength in me that complements a strength in you?",
        "How do you think our friendship has influenced your life choices?",
        "What's a shared goal or dream that excites you the most?",
        "What's a shared value that forms the foundation of our connection?",
        "How do you envision our bond growing in the future?",
        "What's something you'd like to explore or learn together?",
        "What's a quality in you that I admire and respect?",
        "How do you think our connection enhances our individual lives?",
        "What's a shared experience that strengthened our friendship?",
    ],
    reflection: [
        "What's a mistake from your past that you've learned the most from?",
        "What's a moment in your life that you wish you could relive?",
        "Can you describe a person who had a profound impact on your life?",
        "What's a fear you've overcome, and how did you do it?",
        "What's a personal mantra or quote that resonates with you?",
        "If you could change one decision from your past, what would it be?",
        "What's a dream or aspiration that you haven't shared with many people?",
        "How do you see your future self in 10 years?",
        "What's something you're grateful for, even during tough times?",
        "Can you recall a moment when you surprised yourself with your own strength?",
        "What's a memory from your childhood that still brings you joy?",
        "How has adversity shaped your character?",
        "What's a significant life lesson you've learned?",
        "What's a challenge you're currently facing, and how are you tackling it?",
        "What's a role model or mentor who has influenced your path in life?",
        "How do you define success, and how close are you to achieving it?",
        "What's a book or movie that deeply impacted your perspective?",
        "What's a value or belief you hold dear, and why is it important to you?",
        "How do you handle moments of self-doubt or insecurity?",
        "What's a goal you've set for yourself, and what's your plan to achieve it?",
        "What's a passion or hobby that brings you joy and fulfillment?",
        "How do you practice self-care and maintain your mental well-being?",
        "What's a challenge you've faced that made you more resilient?",
        "What's a lesson you've learned from a difficult relationship?",
        "What's a small act of kindness that left a big impact on you?",
        "How do you navigate change and uncertainty in your life?",
        "What's a moment when you felt truly alive and in the present?",
        "What's a dream you've had since childhood that you're still pursuing?",
        "How do you prioritize self-growth and personal development?",
        "What's a place or environment where you feel most at peace?",
        "What's a personal achievement that you're proud of?",
        "What's a significant change in your life that led to personal growth?",
        "What's a value you want to instill in future generations?",
        "How do you find meaning and purpose in your daily life?",
        "What's a hobby or interest that you'd like to explore further?",
        "What's a piece of advice you'd give to your younger self?",
        "What's a source of inspiration that fuels your creativity?",
        "What's a challenge you'd like to overcome in the next year?",
        "What's a relationship in your life that you want to nurture and strengthen?",
        "What's a belief or perspective you've evolved over the years?",
        "How do you want to be remembered by those who know you?",
        "What's a legacy you hope to leave behind in the world?",
        "What's a lesson from your past that you want to pass on to others?",
        "What's a dream you have for your community or society at large?",
        "How do you plan to continue your journey of self-discovery?",
        "What's an aspect of your identity that you're proud of?",
        "What's a personal project or goal that excites you?",
    ],
};

const categorySelect = document.getElementById('category-select');
const questionText = document.getElementById('question-text');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentCategory = categorySelect.value;
let currentQuestionIndex = 0;

function loadQuestion() {
    questionText.textContent = questions[currentCategory][currentQuestionIndex];
}

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    currentQuestionIndex = 0;
    loadQuestion();
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions[currentCategory].length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        prevButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        nextButton.disabled = false;
    } else {
        prevButton.disabled = true;
    }
});

// Initialize with the first question
loadQuestion();
