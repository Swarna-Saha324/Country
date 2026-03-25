# 🌍 Country Explorer (React Project)

A dynamic React application that allows users to explore countries and mark them as **Visited**. This project focuses on mastering **state management**, **component communication**, and **real-time UI updates**.

---

## 🚀 Features

- 🌐 Display country details (flag, name, capital, region, population, area)
- ✅ Mark countries as **Visited / Not Visited**
- 📊 Maintain a global **Visited Countries list**
- 🔁 Toggle visited state with real-time updates
- 🔍 Real-time search filtering (optional feature)
- 🎨 Conditional styling based on state

---

## 🧠 Concepts Used

### 🔹 State Lifting
Moved state from child components to the parent to manage shared data.

### 🔹 Props Drilling
Passed functions as props (`handleVisitedCountries`) to enable child → parent communication.

### 🔹 Immutable State Updates
Used spread operator to update state safely:
```js
setVisited([...visited, country]);<img width="1898" height="887" alt="image" src="https://github.com/user-attachments/assets/9ae3dfa3-3903-42c5-bec1-fa335fc684e8" />




