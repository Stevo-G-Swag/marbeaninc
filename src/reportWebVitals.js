const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error('Error loading web-vitals:', error);
      });
  } else {
    console.warn('onPerfEntry is not a function');
  }
};

export default reportWebVitals;