import './gallery.scss'
import datas from '../../datas/datas'
import Card from '../card/card'

export default function Gallery() {
    return (
        <main className='gallery'>
            {datas.map(data => {
                return (
                    <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                    />
                )
            })}
        </main>
    )
}