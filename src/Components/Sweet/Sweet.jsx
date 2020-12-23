import React from 'react'
import Card from '../Card/Card'
import './Sweet.css'



let Sweet = (props) => {
    const {lang} = props.MainInfo
    return(
        <div className="sweet-div">
        {lang == 'en' ? <div className="sweet-div-title">Sweet Treats for You</div> : <div className="sweet-div-title ar">الحلو بدو حلو</div>}
            <div className="sweets-div">
                {lang == 'en' && <div className="sweets-div-cards">
                    < Card lang={lang} image='sweet1' title='Doughlicious' desc='Belgian chcocolate glazed donuts covered in icing with sprinkles on top' price='$9.99'/>
                    < Card lang={lang} image='sweet2' title='Caramel Wonder' desc='Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick' price='$12.99'/>
                    < Card lang={lang} image='sweet3' title='Brownie Bunch' desc='Double fudge brownie squares topped with white chocolate pieces and nuts' price='$9.99'/>
                </div>}

                {lang == 'ar' && <div className="sweets-div-cards">
                    < Card lang={lang} image='sweet1' title='لذيذ' desc='بلجين شوكولت غليزد دونتس مغطا بسبرنكلز مثلجا' price='$9.99'/>
                    < Card lang={lang} image='sweet2' title='كراميل وندر' desc='فانيلا ايس مغطا بكراميل مع شكولت غليز مع كوكو ستيك' price='$12.99'/>
                    < Card lang={lang} image='sweet3' title='بروني بنش' desc='دوبل فدج بروني مغطا مع شوكولت ابيض مع الفول السوداني' price='$9.99'/>
                </div>}
            </div>
        </div>

    )
}

export default Sweet