


const ColorCard = ({color}) => {

  const { _id, name, DominantColor1, DominantColor2, AccentColor1, AccentColor2, AccentColor3, AccentColor4 } = color;

  const d1 = `${DominantColor1}`;
  const d2 = `${DominantColor2}`;
  const a1 = `${AccentColor1}`;
  const a2 = `${AccentColor2}`;
  const a3 = `${AccentColor3}`;
  const a4 = `${AccentColor4}`;

  const divStyle1 =d1? {
    backgroundColor: d1,
    width: '50px', 
    height: '100px', 
  }:null;
  const divStyle2 =d2? {
    backgroundColor: d2,
    width: '50px', 
    height: '100px', 
  }:null;
  const divStyle3 = a1?{
    backgroundColor: a1,
    width: '50px', 
    height: '100px', 
  }:null;
  const divStyle4 =a2? {
    backgroundColor: a2,
    width: '50px', 
    height: '100px', 
  }:null;
  const divStyle5 =a3? {
    backgroundColor: a3,
    width: '50px', 
    height: '100px', 
  }:null;
  const divStyle6 =a4? {
    backgroundColor: a4,
    width: '50px', 
    height: '100px', 
  }:null;

    return (
       <div className="">
       <div className="flex ">
            {divStyle1 && <div style={divStyle1}> </div>}
            {divStyle2 && <div style={divStyle2}> </div>}
            {divStyle3 && <div style={divStyle3}> </div>}
            {divStyle4 && <div style={divStyle4}> </div>}
            {divStyle5 && <div style={divStyle5}> </div>}
            {divStyle6 && <div style={divStyle6}> </div>}
            
        </div>
        <div className="mt-3">
            <h1>Name : {name}</h1>
        </div>

       </div>
        
    );
};

export default ColorCard;