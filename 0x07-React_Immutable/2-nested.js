export default function accessImmutableObject(object, array) {
    let value = object;
    
    for (let i = 0; i < array.length; i++) {
      const key = array[i];
      
      if (value === undefined || typeof value !== 'object' || value === null) {
        return undefined;
      }
      
      value = value[key];
    }
    
    return value;
  }
