

export interface Products{
    _id: string ,
    title: string,
    _type: "Products",
    image? : {
        assets:{
            _ref: string,
            _type: "image",


        }
        
    };
    price: number,
    description: "text",
    category: "categories",
    inventory: number ,
    tags: number,
    slug: {

        _type: "slug",
        current: string,

    },

    


    }


