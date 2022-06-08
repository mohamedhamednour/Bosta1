


import React from 'react';
import '../App.css';
import '../tailwend.css';



import axios from "axios";







function Books() {
    const [profilee, setProfile] = React.useState([]);
    console.log('ss', profilee)
    const { items } = profilee

    const handeData = async (event) => {
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${profilee}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
        );

        console.log(data);
        setProfile(data);
    }

    const handelApi = async (event) => {
        if (event.key === 'Enter') {
            await fetch(`https://www.googleapis.com/books/v1/volumes?q=${profilee}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`)
                .then(results => results.json())
                .then(data => {
                    setProfile(data);
                    console.log(data)

                });
        }

    }
        React.useEffect(() => {
            handeData()

        }, [])
        const changeData = async (cat) => {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${cat}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
            )
            setProfile(data);

        }

        return (

            <>
                

                <center className='text-red-600/100 text-2xl'>Books</center>
                <center className="div">
                    <button onClick={() => changeData("تنمية بشرية")} className="btn btn-dark">تنمية بشرية </button>
                    <button onClick={() => changeData("برمجة ")} className="btn btn-dark">برمجة  </button>
                    <button onClick={() => changeData(' طب ')} className="btn btn-dark">طب   </button>
                    <button onClick={() => changeData(" روايات")} className="btn btn-dark"> روايات </button>
                    <button onClick={() => changeData(" افلام ")} className="btn btn-dark">افلام  </button>
                    <button onClick={() => changeData(' تاريخ ')} className="btn btn-dark">تاريخ   </button><button onClick={() => changeData("تنمية بشرية")} className="btn btn-dark">تنمية بشرية </button>

                    <button onClick={() => changeData("علم ")} className="btn btn-dark">علم  </button>
                    <br />
                    <br />
                    <input onKeyDown={handelApi} onChange={e => setProfile(e.target.value)} placeholder='serch' className='bg-color-red' type="text" name="name" />
                </center>
                <div class="grid grid-cols-3 p-10">
                    {items ? items.map((it) => [

                        <div className='p-2'> <img src={it.volumeInfo.imageLinks.smallThumbnail} alt="" /></div>
                        ,


                    ]) : ''}
                </div>



            </>
        );
    }

    export default Books;
