import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddColors = () => {
    const handleAddColors = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const DominantColor1 = form.DominantColor1.value;
        const DominantColor2 = form.DominantColor2.value;
        const AccentColor1 = form.AccentColor1.value;
        const AccentColor2 = form.AccentColor2.value;
        const AccentColor3 = form.AccentColor3.value;
        const AccentColor4 = form.AccentColor4.value;


        const newColor = { DominantColor1, DominantColor2, AccentColor1, AccentColor2, AccentColor3, AccentColor4, name }

        console.log(newColor);

        //send data to server
        fetch('https://colors-server-taupe.vercel.app/colors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newColor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Color Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <div >
                <h2 className='text-center text-5xl mt-5 mt-8'>Add a Color Palette</h2>
                <form onSubmit={handleAddColors}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dominant Color-1</span>
                            </label>
                            <input type="text" name="DominantColor1" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dominant Color-2</span>
                            </label>
                            <input type="text" name="DominantColor2" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Accent Color-1</span>
                            </label>
                            <input type="text" name="AccentColor1" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Accent Color-2</span>
                            </label>
                            <input type="text" name="AccentColor2" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Accent Color-3</span>
                            </label>
                            <input type="text" name="AccentColor3" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Accent Color-4</span>
                            </label>
                            <input type="text" name="AccentColor4" placeholder="#FFFFFFF" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label mt-5">
                            <span className="label-text text-center">Color Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-ghost bg-black hover:bg-slate-500 font-bold text-white btn-block" type="submit" value="Publish" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default AddColors;

