const OtherComponent = React.lazy(
  () => import('./OtherComponent.js')
);

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
        </section>
      </Suspense>
    </div>
  );
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);