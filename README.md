# React useEffect Hook with Missing Dependency Array

This repository demonstrates a common error in React's `useEffect` hook: forgetting to specify a dependency array.  This can lead to unexpected behavior, particularly infinite loops or performance problems.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Problem

In the `bug.js` example, the second `useEffect` hook lacks a dependency array. This means it runs after every render, not just when the `count` state variable changes, potentially causing an infinite loop or unnecessary re-renders. The `console.log` statements clearly show this effect.

## Solution

The `bugSolution.js` file shows the corrected code. By adding `[count]` as the dependency array, the `useEffect` hook now runs only when the value of `count` changes, fixing the issue. 