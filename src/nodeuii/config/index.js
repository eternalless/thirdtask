import _ from 'lodash'

var config;
if(process.env.NODE_ENV=='development'){
    const localConfig={
        port:8081
    };
    config=_.extend(config,localConfig)
}

if(process.env.NODE_ENV=='production'){
    const proConfig={
        port:8081
    };
    config=_.extend(config,proConfig)
}

export default config;