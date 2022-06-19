module . exports  =  ( { env } )  =>  ( {

  upload : {
    config : {
      provider : 'cloudinary' ,
      providerOptions : {
        cloud_name : env ( 'deaidwozu' ) ,
        api_key : env ( '311271587814164' ) ,
        api_secret : env ( 'o33A9sESVG2wqyo8qvs0CngFXWc' ) ,
      } ,
      actionOptions : {
        upload : { } ,
        uploadStream : { } ,
        delete : { } ,
      } ,
    } ,
  } ,

} ) ;
