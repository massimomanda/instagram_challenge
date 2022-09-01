export interface comments {
    postId: number
    id: number
    body: string
    email: string
    name: string
    }

export interface posts{
    
    userId: number,
    id: number,
    title: string,
    body: string
      
}

export interface users{  
        
    id: number,
    name: string,
    username: string,
    email: string,
    address: address
    phone: string,
    website: string,
    company: company
              
}

interface address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}
interface geo{
    
        lat: number,
        lng: number
    
}

interface company {
    name: string,
    catchPhrase: string,
    bs: string
}