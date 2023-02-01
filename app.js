const fs = require('fs');
const dir = "./tsfilestoragedata/"

const set = (key,value) =>{
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    let path = dir+key;
   fs.writeFileSync(path, value);
}

const get = (key) => {
    let file = dir+key;
    if(fs.existsSync(file))
    {
        return fs.readFileSync(file, 'utf8');
    }
    else
    {
        return null;
    }
};

const clear = (key) => {
    let file = dir+key;
    if(fs.existsSync(file))
    {
        fs.unlinkSync(file);
    }
}

const clearAll = () =>{
    if (fs.existsSync(dir)){
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

module.exports = {
    set : set,
    get : get,
    clear : clear, 
    clearAll : clearAll
}

