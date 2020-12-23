import React from "react"
import './Champs.css'
import Card from '../Card/Card'


let Champs = (props) => {
    let {lang} = props.MainInfo
    
    return (
        <div className="champs-div">
            {lang == 'en' ? <div className="monthly-champs-div">Monthly Champs</div> : <div className="monthly-champs-div-ar">ابطال الشهر</div>}
            <div className="cards-div">
                {lang == 'en' && <div className="cards-div-cards">
                    < Card lang={lang} title='Supreme Pizza' desc='Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto' price='$19.99'/>
                    < Card lang={lang} image='product2' title='Hawaiian Paradise' desc='Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto' price='$16.99'/>
                    < Card lang={lang} image='product3' title='Veggie Overload' desc='Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto' price='$14.99'/>
                </div>}
                
                {lang == 'ar' && <div className="cards-div-cards">
                    < Card lang={lang} title='سوبريم بيتزا' desc='مارينا صوص، حبق، صوص ايطالي، بندورة، زيتون و بستو' price='$19.99'/>
                    < Card lang={lang} image='product2' title='جنة هوايين' desc='مارينا صوص، حبق، صوص ايطالي، بندورة، زيتون و بستو' price='$16.99'/>
                    < Card lang={lang} image='product3' title='لمحبي الخضار' desc='مارينا صوص، حبق، صوص ايطالي، بندورة، زيتون و بستو' price='$14.99'/>
                </div>}

            </div>
        </div>
    )
}

export default Champs

