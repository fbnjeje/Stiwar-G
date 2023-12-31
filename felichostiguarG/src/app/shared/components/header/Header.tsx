import './index.css'

export default function Header() {
    
    return (
        <div className='header'>
            <section className='content-left'>
            <img className='logo' src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg" alt="" />              
            </section>
            <section className='content-right'>
                <ul className='items'>
                    <li className='item'>Home</li>
                    <li className='item'>Shows</li>
                    <li className='item'>Movies</li>
                    <li className='item'>TV</li>
                    <li className='item'>|</li>
                    <li className='item'>Login</li>
                    <li className='item'>
                        search
                    </li>
                </ul>
            </section>
        </div>
    )
}
