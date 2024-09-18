import './cta-stye..css';
import WorkImg from '../../assets/cta_work.gif'

export function CTAImage() {
    return (
        <img  src={WorkImg} onContextMenu={(e) => e.preventDefault()} className='' alt='image' />
    )
}