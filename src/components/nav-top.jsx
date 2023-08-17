import '../App.css';
import Search from './search';


export default function NavTop() {
    return(
        <div className='nav-top'>
            <div className='Title'><span>Web54</span> KB Website</div>
            <div className='nav-input'><Search /></div>
        </div>
    )
};