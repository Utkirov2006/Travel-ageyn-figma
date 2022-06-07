export default function Btns(props) {

    console.log(props);


    return (

        <div className="btns-one">

            <button  id="knob">{props.name}</button>


        </div>



    )
}