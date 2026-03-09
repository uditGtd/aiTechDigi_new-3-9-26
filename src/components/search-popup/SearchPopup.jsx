import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchPopup({ btnActive, setBtnActive }) {
  return (
    <div className={`popup-search-box search_1_popup_active ${btnActive && 'active'}`}>
        <div className="container">
            <h4 className="title">find what you need</h4>
            <div className="popup-search-box-form">
                <form action="#">
                    <div className="popup-search-box-input">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/> </button>
                </form>
                <button onClick={()=> setBtnActive(false)} type="button" className="popup-search-box-close-action-btn search_1_popup_close"> <FontAwesomeIcon icon={faTimes}/> </button>
            </div>
        </div>
    </div>
  )
}

export default SearchPopup