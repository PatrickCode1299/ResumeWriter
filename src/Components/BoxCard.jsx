const BoxCard= ({content}) =>{
   return (
    <div className="box-card">
        <span className="header">{content.header}</span>
        <p className="content">{content.caption}</p>
    </div>
   ) 
}


export default BoxCard;