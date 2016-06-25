const two2Array = [
  [
    {
      stuff1: ['cakes', 'trees']
    }
  ],
  [
    {
      stuff2: ['bread', 'cookies']
    }
  ],
  [
    {
      stuff3: ['gummies', 'juice']
    }
  ],
  [
    {
      stuff4: ['snacks', 'milk']
    }
  ]
];

const flatten = two2Array.map(
  function(nested) { 
    return nested.reduce( (acc) => acc); 
  }, [])
  .reduce( (acc, currentValue) => {   
    if (!Array.isArray(acc)) {     
      return acc[Object.keys(acc)];  
    } else {
      return acc.concat(currentValue[Object.keys(currentValue)]);
    }
  }, []);
  console.log(flatten);