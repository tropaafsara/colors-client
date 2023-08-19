import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { FaHeart, FaHeartBroken } from "react-icons/fa";


const ColorCard = ({ color }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const { _id, name, DominantColor1, DominantColor2, AccentColor1, AccentColor2, AccentColor3, AccentColor4 } = color;

  // const [allcolors, setAllToys] = useState([])
  // const [searchText, setAllColors] = useState("");

  //local storage
  useEffect(() => {
    const storedFavorite = localStorage.getItem(_id);
    if (storedFavorite !== null) {
      setIsFavorite(storedFavorite === "true");
    }
  }, [_id]);


  const d1 = `${DominantColor1}`;
  const d2 = `${DominantColor2}`;
  const a1 = `${AccentColor1}`;
  const a2 = `${AccentColor2}`;
  const a3 = `${AccentColor3}`;
  const a4 = `${AccentColor4}`;

  const divStyle1 = d1 ? {
    backgroundColor: d1,
    width: '50px',
    height: '100px',
  } : null;
  const divStyle2 = d2 ? {
    backgroundColor: d2,
    width: '50px',
    height: '100px',
  } : null;
  const divStyle3 = a1 ? {
    backgroundColor: a1,
    width: '50px',
    height: '100px',
  } : null;
  const divStyle4 = a2 ? {
    backgroundColor: a2,
    width: '50px',
    height: '100px',
  } : null;
  const divStyle5 = a3 ? {
    backgroundColor: a3,
    width: '50px',
    height: '100px',
  } : null;
  const divStyle6 = a4 ? {
    backgroundColor: a4,
    width: '50px',
    height: '100px',
  } : null;




//   const handleSearch = () =>{
//     fetch(`http://localhost:8000/searchBycolor/${searchText}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAllColors(data);
//       });
// }


  const handleFavorite = () => {

    if (user && user.email) {

      const newFavoriteState = !isFavorite;
      setIsFavorite(newFavoriteState);
      localStorage.setItem(_id, newFavoriteState);


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: newFavoriteState ? "Added to Favorites" : "Removed from Favorites",
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      Swal.fire({
        title: 'Please login',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }
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
        <div className="flex gap-8 items-center">
          <h1>Name :  {name}</h1>
          <button onClick={handleFavorite}><span><FaHeart color={isFavorite ? "red" : "inherit"}></FaHeart></span></button>
        </div>
      </div>
    </div>

  );
};

export default ColorCard;