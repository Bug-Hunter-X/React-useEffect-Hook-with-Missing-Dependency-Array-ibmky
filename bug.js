```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!'); // This will be logged only once
  }, []);

  useEffect(() => {
    // This effect runs every time the count changes
    console.log('Count changed:', count); 
    return () => {
      console.log('Unmounting!'); // Cleanup function
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```