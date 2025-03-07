import './NoResults.scss'

export default function NoResults() {
    return <div ns="no-results" className='no-results'>
        <div className="no-results_emoji">😕</div>
        <div className="no-results_title">No Definitions Found</div>
        <div className="no-results_text">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</div>
    </div>
}