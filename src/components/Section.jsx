import '../css/section.css'
import logo2 from '../assets/logo2.png'
// eslint-disable-next-line react/prop-types
export const Section = ({ name , id}) => {
  return (
    <>
        <div className="section" id={id}>
            <h1>{name}</h1>
            <img src={logo2} alt="" />
        </div>
    </>
  )
}
