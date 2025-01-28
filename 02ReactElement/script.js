// const h2= React.createElement('h2',{className:"subheading"},'Hello React')

const h2 = {
    $$typeof: Symbol.for('react.element'), // React's internal identifier for an element
    key: null,
    props: {
      className: 'subheading',
      children: 'Hello React',
    },
    ref: null,
    type: 'h2',

  };
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2)


// const h2 = document.createElement('h2');
// document.querySelector('#root').append(h2);
// h2.innerText="Hello JS"