export const isEmptyObject = (obj: { constructor?: any; }) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  };

export  const getInitialClickedData = (clikedData: any) => {
    const storedData = localStorage.getItem('clickedDataLocal');
    return storedData ? JSON.parse(storedData) : clikedData;
  };//