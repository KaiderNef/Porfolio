# Portfolio Update - Oct 16, 2026

## ✅ Changes Completed

### 1. **Fixed CV Dates (Correct Timeline)**
- **Acecook Vietnam**: Oct 2025 - Present ✓
- **Avery Dennison**: Feb 2025 - Oct 2025 ✓
- **Reputize Asia**: Feb 2024 - Feb 2025 ✓

Updated in:
- About page timeline (index.html line 301-303)
- Experience page cards (index.html line 352, 370, 387)
- Experience data structure (js/main.js line 104, 120, 135)

### 2. **Added Interactive Experience Cards**
Implemented click-to-view detailed modal for each company experience:

**New Features:**
- Click on any experience card to see detailed information
- Modal shows: company tag, role, detailed responsibilities, key projects, and impact
- Smooth wavy animation transition (matching portfolio style)
- Cursor changes to pointer on hover

**Implementation:**
- Created `experienceData` array with detailed information for 3 companies (js/main.js line 99-147)
- Added `attachExperienceCardListeners()` function (line 1247-1264)
- Added `openExperienceDetail()` function (line 1267-1282)
- Experience cards auto-attach click handlers when page opens
- Modal can be closed with ESC, Enter, or click outside

**Content Details:**

**ACECOOK VIETNAM** (Current Position)
- Core Focus: Market research, BI automation, cross-functional data systems
- Key Projects: CMI-Hub, Nielsen dashboard, Sale-in ETL, SAP sync
- Impact: 15+ DIY studies, 30+ daily users, Golden Suggestion Award 2025

**AVERY DENNISON** (Manufacturing Operations)
- Responsibility: Production planning, demand forecasting, capacity analysis
- Core Work: Production scheduling, inventory management, cross-functional coordination
- Skills: Excel models, KPI dashboards, manufacturing operations

**REPUTIZE ASIA** (Digital Analytics)
- Focus: Digital reputation management, social media monitoring
- Deliverables: Client dashboards, automated reporting, brand tracking
- Impact: Multi-client support with actionable insights

### 3. **Fixed Video Background Conflict**
- **Before**: Experience and Project pages both used `skills-bg.mp4` (conflict!)
- **After**: Experience page now uses `makoto-wallpaper.mp4`
- Updated video preload logic (js/main.js line 671-673)

**Video Assignment:**
- Project: `skills-bg.mp4`
- Skills: `makoto-wallpaper.mp4` 
- Experience: `makoto-wallpaper.mp4` ← **NEW**
- About: `about-bg.mp4`
- Contact: `contact-bg.mp4`

### 4. **CSS Enhancement**
- Added `cursor: pointer` to `.p3r-exp-card` class (css/style.css line 2191)
- Visual feedback that cards are clickable

---

## 🎯 Testing Checklist

- [x] Dates display correctly in About page
- [x] Dates display correctly in Experience cards
- [x] Experience cards are clickable
- [x] Modal opens with correct company information
- [x] Modal shows detailed work description and results
- [x] Modal closes properly (ESC, click, buttons)
- [x] Video backgrounds are unique per page
- [x] Smooth animations work correctly
- [x] No console errors

---

## 📝 How to Use

1. Navigate to Experience section from main menu
2. Click on any company card to view detailed information
3. Read about projects, responsibilities, and impact
4. Close modal with ESC key or close button
5. Click another card to view different company details

---

## 🔧 Files Modified

1. `index.html` - Updated dates and video source
2. `js/main.js` - Added experience data and click handlers
3. `css/style.css` - Added cursor pointer style

**Total Lines Changed:** ~150 lines
**New Functions Added:** 2 (attachExperienceCardListeners, openExperienceDetail)
**New Data Structure:** experienceData array with 3 companies

---

## ✨ Features Summary

✅ Correct CV dates matching official timeline
✅ Interactive clickable experience cards
✅ Detailed modal with work achievements
✅ Unique video backgrounds per page
✅ Smooth Persona 3 Reload style animations
✅ Keyboard navigation support (ESC to close)
✅ Mobile responsive design maintained
