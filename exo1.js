
 //const _objname = objname;

   
   /* Object.defineProperty(obj, objname, {
       
        get : () => objvalue,
        
        set : (value) => obj['_'+objname] = value
    });
    Object.defineProperty(obj, '_'+objname, {
        value: null,
        writable: true
        
    });*/



const make_object = (objname,objvalue) => {
    const obj = {};
   
    Object.defineProperty(obj, '_'+objname, {
         value : objvalue,
         writable : true,
        
    });
    Object.defineProperty(obj, objname, {
        get : () => obj['_'+objname],
        set : (value) => obj['_'+objname] = value
    });
    return obj;
}


const obj = make_object('test', 'ça passe');

console.log(obj._test);
