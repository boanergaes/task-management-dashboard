import './Footer.css'

import AnchorLi from '../AnchorLi/AnchorLi'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="upper">
                    <ul className="company-sec">
                        <h2 className="h2">Company</h2>
                        <AnchorLi text='About Us' href='#' />
                        <AnchorLi text='Careers' href='#' />
                        <AnchorLi text='Contact' href='#' />
                    </ul>

                    <ul className="product-sec">
                        <h2 className="h2">Products</h2>
                        <AnchorLi text='Features' href='#' />
                        <AnchorLi text='Pricing' href='#' />
                        <AnchorLi text='Support' href='#' />
                    </ul>

                    <ul className="resources">
                        <h2 className="h2">Resources</h2>
                        <AnchorLi text='Documentation' href='#' />
                        <AnchorLi text='Blog' href='#' />
                        <AnchorLi text='community' href='#' />
                    </ul>
                </div>

                <div className="lower">
                    © 2024 Task Management Dashboard. All rights reserved.
                </div>
            </div>
        </footer>
    )
}