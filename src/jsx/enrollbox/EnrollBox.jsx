import graduate from './graduate.png'
import './Enrollbox.css'
const EnrollBox = () => {
    return (
        <>
          <div className="enroll-box-sz">
            <div className="outerline-box">
               <div className="enroll-ovw-box">
                 <div className="text-center"><img src={graduate} alt="image" className="enroll-img" /></div>
                 <div className="enroll-detail">
                <h5 className="enroll-detail-h5  enRollText">Will you get admission in Datta Meghe Institute of Medical Sciences?</h5>
                <p className="enroll-detail-ptag  enRollText2">Goodbye doubts! Say hello to our experts</p>
                <button className="enroll-detail-btn">Enroll Now</button>
               </div>
               </div>
             
            </div>
          </div>
        </>
    )
}
export default EnrollBox;