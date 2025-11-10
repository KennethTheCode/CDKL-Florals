# CDKL-Florals

Title of the AI System / Application

CDKL Florals: FLORALBOT

Problem Description
Many customers struggle to choose the right flowers for specific events, such as birthdays, weddings, anniversaries, or condolences. Without prior knowledge of flower types, colors, or arrangements, users may feel overwhelmed or make unsuitable purchases. This can reduce customer satisfaction and affect sales for flower shops.

Proposed Solution Overview
FloraBot is an AI-powered chatbot embedded on a flower shop’s website. Users can describe their event or scenario in natural language, and the chatbot recommends suitable flowers or bouquets based on a flower dataset containing types, colors, prices, availability, and event suitability. The system also allows follow-up questions to refine recommendations and can link directly to purchase options.

PEAS Model

Performance Measure (P):
Accuracy of flower recommendations for the user’s described event.
Customer satisfaction and engagement.
Response speed and clarity.
Relevance of suggestions based on available stock and seasonal flowers.
Increased conversion rate (purchases made after using the chatbot).
Environment (E):
Virtual environment: the website where users interact with the chatbot.
Data-driven: flower dataset including types, colors, prices, availability, and event suitability.
User interactions, including typed event descriptions and preferences.
Actuators (A):
Display recommended flowers and bouquets to the user.
Provide links to add flowers to the shopping cart or make a purchase.
Ask follow-up questions to clarify user needs.
Log interaction data for future recommendations.




Sensors (S):
User text input describing events, preferences, or constraints.
User clicks and selections on suggested flowers.
Real-time inventory data from the flower dataset.
Past user purchase history (if available).

AI Concepts Used
Intelligent Agent Type:
Goal-based agent: 
The chatbot aims to select the best flower recommendation to satisfy the user’s described scenario.

Search or Optimization Strategy:
Rule-based filtering and similarity search: The chatbot filters the flower dataset based on keywords and event type, then ranks flowers based on suitability and availability.

Learning or Decision Component:
Optional machine learning component: If implemented, it could use supervised learning to predict the most suitable flowers from historical purchase data and user feedback.
