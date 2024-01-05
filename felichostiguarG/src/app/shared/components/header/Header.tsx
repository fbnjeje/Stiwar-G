import './index.css'

export default function Header() {
    
    return (
        <div className="container">
<           div className="holagente">
                <div className='header'>
                    
                    <section className='content-left'>
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National-Geographic-Logo.svg/1024px-National-Geographic-Logo.svg.png" alt="" />              
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
            </div>
        </div>
        
    )
}
