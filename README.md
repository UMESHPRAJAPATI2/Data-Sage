# Play with Data

Play with Data is a mobile-first Progressive Web App that gamifies data science education through interactive missions guided by SAGE, an AI mentor with simulated Big Four expertise. The platform targets freshers and intermediate learners (18-35) seeking to build practical data science, AI automation, and industry-style problem-solving skills.

## Essential Core Features

### Core Learning
- **SAGE AI Mentor System**: Personalized coaching and feedback.
- **Escape Room Missions**: Multi-stage SQL and Python data challenges.
- **Interactive Debugging Rooms**: Real-time debugging environments with instant feedback.
- **Data Cleaning Simulations**: Practice with messy datasets and cleaning techniques.
- **Model Selection Challenges**: Compare and optimize machine learning models.
- **Power BI Dashboard Fixing**: Repair and enhance dashboards.

### Gamification & Engagement
- **Progressive Skill Mapping**: Visual skill trees for progression.
- **Badge & Achievement System**: Collectible rewards for milestones.
- **Streak Tracking**: Daily streaks with motivation systems.
- **Leaderboards**: Global and friend-based rankings.
- **Puzzle Lab**: Replayable mini-challenges.
- **Habit Formation System**: Push notifications, daily goals, and rewards.

### Assessment & Practice
- **Interview Battle Mode**: Simulated Big Four-style interviews.
- **Adaptive Flashcards**: AI-powered spaced repetition.
- **Skills Assessment**: Comprehensive testing to identify gaps.
- **Practice Arena**: Sandbox for free-form experimentation.

### Industry Integration
- **Market Pulse**: Real-time insights, trends, and job market analysis.
- **Career Pathways**: Guided learning tracks for career goals.
- **Portfolio Builder**: Showcase completed projects and achievements.

### Technical Features
- **Offline Capability**: PWA functionality for offline learning.
- **Responsive Design**: Mobile-first with tablet and desktop support.
- **Micro-animations**: Smooth transitions and feedback animations.
- **Haptic Feedback**: Touch feedback for interactions.
- **Real-time Collaboration**: Multiplayer challenges and peer learning.

## Tech Stack

### Front-End
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **PWA**: Service Workers and Web App Manifest
- **Animation**: Framer Motion
- **Code Editor**: Monaco Editor

### Back-End
- **Database & Authentication**: Supabase (with Realtime and Storage)
- **Edge Functions**: Supabase Edge Functions

### AI Integration
- **Primary AI**: OpenAI GPT-4o for SAGE interactions and code guidance
- **Content Generation**: AI-powered challenge creation and adaptive content

### APIs & Integrations
- **Payment**: Stripe
- **Analytics**: Mixpanel or Amplitude
- **Push Notifications**: Web Push API
- **Social Auth**: Google, LinkedIn, GitHub OAuth
- **Industry Data**: Job boards and tech trend APIs for Market Pulse

### Performance & Monitoring
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics 4
- **Performance**: Lighthouse CI

## Design Preferences

- **Interface**: Modern, minimalist dark theme with neon accents.
- **Color Palette**: Deep Space Blue backgrounds, Cyber Teal interactive elements, Electric Purple accents, Neon Green success, Bright Orange warnings, Light Gray/White text.
- **Typography**: Inter (headings), Source Sans Pro (body), JetBrains Mono (code).
- **Mobile-First**: Thumb-friendly navigation, gesture support, loading states, and WCAG 2.1 AA accessibility.

## Screens and Navigation

- **Authentication**: Login, Register, Forgot Password.
- **Onboarding**: Welcome, Skills Assessment, Profile Setup.
- **Main**: Dashboard, Challenges (+ individual pages), Puzzle Lab, Market Pulse, Profile.
- **Secondary**: Escape Rooms (+ sessions), Interview Mode (+ sessions), Progress Analytics, Settings, Help Center.
- **Offline**: Offline mode with cached content and sync status.
- **Navigation**: Bottom tab bar (Home, Challenges, Practice, Insights, Profile) plus hamburger menu for secondary features; swipe and gesture controls for navigation and refresh.

## User Journey

1. **Discovery & Install**: Install PWA, meet SAGE via splash intro.
2. **Registration & Onboarding**: Create profile, complete adaptive assessment, set goals, receive personalized learning path and welcome rewards.
3. **First Session**: Land on dashboard, guided tutorial, complete beginner challenge, unlock next tier, start streak.
4. **Daily Learning**: Review recommendations, pick challenge types, use hints/feedback, maintain streak, monitor skill map.
5. **Feature Exploration**: Unlock escape rooms, market insights, interview mode, and custom puzzles as skills grow.
6. **Long-term Engagement**: Mentor others, join competitions, analyze skill gaps, apply achievements to career goals, and participate in community learning.

## App Menu and Navigation Hierarchy

```
Main App
├── Authentication Flow
│   ├── Login
│   ├── Register
│   └── Password Recovery
├── Onboarding
│   ├── Welcome
│   ├── Assessment
│   └── Setup
├── Primary Features (Bottom Nav)
│   ├── Dashboard (Home)
│   ├── Challenges
│   │   └── Individual Challenge Pages
│   ├── Puzzle Lab
│   │   └── Custom Puzzles
│   ├── Market Pulse
│   └── Profile
└── Secondary Features (Hamburger Menu)
    ├── Escape Rooms
    │   └── Individual Room Sessions
    ├── Interview Mode
    │   └── Mock Interview Sessions
    ├── Progress Analytics
    ├── Settings
    └── Help Center
```

## Gesture Navigation

- **Swipe Right**: Back navigation
- **Swipe Left**: Forward navigation in sequential content
- **Pull Down**: Refresh current screen data
- **Long Press**: Context menus and quick actions
- **Pinch**: Zoom in code editors and visual content

## Critical Decision Points

- **Day 3 Retention**: Complete a meaningful challenge and see progress.
- **Week 2 Habit Formation**: Establish daily routine and streak.
- **Month 1 Value**: Demonstrate skill improvement and unlock advanced features.
- **Month 3 Community**: Engage in collaborative features.
- **Month 6 Career Impact**: Apply skills professionally and leverage platform achievements.

---

## Prototype Quickstart

A lightweight, dependency-free PWA shell is included to visualize the Play with Data experience:

1. Run `./start.sh` (or `PORT=1234 ./start.sh` if you prefer a different port). This uses Python's built-in HTTP server.
2. Open `http://localhost:4173` (or your chosen port) in a modern browser.
3. Toggle between tabs in the bottom navigation to explore the dashboard, challenge hub, puzzle lab, market pulse, and profile views.

Offline caching is handled by `sw.js`, and PWA metadata lives in `manifest.webmanifest`. Lightweight SVG icons (so diffs stay readable in git) are available under `icons/`.
